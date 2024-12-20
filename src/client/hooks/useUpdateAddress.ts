'use client';

import { useState } from 'react';

import {
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables,
} from '@/common';
import {
  updateCustomerAddress,
  updateCustomerDefaultAddress,
} from '@/common/api/services';

interface UserUpdateAddressState {
  loading: boolean;
  error: string | null;
  success: string | null;
  data: UpdateCustomerAddressMutation['customerAddressUpdate'] | null;
}

const useUpdateAddress = () => {
  const [state, setState] = useState<UserUpdateAddressState>({
    loading: false,
    error: null,
    success: null,
    data: null,
  });

  const handleUpdateAddress = async (
    variables: UpdateCustomerAddressMutationVariables,
    isDefault?: boolean,
  ) => {
    setState({ loading: true, error: null, success: null, data: null });

    try {
      const customerAddressUpdate = await updateCustomerAddress({
        variables,
      });

      if (isDefault) {
        await updateCustomerDefaultAddress({
          variables: {
            addressId: customerAddressUpdate.customerAddress.id,
            customerAccessToken: variables.customerAccessToken,
          },
        });
      }

      setState((prev) => ({
        ...prev,
        data: customerAddressUpdate,
        success: 'Address updated successfully',
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
    updateAddress: handleUpdateAddress,
  };
};

export default useUpdateAddress;
