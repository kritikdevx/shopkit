'use client';

import { useAppDispatch, useAppSelector } from '../store';
import { cartActions } from '../store/actions';

export default function useCart() {
  const dispatch = useAppDispatch();
  const { loading, cart } = useAppSelector((state) => state.cart);

  // XXX: Use helper functions to return more specific data

  function getCart() {
    if (cart) {
      dispatch(cartActions.startGetCartRequest({ cartId: cart.id }));
    } else {
      dispatch(cartActions.startCreateCartRequest());
    }
  }

  return {
    loading,
    cart,
    getCart,
  };
}
