import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  setCustomerAccessToken,
  setLoading,
} from '../store/slices/customer.slice';
import { customerAccessTokenWithMultipass } from '@/common/api/services';

export default function useCustomer() {
  const dispatch = useAppDispatch();
  const { loading, customerAccessToken, customer } = useAppSelector(
    (state) => state.customer,
  );

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

  const logout = useCallback(() => {
    dispatch(setCustomerAccessToken(null));
  }, [dispatch]);

  return {
    loading,
    customerAccessToken,
    customer,
    generateCTAWithMultipass,
    logout,
  };
}
