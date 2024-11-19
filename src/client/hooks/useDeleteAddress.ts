'use client';

import { useState } from 'react';

import {
  DeleteCustomerAddressMutation,
  DeleteCustomerAddressMutationVariables,
} from '@/common';
import { deleteCustomerAddress } from '@/common/api/services';

interface UseDeleteAddressState {
  loading: boolean;
  error: string | null;
  success: string | null;
  data: DeleteCustomerAddressMutation['customerAddressDelete'] | null;
}

const useDeleteAddress = () => {
  const [state, setState] = useState<UseDeleteAddressState>({
    loading: false,
    error: null,
    success: null,
    data: null,
  });

  const handleDeleteAddress = async (
    variables: DeleteCustomerAddressMutationVariables,
  ) => {
    setState({ loading: true, error: null, success: null, data: null });

    try {
      const customerAddressDelete = await deleteCustomerAddress({
        variables,
      });

      setState((prev) => ({
        ...prev,
        data: customerAddressDelete,
        success: 'Address deleted successfully',
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
    deleteAddress: handleDeleteAddress,
  };
};

export default useDeleteAddress;
