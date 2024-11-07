'use client';

import { useState } from 'react';

import {
  CollectionProducts,
  ListCollectionProductsQueryVariables,
} from '@/common';
import { listCollectionProducts } from '@/common/api/services';

interface UseCollectionProductsState {
  loading: boolean;
  error: string | null;
  collection: CollectionProducts | null;
}

export default function useCollectionProducts() {
  const [state, setState] = useState<UseCollectionProductsState>({
    loading: false,
    error: null,
    collection: null,
  });

  async function fetchCollectionProducts(
    variables: ListCollectionProductsQueryVariables,
  ) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const collection = await listCollectionProducts({ variables });

      setState((prev) => ({ ...prev, collection }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }

  return { ...state, fetchCollectionProducts };
}
