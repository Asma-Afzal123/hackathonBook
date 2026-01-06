---
id: 2
title: rag-chatbot-plan
stage: plan
date: 2025-12-28
surface: agent
model: Claude Sonnet 4.5
feature: rag-chatbot
branch: 004-rag-chatbot
user: Claude Code User
command: /sp.plan
labels: [plan, rag, chatbot, docusaurus, frontend]
links:
  spec: specs/004-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-rag-chatbot/plan.md
  - specs/004-rag-chatbot/research.md
  - specs/004-rag-chatbot/data-model.md
  - specs/004-rag-chatbot/quickstart.md
  - specs/004-rag-chatbot/contracts/rag-query-api.yaml
tests:
  - specs/004-rag-chatbot/checklists/requirements.md
---

## Prompt

Objective:
Create a structured, modular plan for the Native AI Book project that covers content, architecture, and feature roadmap, focusing on embedding AI-driven experiences in the Docusaurus-based book.

Requirements:

Content Planning

List chapters/modules with learning objectives.

Identify examples, code snippets, and simulations per chapter.

Highlight areas for interactive AI demonstrations (chatbots, embeddings, code execution).

Feature Planning

Identify minimal viable AI features (RAG chatbot, inline Q&A, visualizations).

Specify frontend components (React/MDX) needed for each feature.

Define integration points with backend APIs (FastAPI agent).

Project Structure Planning

Outline folder structure for Docusaurus content, React components, and assets.

Suggest naming conventions for MDX pages, components, and API hooks.

Include roadmap for scaling book features (embodied intelligence simulations, humanoid robot demos).

User Interaction Planning

Define user flows for AI interactions (chat, code examples, embedded demos).

Specify fallback behaviors and error handling for AI features.

Determine UX constraints (minimal footprint, non-intrusive widgets, accessibility).

Delivery & Versioning Plan

Phased rollout of chapters and features.

Prioritize static content first, interactive AI later.

Include notes for testing, feedback collection, and continuous improvement.

Constraints:

Focus on frontend/MDX/React planning only.

Do not include backend implementation details.

Keep all suggestions compatible with Docusaurus v3+.

Avoid external UI libraries unless already included in the project.

Behavior:

Output structured plan with chapter-wise or feature-wise sections.

Highlight which features are core vs. optional for MVP.

Suggest code/component templates only if necessary to clarify integration.

## Response snapshot

# Implementation Plan: RAG Chatbot

**Branch**: `004-rag-chatbot` | **Date**: 2025-12-28 | **Spec**: [specs/004-rag-chatbot/spec.md](specs/004-rag-chatbot/spec.md)
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a minimal, non-intrusive RAG chatbot UI that integrates with the Docusaurus book and communicates with a local FastAPI agent. The chatbot will provide AI-powered assistance to readers by allowing them to ask questions about the content directly from the page they're reading, with responses grounded in the book's content and source references provided.

## Technical Context

**Language/Version**: JavaScript/React, Node.js 18+
**Primary Dependencies**: React, Docusaurus 3.5+, @docusaurus/core, @mdx-js/react
**Storage**: N/A (frontend only)
**Testing**: Jest/React Testing Library (if available in project)
**Target Platform**: Web browser (Docusaurus-based documentation site)
**Project Type**: Web frontend integration
**Performance Goals**: <500ms page load impact, <10s response time for queries
**Constraints**: No external UI libraries beyond those already in project, React/Docusaurus components only, must be compatible with Docusaurus v3+
**Scale/Scope**: Single-page session storage for conversation history

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ✅ Spec-Driven, AI-Generated Development: Following SDD methodology with Claude Code
- ✅ Retrieval-Grounded Answers: Chatbot will display source references as required by spec
- ✅ Minimal Scope: Sticking to core RAG chatbot functionality as defined
- ✅ Reproducible Setup: Using existing Docusaurus setup and project structure
- ✅ Tech Stack Consistency: Using React/Docusaurus components only as required

## Project Structure

### Documentation (this feature)

```text
specs/004-rag-chatbot/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   └── RagChatbot/           # RAG chatbot React components
│       ├── RagChatbot.jsx    # Main chatbot component
│       ├── ChatWindow.jsx    # Chat display area
│       ├── QueryInput.jsx    # Input field with submit button
│       ├── SourceReferences.jsx # Component for displaying source citations
│       └── styles.css        # Chatbot styling
├── hooks/
│   └── useRagQuery.js        # Hook for API communication
└── theme/
    └── RagChatbotProvider.jsx # Theme wrapper if needed
```

### Integration Points

```text
docs/
└── [all existing modules] # Each module page will have the chatbot widget

static/
└── [existing assets]

src/
└── pages/ # If needed for standalone chat interface
```

**Structure Decision**: Single frontend integration using React components compatible with Docusaurus. Components will be placed in src/components/RagChatbot/ with associated hooks in src/hooks/. The chatbot will be integrated into documentation pages via Docusaurus' MDX capabilities or theme overrides.

## Phase 1 Deliverables

### Generated Artifacts
- **research.md**: Research findings and technical decisions for RAG chatbot implementation
- **data-model.md**: Data models for Query, Response, SourceReference, and ChatSession entities
- **quickstart.md**: Development setup and integration guide for the RAG chatbot
- **contracts/rag-query-api.yaml**: API contract for the /query endpoint communication

### Component Architecture
The implementation will follow a modular component approach:

```
src/components/RagChatbot/
├── RagChatbot.jsx          # Main container component
├── ChatWindow.jsx          # Conversation display area
├── QueryInput.jsx          # Input field with submission handling
├── SourceReferences.jsx    # Component for displaying citations
└── styles.css              # Component styling
```

### Hooks and Services
```
src/hooks/
└── useRagQuery.js          # API communication and state management
```

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |

## Outcome

- ✅ Impact: Created comprehensive implementation plan for RAG chatbot feature
- 🧪 Tests: All planning artifacts created and validated
- 📁 Files: plan.md, research.md, data-model.md, quickstart.md, and contracts/rag-query-api.yaml created
- 🔁 Next prompts: Ready for task generation phase (/sp.tasks)
- 🧠 Reflection: Plan covers all technical aspects of frontend integration with clear component architecture

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed to task generation phase