import { GetCartQueryVariables } from '@/common';
import { createAction } from '@reduxjs/toolkit';

export const cartActions = {
  startGetCartRequest: createAction<GetCartQueryVariables>(
    'cart/startGetCartRequest',
  ),
  startCreateCartRequest: createAction('cart/startCreateCartRequest'),
};
