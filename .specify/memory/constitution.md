<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.0.0 (initial creation)
- Added sections: All principles and governance for AI-Native Book + RAG Chatbot project
- Templates requiring updates: N/A (initial creation)
- Follow-up TODOs: None
-->
# AI-Native Book + RAG Chatbot Constitution

## Core Principles

### Spec-Driven, AI-Generated Development
All development must follow spec-driven principles with Claude Code and Spec-Kit Plus as the primary development tools. Code generation must be AI-assisted with human oversight and approval at each stage.

### Retrieval-Grounded Answers (No Hallucinations)
The RAG chatbot must only respond based on retrieved content from the book. No generated responses that are not grounded in the source material. Strict adherence to citation and source verification.

### Minimal Scope, Demo-Ready Implementation
Focus on core functionality only - Docusaurus book generation, GitHub Pages deployment, and embedded RAG chatbot. No additional features or UI enhancements beyond the core requirements. MVP approach with clear completion criteria.

### Reproducible Setup with Free-Tier Services
All infrastructure and dependencies must use free-tier services only (Neon Serverless Postgres, Qdrant Cloud Free, GitHub Pages). Environment-based secrets management with no hardcoded credentials.

### Tech Stack Consistency
Backend: FastAPI for API services; SDK: OpenAI Agents / ChatKit for RAG functionality; DB: Neon Serverless Postgres for metadata; Vector DB: Qdrant Cloud for embeddings; Support: Full-book and selected-text Q&A capabilities.

## Technical Constraints

### Deployment Requirements
- Public deployment to GitHub Pages
- Backend services must be deployable on free-tier platforms
- No proprietary UI frameworks beyond Docusaurus and standard web components
- Environment-based secrets only (no hardcoded credentials)

### Quality Standards
- Grounded answers only (no hallucinations)
- Selected-text Q&A functionality must work reliably
- Public deployment must be accessible and functional
- Code must be maintainable and follow best practices

## Development Workflow

### Implementation Process
- Use Claude Code and Spec-Kit Plus for all development
- Follow Spec-Driven Development (SDD) methodology
- Generate specs, plans, and tasks before implementation
- All changes must be testable and verifiable
- Maintain small, focused commits with clear descriptions

### Quality Gates
- All functionality must be tested before deployment
- RAG responses must be verified for accuracy and grounding
- Deployment must be successful and publicly accessible
- Code must pass all linting and security checks

## Governance

All development must adhere to the principles outlined above. Changes to this constitution require explicit approval and documentation of the rationale. Implementation must follow the spec-driven approach with AI assistance using Claude Code and Spec-Kit Plus. The project must remain focused on the core deliverables: Docusaurus book generation and deployment, with an embedded RAG chatbot that provides only retrieval-grounded answers.

**Version**: 1.0.0 | **Ratified**: 2025-12-27 | **Last Amended**: 2025-12-27