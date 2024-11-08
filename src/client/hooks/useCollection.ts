'use client';

import { useState } from 'react';

import { GetCollectionQueryVariables, Collection } from '@/common';
import { getCollection } from '@/common/api/services';

interface UseCollectionState {
  loading: boolean;
  error: string | null;
  collection: Collection | null;
}

export default function useCollection() {
  const [state, setState] = useState<UseCollectionState>({
    loading: false,
    error: null,
    collection: null,
  });

  async function fetchCollection(variables: GetCollectionQueryVariables) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const collection = await getCollection({
        variables,
      });

      setState((prev) => ({ ...prev, collection }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }

  return { ...state, fetchCollection };
}
