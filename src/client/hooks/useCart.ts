'use client';

import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { cartActions } from '../store/actions';

export default function useCart() {
  const dispatch = useAppDispatch();
  const { loading, cart } = useAppSelector((state) => state.cart);

  // XXX: Use helper functions to return more specific data
  const cartCount = useMemo(() => {
    return (
      cart?.lines.edges.reduce((acc, item) => acc + item.node.quantity, 0) || 0
    );
  }, [cart]);

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
    cartCount,
    getCart,
  };
}
