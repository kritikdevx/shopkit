'use client';

import { useState } from 'react';

import {
  Connection,
  ListOrdersQueryVariables,
  Order,
  PageInfo,
} from '@/common';
import { listOrders } from '@/common/api/services';

interface UseOrdersState {
  loading: boolean;
  error: string | null;
  orders: Connection<Order> & {
    pageInfo: PageInfo;
    totalCount: number;
  };
}

export default function useOrders() {
  const [state, setState] = useState<UseOrdersState>({
    loading: false,
    error: null,
    orders: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 0,
    },
  });

  async function fetchOrders(variables: ListOrdersQueryVariables) {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const { orders } = await listOrders({ variables });

      setState((prev) => ({ ...prev, orders }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }

  return {
    ...state,
    fetchOrders,
  };
}
