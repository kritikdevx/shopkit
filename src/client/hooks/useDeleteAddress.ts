'use client';

import { useState } from 'react';

import {
  DeleteCustomerAddressMutation,
  DeleteCustomerAddressMutationVariables,
} from '@/common';
import { deleteCustomerAddress } from '@/common/api/services';

interface UseDeleteAddressState {
  loading: boolean;
  error: string;
  success: string;
  data: DeleteCustomerAddressMutation['customerAddressDelete'] | null;
}

const useDeleteAddress = () => {
  const [state, setState] = useState<UseDeleteAddressState>({
    loading: false,
    error: '',
    success: '',
    data: null,
  });

  const handleDeleteAddress = async (
    variables: DeleteCustomerAddressMutationVariables,
  ) => {
    setState({ loading: true, error: '', success: '', data: null });

    try {
      const customerAddressDelete = await deleteCustomerAddress({
        variables,
      });

      setState((prev) => ({ ...prev, data: customerAddressDelete }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: (error as Error).message,
        data: null,
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return {
    ...state,
    deleteAddress: handleDeleteAddress,
  };
};

export default useDeleteAddress;
