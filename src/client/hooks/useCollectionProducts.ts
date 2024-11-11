'use client';

import { useCallback, useState } from 'react';

import {
  CollectionProducts,
  ListCollectionProductsQueryVariables,
} from '@/common';
import { listCollectionProducts } from '@/common/api/services';

interface UseCollectionProductsState {
  loading: boolean;
  error: string;
  collection: CollectionProducts | null;
}

export default function useCollectionProducts() {
  const [state, setState] = useState<UseCollectionProductsState>({
    loading: false,
    error: '',
    collection: null,
  });

  const fetchCollectionProducts = useCallback(
    async (variables: ListCollectionProductsQueryVariables) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: '' }));

        const collection = await listCollectionProducts({ variables });

        setState((prev) => ({ ...prev, collection, error: '' }));
      } catch (error) {
        setState((prev) => ({ ...prev, error: (error as Error).message }));
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    },
    [],
  );

  return { ...state, fetchCollectionProducts };
}
