import os
import re
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

docs_dir = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/docs/master-sheet-guides"
artifacts_dir = "/Users/kb/.gemini/antigravity-ide/brain/68236e0c-08a9-4d0b-903b-7eb1a98165a7"

styles = getSampleStyleSheet()

# Custom typography & styles
book_title_style = ParagraphStyle(
    'BookTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=24,
    leading=28,
    textColor=colors.HexColor('#00205B'),
    alignment=1, # Center
    spaceAfter=12
)

book_subtitle_style = ParagraphStyle(
    'BookSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=12,
    leading=16,
    textColor=colors.HexColor('#FFB81C'),
    alignment=1, # Center
    spaceAfter=24
)

h1_style = ParagraphStyle(
    'BookH1',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=16,
    leading=20,
    textColor=colors.HexColor('#00205B'),
    spaceBefore=18,
    spaceAfter=8
)

h2_style = ParagraphStyle(
    'BookH2',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=15,
    textColor=colors.HexColor('#D97706'),
    spaceBefore=14,
    spaceAfter=6
)

body_style = ParagraphStyle(
    'BookBody',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13.5,
    textColor=colors.HexColor('#1E293B'),
    spaceAfter=8
)

code_style = ParagraphStyle(
    'BookCode',
    parent=styles['Normal'],
    fontName='Courier',
    fontSize=8,
    leading=10.5,
    textColor=colors.HexColor('#0F172A'),
    backColor=colors.HexColor('#F1F5F9'),
    borderColor=colors.HexColor('#CBD5E1'),
    borderWidth=0.5,
    borderPadding=6,
    spaceAfter=8
)

table_header_style = ParagraphStyle(
    'TableHeader',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=10.5,
    textColor=colors.white
)

table_cell_style = ParagraphStyle(
    'TableCell',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    leading=10.5,
    textColor=colors.HexColor('#1E293B')
)

def generate_master_book():
    md_path = os.path.join(docs_dir, "AK_Concerts_Master_Operational_Book.md")
    pdf_path = os.path.join(docs_dir, "AK_Concerts_Master_Operational_Book.pdf")
    artifact_pdf_path = os.path.join(artifacts_dir, "AK_Concerts_Master_Operational_Book.pdf")
    
    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    story = []
    
    # Cover / Header Title
    story.append(Spacer(1, 20))
    story.append(Paragraph("AK CONCERTS", book_subtitle_style))
    story.append(Paragraph("MASTER OPERATIONAL MANUAL &amp; ARCHITECTURE BOOK", book_title_style))
    story.append(HRFlowable(width="100%", thickness=3, color=colors.HexColor('#FFB81C'), spaceBefore=8, spaceAfter=20))
    
    in_code_block = False
    code_lines = []
    in_table = False
    table_rows = []
    
    for line in lines:
        raw_line = line.rstrip()
        
        # Skip top duplicated H1/H2 cover titles
        if raw_line.startswith("# AK CONCERTS") or raw_line.startswith("## Comprehensive Master Sheet"):
            continue
            
        # Code Blocks
        if raw_line.startswith("```"):
            if in_code_block:
                code_text = "<br/>".join([c.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace(" ", "&nbsp;") for c in code_lines])
                story.append(Paragraph(code_text, code_style))
                code_lines = []
                in_code_block = False
            else:
                in_code_block = True
            continue
            
        if in_code_block:
            code_lines.append(raw_line)
            continue
            
        # Tables
        if "|" in raw_line and not raw_line.startswith("```"):
            parts = [p.strip() for p in raw_line.split("|")[1:-1]]
            if all(set(p) <= set("-: ") for p in parts if p):
                continue # separator line
            table_rows.append(parts)
            in_table = True
            continue
        elif in_table:
            if table_rows:
                t_data = []
                for idx, r in enumerate(table_rows):
                    cell_st = table_header_style if idx == 0 else table_cell_style
                    t_data.append([Paragraph(cell, cell_st) for cell in r])
                
                t = Table(t_data, colWidths=[90, 150, 300])
                t.setStyle(TableStyle([
                    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#00205B')),
                    ('TEXTCOLOR', (0,0), (-1,0), colors.white),
                    ('ALIGN', (0,0), (-1,-1), 'LEFT'),
                    ('VALIGN', (0,0), (-1,-1), 'TOP'),
                    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CBD5E1')),
                    ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#00205B')),
                    ('TOPPADDING', (0,0), (-1,-1), 4),
                    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
                ]))
                story.append(t)
                story.append(Spacer(1, 8))
                table_rows = []
            in_table = False
            
        if not raw_line:
            story.append(Spacer(1, 4))
            continue
            
        # Headers
        if raw_line.startswith("# ") or raw_line.startswith("## CHAPTER"):
            text = raw_line.replace("#", "").strip()
            story.append(Paragraph(text, h1_style))
            story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#FFB81C'), spaceBefore=2, spaceAfter=8))
        elif raw_line.startswith("### "):
            text = raw_line[4:].strip()
            story.append(Paragraph(text, h2_style))
        elif raw_line.startswith("---"):
            story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceBefore=6, spaceAfter=6))
        else:
            formatted = raw_line
            formatted = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', formatted)
            formatted = re.sub(r'`(.*?)`', r'<font face="Courier" color="#00205B"><b>\1</b></font>', formatted)
            story.append(Paragraph(formatted, body_style))
            
    if table_rows:
        t_data = []
        for idx, r in enumerate(table_rows):
            cell_st = table_header_style if idx == 0 else table_cell_style
            t_data.append([Paragraph(cell, cell_st) for cell in r])
        t = Table(t_data, colWidths=[90, 150, 300])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#00205B')),
            ('TEXTCOLOR', (0,0), (-1,0), colors.white),
            ('ALIGN', (0,0), (-1,-1), 'LEFT'),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CBD5E1')),
            ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#00205B')),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ]))
        story.append(t)
        
    doc.build(story)
    
    with open(pdf_path, 'rb') as sf, open(artifact_pdf_path, 'wb') as df:
        df.write(sf.read())
        
    print(f"Successfully generated MASTER BOOK PDF: {pdf_path}")

generate_master_book()
