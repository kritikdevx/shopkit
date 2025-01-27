'use client';

import { useCallback, useState } from 'react';
import {
  Address,
  Connection,
  ListAddressesQueryVariables,
  PageInfo,
} from '@/common';
import { listCustomerAddresses } from '@/server';

interface UseAddressesState {
  loading: boolean;
  error: string | null;
  addresses: Connection<Address> & {
    pageInfo: PageInfo;
  };
  defaultAddress: Address | null;
}

export default function useAddresses() {
  const [state, setState] = useState<UseAddressesState>({
    loading: false,
    error: null,
    addresses: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    defaultAddress: null,
  });

  const fetchAddresses = useCallback(
    async (variables: ListAddressesQueryVariables) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const { addresses, defaultAddress } = await listCustomerAddresses({
          variables,
        });

        setState((prev) => ({
          ...prev,
          addresses,
          defaultAddress,
          error: null,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: (error as Error).message,
        }));
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    },
    [],
  );

  return {
    ...state,
    fetchAddresses,
  };
}
