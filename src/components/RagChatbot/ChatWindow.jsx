import React from 'react';
import SourceReferences from './SourceReferences';

/**
 * ChatWindow component
 * Displays the conversation history between the user and the AI assistant
 */
const ChatWindow = ({ messages, loading = false }) => {
  // Helper function to render message with sources if available
  const renderMessageContent = (message) => {
    return (
      <div>
        <div>{message.text}</div>
        {message.status === 'fallback' && (
          <div className="rag-chatbot-fallback">
            (This is a fallback response as no relevant information was found in the documentation)
          </div>
        )}
        <SourceReferences sources={message.sources} />
      </div>
    );
  };

  return (
    <div
      className="rag-chatbot-messages"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
    >
      {messages.length === 0 && !loading && (
        <div
          className="rag-chatbot-message assistant"
          role="status"
          aria-live="polite"
        >
          Hello! I'm your AI documentation assistant. Ask me anything about the content on this page.
        </div>
      )}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`rag-chatbot-message ${message.sender}`}
          role="listitem"
          aria-label={`${message.sender} message: ${message.text}`}
        >
          {renderMessageContent(message)}
        </div>
      ))}
      {loading && (
        <div
          className="rag-chatbot-message assistant"
          role="status"
          aria-live="polite"
        >
          <div className="rag-chatbot-loading">
            <span>🤖</span>
            <span>Thinking...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;