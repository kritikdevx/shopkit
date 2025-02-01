import { GetProfileQueryVariables } from '@/common/types/queries/customer';
import { createAction } from '@reduxjs/toolkit';

export const customerActions = {
  startGetProfile: createAction<GetProfileQueryVariables>(
    'customer/startGetProfile',
  ),
};
