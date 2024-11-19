'use client';

import {
  Connection,
  ListProductsQueryVariables,
  PageInfo,
  Product,
} from '@/common';
import { listProducts } from '@/common/api/services';

import { useState, useCallback } from 'react';

interface UseProductsState {
  loading: boolean;
  error: string | null;
  products: Connection<Product> & {
    pageInfo: PageInfo;
  };
}

export default function useProducts() {
  const [state, setState] = useState<UseProductsState>({
    loading: false,
    error: null,
    products: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
  });

  const fetchProducts = useCallback(
    async (variables: ListProductsQueryVariables) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const products = await listProducts({
          variables,
        });

        setState((prev) => ({ ...prev, products, error: null }));
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
    fetchProducts,
  };
}
