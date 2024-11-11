'use client';

import { useCallback, useState } from 'react';

import { GetCollectionQueryVariables, Collection } from '@/common';
import { getCollection } from '@/common/api/services';

interface UseCollectionState {
  loading: boolean;
  error: string;
  collection: Collection | null;
}

export default function useCollection() {
  const [state, setState] = useState<UseCollectionState>({
    loading: false,
    error: '',
    collection: null,
  });

  const fetchCollection = useCallback(async function fetchCollection(
    variables: GetCollectionQueryVariables,
  ) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: '' }));

      const collection = await getCollection({
        variables,
      });

      setState((prev) => ({ ...prev, collection, error: '' }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return { ...state, fetchCollection };
}
