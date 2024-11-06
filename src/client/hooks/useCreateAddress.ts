'use client';

import { useState } from 'react';

import {
  CreateCustomerAddressMutation,
  CreateCustomerAddressMutationVariables,
} from '@/common';
import { createCustomerAddress } from '@/common/api/services';

interface UserCreateAddressState {
  loading: boolean;
  error: string;
  success: string;
  data: CreateCustomerAddressMutation['customerAddressCreate'] | null;
}

const useCreateAddress = () => {
  const [state, setState] = useState<UserCreateAddressState & {}>({
    loading: false,
    error: '',
    success: '',
    data: null,
  });

  const handleCreateAddress = async (
    variables: CreateCustomerAddressMutationVariables,
  ) => {
    setState({ loading: true, error: '', success: '', data: null });

    try {
      const { customerAddressCreate } = await createCustomerAddress({
        variables,
      });

      setState((prev) => ({ ...prev, data: customerAddressCreate }));
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
    createAddress: handleCreateAddress,
  };
};

export default useCreateAddress;
