'use client';

import { useCallback, useState } from 'react';

import { GetMenuQueryVariables } from '@/common/types/queries/menu';
import { getMenu } from '@/common/api/services/menu';
import { Menu } from '@/common/types/schemas/menu';

interface UseMenuState {
  loading: boolean;
  error: string | null;
  menu: Menu | null;
}

export default function useMenu() {
  const [state, setState] = useState<UseMenuState>({
    loading: false,
    error: null,
    menu: null,
  });

  const fetchMenu = useCallback(async (variables: GetMenuQueryVariables) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const menu = await getMenu({
        variables,
      });

      setState((prev) => ({
        ...prev,
        menu,
        success: 'Menu fetched successfully',
        error: null,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: (error as Error).message,
        success: null,
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return {
    ...state,
    fetchMenu,
  };
}
