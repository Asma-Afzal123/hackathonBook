# Quickstart: RAG Chatbot Development

## Prerequisites

- Node.js 18+ installed
- Docusaurus project set up (already exists in this project)
- Running FastAPI backend with `/query` endpoint

## Local Development Setup

1. **Install Dependencies** (if any new ones are needed)
   ```bash
   npm install
   ```

2. **Start Docusaurus Development Server**
   ```bash
   npm run start
   ```

3. **Ensure Backend API is Running**
   - The RAG chatbot requires a backend API with a `/query` endpoint
   - Verify the backend is accessible from the frontend

## Component Structure

The RAG chatbot consists of these main components:

### Core Components
- `RagChatbot.jsx`: Main container component
- `ChatWindow.jsx`: Displays conversation history
- `QueryInput.jsx`: Input field with submit button
- `SourceReferences.jsx`: Displays source citations

### Hooks
- `useRagQuery.js`: Handles API communication and state management

## Integration Points

### Adding Chatbot to a Page
The chatbot can be integrated into any Docusaurus page using:
- MDX components: `<RagChatbot />`
- Or via theme customization

### API Integration
The chatbot communicates with the backend via:
- Endpoint: `/query` (POST request)
- Request format: `{ "query": "user question" }`
- Response format: `{ "response": "AI answer", "sources": [...] }`

## Testing the Component

1. **Manual Testing**
   - Navigate to any documentation page
   - Interact with the chatbot widget
   - Verify responses are displayed correctly
   - Test loading and error states

2. **API Testing**
   - Verify the `/query` endpoint is working
   - Test with various query types
   - Verify source references are returned properly

## Key Configuration

- API endpoint URL (should be configurable)
- Loading states display
- Error fallback messages
- Styling (CSS classes for theming)