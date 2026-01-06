import React from 'react';

/**
 * SourceReferences component
 * Displays source references for AI responses
 */
const SourceReferences = ({ sources }) => {
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <div className="rag-chatbot-sources" role="group" aria-label="Sources for this response">
      <div className="rag-chatbot-sources-header" aria-hidden="true">Sources:</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {sources.map((source, index) => (
          <li key={index} style={{ display: 'inline-block', marginRight: '8px' }}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rag-chatbot-source"
              title={`Source: ${source.title}`}
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceReferences;