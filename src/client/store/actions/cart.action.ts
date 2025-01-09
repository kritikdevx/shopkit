import { createAction } from '@reduxjs/toolkit';
import {
  CartAttributesUpdateMutationVariables,
  CartDiscountCodesUpdateMutationVariables,
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
  startUpdateCartDiscountCodesRequest:
    createAction<CartDiscountCodesUpdateMutationVariables>(
      'cart/startUpdateCartDiscountCodesRequest',
    ),
};
