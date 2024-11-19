'use client';

import { useCallback, useState } from 'react';

import { GetCollectionQueryVariables, Collection } from '@/common';
import { getCollection } from '@/common/api/services';

interface UseCollectionState {
  loading: boolean;
  error: string | null; // Changed to allow null
  collection: Collection | null;
}

interface UseCollectionReturn extends UseCollectionState {
  fetchCollection: (variables: GetCollectionQueryVariables) => Promise<void>;
  reset: () => void; // Added reset functionality
}

export default function useCollection(): UseCollectionReturn {
  const [state, setState] = useState<UseCollectionState>({
    loading: false,
    error: null, // Initialize as null
    collection: null,
  });

  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      collection: null,
    });
  }, []);

  const fetchCollection = useCallback(async function fetchCollection(
    variables: GetCollectionQueryVariables,
  ): Promise<void> {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const collection = await getCollection({
        variables,
      });

      // Prevent setting state if component is unmounted
      setState((prev) => ({ ...prev, collection, error: null }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';

      setState((prev) => ({ ...prev, error: errorMessage }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return { ...state, fetchCollection, reset };
}
