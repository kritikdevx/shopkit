'use client';

import {
  Connection,
  ListProductVariantsQueryVariables,
  PageInfo,
  ProductVariant,
} from '@/common';
import { listProductVariants } from '@/common/api/services';

import { useCallback, useState } from 'react';

interface UseProductVariantsState {
  loading: boolean;
  error: string | null;
  variants: Connection<ProductVariant> & {
    pageInfo: PageInfo;
  };
}

export default function useProducts() {
  const [state, setState] = useState<UseProductVariantsState>({
    loading: false,
    error: null,
    variants: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
  });

  const fetchProductVariants = useCallback(
    async (variables: ListProductVariantsQueryVariables) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const productVariants = await listProductVariants({
          variables,
        });

        setState((prev) => ({ ...prev, variants: productVariants.variants }));
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
    fetchProductVariants,
  };
}
