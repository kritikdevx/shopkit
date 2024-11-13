'use client';

import { useCallback, useMemo } from 'react';

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

  const getCart = useCallback(() => {
    if (loading) return;

    if (cart) {
      dispatch(cartActions.startGetCartRequest({ cartId: cart.id }));
    } else {
      dispatch(cartActions.startCreateCartRequest());
    }
  }, [loading, cart]);

  return {
    loading,
    cart,
    cartCount,
    getCart,
  };
}
