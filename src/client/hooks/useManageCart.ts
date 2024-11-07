'use client';

import { useState } from 'react';

import { CartLine } from '@/common';
import {
  addToCart,
  createCart,
  removeFromCart,
  updateCart,
} from '@/common/api/services';

import { useAppDispatch, useAppSelector } from '../store';
import { setCart } from '../store/slices/cart.slice';

interface UseManageCartState {
  loading: boolean;
  success: string;
  error: string;
}

export default function useManageCart() {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<UseManageCartState>({
    loading: false,
    success: '',
    error: '',
  });

  const { cart } = useAppSelector((state) => state.cart);

  const handleAddToCart = async (id: string, quantity: number) => {
    try {
      setState({ loading: true, success: '', error: '' });

      let updatedCart = cart;
      if (cart) {
        const cartLinesAdd = await addToCart({
          variables: {
            cartId: cart.id,
            lines: [
              {
                merchandiseId: id,
                quantity,
              },
            ],
          },
        });
        updatedCart = cartLinesAdd.cart;
      } else {
        const cartCreate = await createCart({
          variables: {
            input: {
              lines: [
                {
                  merchandiseId: id,
                  quantity,
                },
              ],
            },
          },
        });
        updatedCart = cartCreate.cart;
      }

      dispatch(setCart(updatedCart));

      setState((prev) => ({
        ...prev,
        success: 'Product added to cart',
        error: '',
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        success: '',
        error: (error as Error).message,
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleUpdateCart = async (line: CartLine, quantity: number) => {
    try {
      setState({ loading: true, success: '', error: '' });

      const cartLinesUpdate = await updateCart({
        variables: {
          cartId: cart?.id as string,
          lines: [
            {
              merchandiseId: line.merchandise.id,
              quantity,
            },
          ],
        },
      });

      dispatch(setCart(cartLinesUpdate.cart));

      setState((prev) => ({
        ...prev,
        success: 'Product updated in cart',
        error: '',
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        success: '',
        error: (error as Error).message,
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleRemoveFromCart = async (lineId: string) => {
    try {
      setState({ loading: true, success: '', error: '' });
      const cartLinesRemove = await removeFromCart({
        variables: {
          cartId: cart?.id as string,
          lineIds: [lineId],
        },
      });

      dispatch(setCart(cartLinesRemove.cart));

      setState((prev) => ({
        ...prev,
        success: 'Product removed from cart',
        error: '',
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        success: '',
        error: (error as Error).message,
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return {
    ...state,
    addToCart: handleAddToCart,
    updateCart: handleUpdateCart,
    removeFromCart: handleRemoveFromCart,
  };
}
