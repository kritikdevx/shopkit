import { ListAddressesQueryVariables } from '@/common';
import { createAction } from '@reduxjs/toolkit';

export const addressActions = {
  startListAddressesRequest: createAction<ListAddressesQueryVariables>(
    'address/startListAddressesRequest',
  ),
  resetAddress: createAction('address/resetAddress'),
};
