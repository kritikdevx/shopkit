'use client';

import {
  Collection,
  Connection,
  ListCollectionsQueryVariables,
  PageInfo,
} from '@/common';
import { listCollections } from '@/common/api/services';

import { useCallback, useState } from 'react';

interface UseCollectionsState {
  loading: boolean;
  error: string;
  collections: Connection<Collection> & {
    pageInfo: PageInfo;
  };
}

export default function useCollections() {
  const [state, setState] = useState<UseCollectionsState>({
    loading: false,
    error: '',
    collections: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
  });

  const fetchCollections = useCallback(
    async (variables: ListCollectionsQueryVariables) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: '' }));

        const collections = await listCollections({
          variables,
        });

        setState((prev) => ({ ...prev, collections, error: '' }));
      } catch (error) {
        setState((prev) => ({ ...prev, error: (error as Error).message }));
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    },
    [],
  );

  return {
    ...state,
    fetchCollections,
  };
}
