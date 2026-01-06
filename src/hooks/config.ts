// Environment configuration for the RAG Chatbot
// This file contains environment-specific configuration values

export const config = {
  // API endpoint configuration
  api: {
    // Base URL for the RAG backend API
    // If not specified, defaults to localhost:8000
    baseUrl: process.env.RAG_API_BASE_URL || 'http://localhost:8000',

    // Query endpoint path
    queryEndpoint: '/query',

    // Request timeout in milliseconds
    timeout: parseInt(process.env.RAG_API_TIMEOUT || '10000', 10),

    // Maximum number of retries for failed requests
    maxRetries: parseInt(process.env.RAG_API_MAX_RETRIES || '3', 10),
  },

  // UI configuration
  ui: {
    // Whether to show the chatbot by default
    defaultVisible: process.env.RAG_CHATBOT_VISIBLE === 'true' || false,

    // Position of the chatbot widget (for floating implementation)
    defaultPosition: {
      bottom: process.env.RAG_CHATBOT_BOTTOM || '20px',
      right: process.env.RAG_CHATBOT_RIGHT || '20px',
    },

    // Maximum number of messages to display in the chat window
    maxMessages: parseInt(process.env.RAG_CHATBOT_MAX_MESSAGES || '50', 10),
  },

  // Feature flags
  features: {
    // Whether to show source references
    showSourceReferences: process.env.RAG_SHOW_SOURCES !== 'false',

    // Whether to enable session storage for conversation history
    enableSessionStorage: process.env.RAG_ENABLE_STORAGE !== 'false',
  },
};

// Validation function to check if the configuration is valid
export function validateConfig(): boolean {
  // Check if required configuration values are present
  if (!config.api.baseUrl) {
    console.error('Missing required configuration: api.baseUrl');
    return false;
  }

  try {
    new URL(config.api.baseUrl);
  } catch (error) {
    console.error('Invalid API base URL configuration:', config.api.baseUrl);
    return false;
  }

  return true;
}