---
id: 1
title: Create AI Book RAG Chatbot Constitution
stage: constitution
date: 2025-12-27
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Dell
command: /sp.constitution
labels: [constitution,spec-driven,rag,ai-book]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
---

## Prompt

```
/sp.constitution

Project: AI-Native Book + RAG Chatbot

Goal:
Use Claude Code and Spec-Kit Plus to generate a Docusaurus book, deploy it to GitHub Pages, and embed a RAG chatbot that answers only from book content.

Principles:
- Spec-driven, AI-generated only
- Retrieval-grounded answers (no hallucinations)
- Minimal scope, demo-ready
- Reproducible setup

Deliverables:
- Docusaurus book (GitHub Pages)
- Embedded RAG chatbot

Tech:
- Backend: FastAPI
- SDK: OpenAI Agents / ChatKit
- DB: Neon Serverless Postgres
- Vector DB: Qdrant Cloud (Free)
- Supports full-book + selected-text Q&A

Constraints:
- Free-tier services only
- No extra UI or features
- Env-based secrets

Success:
- Public deployment
- Grounded answers only
- Selected-text Q&A works

End.
```

## Response snapshot

Constitution created for AI-Native Book + RAG Chatbot project with the following principles:
- Spec-Driven, AI-Generated Development
- Retrieval-Grounded Answers (No Hallucinations)
- Minimal Scope, Demo-Ready Implementation
- Reproducible Setup with Free-Tier Services
- Tech Stack Consistency
- Technical Constraints and Quality Standards
- Development Workflow and Quality Gates
- Governance structure

## Outcome

- ✅ Impact: Created project constitution with all required principles and governance structure
- 🧪 Tests: N/A (documentation task)
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Continue with spec generation using /sp.specify
- 🧠 Reflection: Constitution properly captures all project requirements and constraints

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed with spec generation