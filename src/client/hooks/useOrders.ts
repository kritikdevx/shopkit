'use client';

import { useCallback, useState } from 'react';

import {
  Connection,
  ListOrdersQueryVariables,
  Order,
  PageInfo,
} from '@/common';
import { listOrders } from '@/common/api/services';

interface UseOrdersState {
  loading: boolean;
  error: string;
  orders: Connection<Order> & {
    pageInfo: PageInfo;
    totalCount: number;
  };
}

export default function useOrders() {
  const [state, setState] = useState<UseOrdersState>({
    loading: false,
    error: '',
    orders: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 0,
    },
  });

  const fetchOrders = useCallback(
    async (variables: ListOrdersQueryVariables) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: '' }));

        const { orders } = await listOrders({ variables });

        setState((prev) => ({ ...prev, orders, error: '' }));
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
    fetchOrders,
  };
}
