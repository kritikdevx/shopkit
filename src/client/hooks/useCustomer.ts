import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  setCustomerAccessToken,
  setLoading,
  setCustomer,
  setIsNewCustomer,
} from '../store/slices/customer.slice';
import { customerAccessTokenWithMultipass } from '@/common/api/services';
import { Customer } from '@/common';
import { customerActions } from '../store/actions/customer.action';
import { GetProfileQueryVariables } from '@/common/types/queries/customer';

export default function useCustomer() {
  const dispatch = useAppDispatch();
  const { loading, customerAccessToken, customer, isNewCustomer } =
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

  const getProfile = (variables: GetProfileQueryVariables) => {
    dispatch(customerActions.startGetProfile(variables));
  };

  return {
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
    setAuthenticated: handleSetIsAuthenticated,
  };
}
