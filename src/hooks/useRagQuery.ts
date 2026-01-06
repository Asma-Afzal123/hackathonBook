// API service utility for communicating with the RAG query endpoint
import { useState, useEffect } from 'react';

// Configuration for the API endpoint
const API_CONFIG = {
  baseUrl: process.env.RAG_API_BASE_URL || 'http://localhost:8000',
  queryEndpoint: '/query',
  timeout: 10000, // 10 seconds
};

// Type definitions
export interface QueryRequest {
  query: string;
}

export interface SourceReference {
  title: string;
  url: string;
  snippet?: string;
}

export interface QueryResponse {
  response: string;
  sources: SourceReference[];
  status: 'success' | 'fallback' | 'error';
  error?: string;
}

/**
 * Service function to send a query to the RAG backend
 * @param query - The user's question/query string
 * @returns Promise with the response from the backend
 */
export async function queryRagBackend(query: string): Promise<QueryResponse> {
  if (!query || query.trim().length === 0) {
    throw new Error('Query cannot be empty');
  }

  try {
    // Construct the full URL
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.queryEndpoint}`;

    // Make the API request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data: QueryResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error querying RAG backend:', error);
    // Return a fallback response in case of error
    return {
      response: "I'm sorry, but I'm currently unable to process your request. Please try again later.",
      sources: [],
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Custom hook for managing RAG query state
 */
export function useRagQuery() {
  const [response, setResponse] = useState<QueryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const query = async (queryText: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await queryRagBackend(queryText);
      setResponse(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      // Set a fallback response when there's an error
      setResponse({
        response: "I'm sorry, but I'm currently unable to process your request. Please try again later.",
        sources: [],
        status: 'error',
        error: err instanceof Error ? err.message : 'Unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResponse(null);
    setError(null);
    setLoading(false);
  };

  return {
    response,
    loading,
    error,
    query,
    reset,
  };
}