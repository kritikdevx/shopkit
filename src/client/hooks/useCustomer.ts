import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  setCustomerAccessToken,
  setLoading,
  setCustomer,
  setIsNewCustomer,
  clearError,
} from '../store/slices/customer.slice';
import { customerAccessTokenWithMultipass } from '@/common/api/services';
import { Customer, UpdateCustomerProfileMutationVariables } from '@/common';
import { customerActions } from '../store/actions/customer.action';
import { GetCustomerProfileQueryVariables } from '@/common/types/queries/customer';

export default function useCustomer() {
  const dispatch = useAppDispatch();
  const { loading, customerAccessToken, customer, isNewCustomer, error } =
    useAppSelector((state) => state.customer);

  const generateCTAWithMultipass = useCallback(
    async (multipassToken: string) => {
      dispatch(setLoading(true));

      try {
        const { customerAccessToken } = await customerAccessTokenWithMultipass({
          variables: {
            multipassToken,
          },
        });

        dispatch(setCustomerAccessToken(customerAccessToken.accessToken));
      } catch (error) {
        console.error(error);
        dispatch(setCustomerAccessToken(null));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch],
  );

  const handleSetCustomer = (customer: Customer | null) => {
    dispatch(setCustomer(customer));
  };

  const handleSetLoading = (loading: boolean) => {
    dispatch(setLoading(loading));
  };

  const logout = useCallback(() => {
    dispatch(setCustomerAccessToken(null));
    dispatch(setCustomer(null));
  }, [dispatch]);

  const handleSetIsNewCustomer = (isNewCustomer: boolean) => {
    dispatch(setIsNewCustomer(isNewCustomer));
  };

  const handleSetIsAuthenticated = (isNewCustomer: boolean) => {
    dispatch(setIsNewCustomer(isNewCustomer));
  };

  const getProfile = (variables: GetCustomerProfileQueryVariables) => {
    dispatch(customerActions.startGetProfile(variables));
  };

  const updateProfile = (variables: UpdateCustomerProfileMutationVariables) => {
    dispatch(customerActions.startUpdateProfile(variables));
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    error,
    loading,
    customerAccessToken,
    customer,
    isNewCustomer,
    generateCTAWithMultipass,
    setCustomer: handleSetCustomer,
    setLoading: handleSetLoading,
    setIsNewCustomer: handleSetIsNewCustomer,
    logout,
    getProfile,
    updateProfile,
    clearError: handleClearError,
    setAuthenticated: handleSetIsAuthenticated,
  };
}
