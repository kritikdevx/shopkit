'use client';

import { useState } from 'react';

import {
  CreateCustomerAddressMutation,
  CreateCustomerAddressMutationVariables,
} from '@/common';
import {
  createCustomerAddress,
  updateCustomerDefaultAddress,
} from '@/common/api/services';
import { useAppDispatch } from '../store';

interface UserCreateAddressState {
  loading: boolean;
  error: string;
  success: string;
  data: CreateCustomerAddressMutation['customerAddressCreate'] | null;
}

const useCreateAddress = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<UserCreateAddressState & {}>({
    loading: false,
    error: '',
    success: '',
    data: null,
  });

  const handleCreateAddress = async (
    variables: CreateCustomerAddressMutationVariables,
    isDefault?: boolean,
  ) => {
    setState({ loading: true, error: '', success: '', data: null });

    try {
      const createdAddress = await createCustomerAddress({
        variables,
      });
      const alreadyTaken = createdAddress.customerUserErrors.find(
        (error) => error.code === 'TAKEN',
      );

      if (alreadyTaken) {
        throw new Error('Address already exists');
      }

      if (isDefault && createdAddress.customerAddress !== null) {
        await updateCustomerDefaultAddress({
          variables: {
            addressId: createdAddress.customerAddress.id,
            customerAccessToken: variables.customerAccessToken,
          },
        });
      }

      setState((prev) => ({ ...prev, data: createdAddress }));
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
