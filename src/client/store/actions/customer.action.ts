import { UpdateCustomerProfileMutationVariables } from '@/common';
import { GetCustomerProfileQueryVariables } from '@/common/types/queries/customer';
import { createAction } from '@reduxjs/toolkit';

export const customerActions = {
  startGetProfile: createAction<GetCustomerProfileQueryVariables>(
    'customer/startGetProfile',
  ),
  startUpdateProfile: createAction<UpdateCustomerProfileMutationVariables>(
    'customer/startUpdateProfile',
  ),
};
