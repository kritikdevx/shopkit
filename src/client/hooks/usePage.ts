'use client';

import { useCallback, useState } from 'react';

import { GetPageQueryVariables, Page } from '@/common';
import { getPage } from '@/common/api/services';

interface UsePageState {
  loading: boolean;
  error: string | null;
  page: Page | null;
}

export default function usePage() {
  const [state, setState] = useState<UsePageState>({
    loading: false,
    error: null,
    page: null,
  });

  const fetchPage = useCallback(async function fetchPage(
    variables: GetPageQueryVariables,
  ) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const page = await getPage({
        variables,
      });

      setState((prev) => ({ ...prev, page, error: null }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return {
    ...state,
    fetchPage,
  };
}
