import { createAction } from '@reduxjs/toolkit';
import {
  CartAttributesUpdateMutationVariables,
  GetCartQueryVariables,
} from '@/common';

export const cartActions = {
  startGetCartRequest: createAction<GetCartQueryVariables>(
    'cart/startGetCartRequest',
  ),
  startCreateCartRequest: createAction('cart/startCreateCartRequest'),
  startUpdateCartAttributesRequest:
    createAction<CartAttributesUpdateMutationVariables>(
      'cart/startUpdateCartAttributesRequest',
    ),
};
