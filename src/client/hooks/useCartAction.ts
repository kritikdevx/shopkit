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

interface UseCartActionState {
  loading: boolean;
  success: string;
  error: string;
}

export default function useCartAction() {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<UseCartActionState>({
    loading: false,
    success: '',
    error: '',
  });

  const { cart } = useAppSelector((state) => state.cart);

  const handleAddToCart = async (id: string, quantity: number) => {
    try {
      setState({ loading: true, success: '', error: '' });

      let updatedCart = cart;
      // If the cart already exists, check if the product is already in the cart
      if (cart) {
        const line = cart.lines.edges.find(
          (edge) => edge.node.merchandise.id === id,
        )?.node;

        // If the product is already in the cart, update the quantity
        if (line) {
          const cartLinesUpdate = await updateCart({
            variables: {
              cartId: cart.id,
              lines: [
                {
                  id: line.id,
                  quantity: line.quantity + quantity,
                },
              ],
            },
          });
          updatedCart = cartLinesUpdate.cart;
        } else {
          // If the product is not in the cart, add it
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
        }
      } else {
        // If the cart does not exist, create a new cart
        const cartCreate = await createCart({
          variables: {
            lineItems: [
              {
                merchandiseId: id,
                quantity,
              },
            ],
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
              id: line.id,
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
