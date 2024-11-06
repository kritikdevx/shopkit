import { useState } from 'react';

import {
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables,
} from '@/common';
import { updateCustomerAddress } from '@/common/api/services';

interface UserUpdateAddressState {
  loading: boolean;
  error: string;
  success: string;
  data: UpdateCustomerAddressMutation['customerAddressUpdate'] | null;
}

const useUpdateAddress = () => {
  const [state, setState] = useState<UserUpdateAddressState>({
    loading: false,
    error: '',
    success: '',
    data: null,
  });

  const handleUpdateAddress = async (
    variables: UpdateCustomerAddressMutationVariables,
  ) => {
    setState({ loading: true, error: '', success: '', data: null });

    try {
      const { customerAddressUpdate } = await updateCustomerAddress({
        variables,
      });

      setState((prev) => ({ ...prev, data: customerAddressUpdate }));
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
    updateAddress: handleUpdateAddress,
  };
};

export default useUpdateAddress;
