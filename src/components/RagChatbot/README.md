# RAG Chatbot Component

The RAG (Retrieval-Augmented Generation) Chatbot provides an AI-powered assistant that can answer questions about the documentation content.

## Features

- **Floating Widget**: Non-intrusive chat interface that appears as a toggle button
- **Source References**: AI responses include links to relevant documentation sources
- **Responsive Design**: Works on different screen sizes
- **Accessibility**: Keyboard navigation, ARIA labels, and focus management
- **Session Storage**: Conversation history persists during the session

## Usage

The component is automatically integrated into documentation pages through the Docusaurus theme.

## How It Works

1. Users click the chat toggle button (💬) to open the chat interface
2. Users type questions in the input field and submit
3. The query is sent to the RAG backend API at `/query`
4. The AI response is displayed with source references when available
5. Responses include links to relevant documentation sections

## API Configuration

The component uses the following environment variables:

- `RAG_API_BASE_URL`: Base URL for the RAG backend (defaults to `http://localhost:8000`)
- `RAG_API_TIMEOUT`: Request timeout in milliseconds (defaults to `10000`)

## Error Handling

- Network errors show a fallback message
- Empty queries are prevented
- API errors are gracefully handled
- Error boundaries prevent UI crashes

## Accessibility

- Keyboard navigation with Tab and Enter keys
- Escape key closes the chat window
- ARIA labels for screen readers
- Focus management when opening/closing
- Proper semantic HTML structure