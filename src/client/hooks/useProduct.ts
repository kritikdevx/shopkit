'use client';

import { useCallback, useState } from 'react';

import { GetProductQueryVariables, Product } from '@/common';
import { getProduct } from '@/common/api/services';

interface UseProductState {
  loading: boolean;
  error: string | null;
  product: Product | null;
}

export default function useProduct() {
  const [state, setState] = useState<UseProductState>({
    loading: false,
    error: null,
    product: null,
  });

  const fetchProduct = useCallback(async function fetchProduct(
    variables: GetProductQueryVariables,
  ) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const product = await getProduct({
        variables,
      });

      setState((prev) => ({ ...prev, product, error: null }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return {
    ...state,
    fetchProduct,
  };
}
