# Data Model: RAG Chatbot

## Entities

### Query
- **Definition**: User input text sent to the RAG system for processing
- **Fields**:
  - `id` (string): Unique identifier for the query
  - `text` (string): The actual question text entered by the user
  - `timestamp` (Date): When the query was submitted
  - `status` (enum): 'pending', 'processing', 'completed', 'error'
- **Validation**: Must not be empty or whitespace-only
- **Relationships**: One-to-many with Response (a query generates one response)

### Response
- **Definition**: AI-generated answer returned from the query API
- **Fields**:
  - `id` (string): Unique identifier for the response
  - `queryId` (string): Reference to the associated query
  - `text` (string): The AI-generated response text
  - `timestamp` (Date): When the response was received
  - `status` (enum): 'success', 'fallback', 'error'
- **Validation**: Must contain either response text or error/fallback message
- **Relationships**: Many-to-one with Query, one-to-many with SourceReference

### SourceReference
- **Definition**: Citation to specific documentation content used to generate the response
- **Fields**:
  - `id` (string): Unique identifier for the reference
  - `responseId` (string): Reference to the associated response
  - `title` (string): Title or description of the referenced content
  - `url` (string): URL or relative path to the referenced documentation
  - `snippet` (string): Excerpt from the referenced content (optional)
- **Validation**: URL must be a valid relative path or absolute URL
- **Relationships**: Many-to-one with Response

### ChatSession
- **Definition**: Temporary storage of conversation history for the current page session
- **Fields**:
  - `id` (string): Unique identifier for the session
  - `pageUrl` (string): The URL of the current page where the chat is active
  - `messages` (array): Array of Query/Response pairs in chronological order
  - `createdAt` (Date): When the session was created
  - `lastActivityAt` (Date): When the last message was added
- **Validation**: Session should expire after period of inactivity
- **Relationships**: One-to-many with Query/Response pairs