'use client';

import { useState } from 'react';

import {
  UpdateCustomerDefaultAddressMutation,
  UpdateCustomerDefaultAddressMutationVariables,
} from '@/common';

import { updateCustomerDefaultAddress } from '@/common/api/services';

interface UseUpdateDefaultAddressState {
  loading: boolean;
  error: string | null;
  success: string | null;
  data:
    | UpdateCustomerDefaultAddressMutation['customerDefaultAddressUpdate']
    | null;
}

const useUpdateDefaultAddress = () => {
  const [state, setState] = useState<UseUpdateDefaultAddressState>({
    loading: false,
    error: null,
    success: null,
    data: null,
  });

  const handleUpdateDefaultAddress = async (
    variables: UpdateCustomerDefaultAddressMutationVariables,
  ) => {
    setState({ loading: true, error: null, success: null, data: null });

    try {
      const customerDefaultAddressUpdate = await updateCustomerDefaultAddress({
        variables,
      });

      setState((prev) => ({
        ...prev,
        success: 'Default address updated',
        data: customerDefaultAddressUpdate,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: (error as Error).message,
        data: null,
        success: null,
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return {
    ...state,
    updateDefaultAddress: handleUpdateDefaultAddress,
  };
};

export default useUpdateDefaultAddress;
