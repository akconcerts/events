# Shared commit attribution standard

Commit subject: `ORG-ACTOR - Description`. Examples: `FMG-GPT - Add SEO pages`, `MARTINMEDIA-HUMAN - Update integration`, `CLIENT-HUMAN - Update hours`. Use the **actual** responsible organization and actor, not necessarily the repository owner. FMG assistant commits must begin `FMG-GPT - `.

For multi-line messages add trailers: `Change-Org: <actual organization>`, `Change-Actor: <actual actor>`, `Change-Project: <repo>`, `Change-Source: <AI-assisted or human>`. These are audit metadata, not cryptographic signatures. Preserve Git author/committer identity and do not rewrite existing history.

Canonical policy: https://github.com/kb907alaska/FMG-SetupTempRulesDocs/blob/main/rules/COMMIT_ATTRIBUTION_FINGERPRINT.md
