import React, { useState, useRef, useImperativeHandle } from 'react';
import { useRagQuery } from '../../hooks/useRagQuery';

/**
 * QueryInput component
 * Provides an input field and submit button for users to ask questions
 */
const QueryInput = ({ onSendMessage, onReceiveResponse, setLoading, onError }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const { query, loading, response, error } = useRagQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Send user message
      const userMessage = {
        id: `user-${Date.now()}`,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };
      onSendMessage(userMessage);
      setInputValue('');

      // Show loading state
      setLoading(true);

      // Query the RAG backend
      try {
        const result = await query(inputValue);

        // Send response message
        if (result) {
          const responseMessage = {
            id: `assistant-${Date.now()}`,
            text: result.response,
            sender: 'assistant',
            timestamp: new Date(),
            sources: result.sources || [],
            status: result.status || 'success'
          };
          onReceiveResponse(responseMessage);
        }
      } catch (err) {
        console.error('Error getting response:', err);
        if (onError) {
          onError(err);
        }
      } finally {
        setLoading(false);
        // Focus the input after sending
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputFocus = () => {
    // Add any special focus handling if needed
  };

  return (
    <form className="rag-chatbot-input-area" onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        className="rag-chatbot-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onFocus={handleInputFocus}
        placeholder="Ask a question about the documentation..."
        rows="1"
        aria-label="Type your question to the AI documentation assistant"
        disabled={loading}
        aria-busy={loading}
      />
      <button
        type="submit"
        className="rag-chatbot-send-button"
        disabled={!inputValue.trim() || loading}
        aria-label="Send message"
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default QueryInput;