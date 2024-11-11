'use client';

import { useCallback, useState } from 'react';

import { GetProductQueryVariables, Product } from '@/common';
import { getProduct } from '@/common/api/services';

import { useAppDispatch, useAppSelector } from '../store';

interface UseProductState {
  loading: boolean;
  error: string;
  product: Product | null;
}

export default function useProduct() {
  const [state, setState] = useState<UseProductState>({
    loading: false,
    error: '',
    product: null,
  });

  const fetchProduct = useCallback(async function fetchProduct(
    variables: GetProductQueryVariables,
  ) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: '' }));

      const product = await getProduct({
        variables,
      });

      setState((prev) => ({ ...prev, product, error: '' }));
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
