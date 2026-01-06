import React, { useState, useEffect } from 'react';
import QueryInput from './QueryInput';
import ChatWindow from './ChatWindow';
import ErrorBoundary from './ErrorBoundary';
import './styles.css';

/**
 * Main RAG Chatbot component
 * Provides a floating chat interface for users to ask questions about the documentation
 */
const RagChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // Try to load messages from session storage
    if (typeof window !== 'undefined') {
      const savedMessages = sessionStorage.getItem('ragChatMessages');
      return savedMessages ? JSON.parse(savedMessages) : [];
    }
    return [];
  });
  const [loading, setLoading] = useState(false);

  // Save messages to session storage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('ragChatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen) {
      // Focus the input when chat opens
      const input = document.querySelector('.rag-chatbot-input');
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }, [isOpen]);

  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const handleError = (error) => {
    const errorMessage = {
      id: `error-${Date.now()}`,
      text: "I'm sorry, but I'm currently unable to process your request. Please try again later.",
      sender: 'assistant',
      timestamp: new Date(),
      status: 'error'
    };
    setMessages(prev => [...prev, errorMessage]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeChat();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <div className="rag-chatbot-container">
        <button
          className="rag-chatbot-toggle"
          onClick={toggleChat}
          aria-label="Open AI documentation assistant"
          title="Open AI documentation assistant"
        >
          💬
        </button>
      </div>
    );
  }

  return (
    <div className="rag-chatbot-container">
      <ErrorBoundary>
        <div
          className="rag-chatbot-widget"
          role="dialog"
          aria-modal="true"
          aria-label="AI Documentation Assistant"
        >
          <div className="rag-chatbot-header">
            <span tabIndex="0">AI Documentation Assistant</span>
            <button
              className="rag-chatbot-close"
              onClick={closeChat}
              aria-label="Close chat"
              title="Close chat (Esc)"
            >
              ×
            </button>
          </div>
          <div className="rag-chatbot-body">
            <ChatWindow messages={messages} loading={loading} />
            <QueryInput
              onSendMessage={addMessage}
              onReceiveResponse={addMessage}
              setLoading={setLoading}
              onError={handleError}
            />
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default RagChatbot;