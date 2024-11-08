'use client';

import { ListAddressesQueryVariables } from '@/common';

import { useAppDispatch, useAppSelector } from '../store';
import { addressActions } from '../store/actions/address.action';
import { useCallback } from 'react';

export default function useAddresses() {
  const dispatch = useAppDispatch();
  const { addresses, defaultAddress, loading, error } = useAppSelector(
    (state) => state.address,
  );

  // TODO: Need to revisit
  const fetchAddresses = useCallback(
    (variables: ListAddressesQueryVariables) => {
      dispatch(addressActions.startListAddressesRequest(variables));
    },
    [dispatch],
  );

  return {
    addresses,
    defaultAddress,
    loading,
    error,
    fetchAddresses,
  };
}
