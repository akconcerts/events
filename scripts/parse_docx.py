import zipfile
import xml.etree.ElementTree as ET
import sys
import os

docx_path = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-eventlist/8_13_2026.docx"

if not os.path.exists(docx_path):
    print(f"File not found: {docx_path}")
    sys.exit(1)

try:
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        # Word processing XML namespace
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            texts = [t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
            if texts:
                paragraphs.append("".join(texts))
        
        doc_text = "\n".join(paragraphs)
        print(f"Extracted {len(paragraphs)} paragraphs from docx:")
        print("="*50)
        print(doc_text[:2000]) # First 2000 chars
        print("="*50)
        
        with open("wayback_data/doc_extracted_text.txt", "w", encoding="utf-8") as f:
            f.write(doc_text)
            
        print("Full doc text saved to wayback_data/doc_extracted_text.txt")
except Exception as e:
    print(f"Error parsing docx: {e}")
