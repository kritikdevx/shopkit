'use client';

import { useMemo } from 'react';

import { AttributeInput, Cart } from '@/common';

import { useAppDispatch, useAppSelector } from '../store';
import { cartActions } from '../store/actions';
import {
  resetCart as handleResetCart,
  setCart as handleSetCart,
} from '../store/slices/cart.slice';

export default function useCart() {
  const dispatch = useAppDispatch();
  const { loading, cart } = useAppSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return (
      cart?.lines.edges.reduce((acc, item) => acc + item.node.quantity, 0) ?? 0
    );
  }, [cart]);

  const getCart = () => {
    if (cart) {
      dispatch(cartActions.startGetCartRequest({ cartId: cart.id }));
    } else {
      dispatch(cartActions.startCreateCartRequest());
    }
  };

  const updateCartAttributes = (attributes: AttributeInput[]) => {
    if (cart) {
      dispatch(
        cartActions.startUpdateCartAttributesRequest({
          cartId: cart.id,
          attributes,
        }),
      );
    }
  };

  const updateCartDiscountCodes = (discountCodes: string[]) => {
    if (cart) {
      dispatch(
        cartActions.startUpdateCartDiscountCodesRequest({
          cartId: cart.id,
          discountCodes,
        }),
      );
    }
  };

  const resetCart = () => {
    dispatch(handleResetCart());
  };

  const setCart = (cart: Cart) => {
    dispatch(handleSetCart(cart));
  };

  return {
    loading,
    cart,
    cartCount,
    getCart,
    resetCart,
    setCart,
    updateCartAttributes,
    updateCartDiscountCodes,
  };
}
