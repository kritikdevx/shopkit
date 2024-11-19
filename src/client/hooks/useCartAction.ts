'use client';

import { useCallback, useState } from 'react';

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

interface LineToUpdate {
  id: string;
  quantity: number;
}

interface LineToAdd {
  merchandiseId: string;
  quantity: number;
}

export default function useCartAction() {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<UseCartActionState>({
    loading: false,
    success: '',
    error: '',
  });

  const { cart } = useAppSelector((state) => state.cart);

  const handleAddToCart = useCallback(
    async (lines: { id: string; quantity: number }[]) => {
      try {
        setState({ loading: true, success: '', error: '' });

        let updatedCart = cart;

        if (cart) {
          const existingLines = cart.lines.edges.map((edge) => edge.node);
          const linesToUpdate: LineToUpdate[] = [];
          const linesToAdd: LineToAdd[] = [];

          lines.forEach(({ id, quantity }) => {
            const existingLine = existingLines.find(
              (line) => line.merchandise.id === id,
            );

            if (existingLine) {
              linesToUpdate.push({
                id: existingLine.id,
                quantity: existingLine.quantity + quantity,
              });
            } else {
              linesToAdd.push({
                merchandiseId: id,
                quantity,
              });
            }
          });

          if (linesToUpdate.length > 0) {
            const cartLinesUpdate = await updateCart({
              variables: {
                cartId: cart.id,
                lines: linesToUpdate,
              },
            });
            updatedCart = cartLinesUpdate.cart;
          }

          if (linesToAdd.length > 0) {
            const cartLinesAdd = await addToCart({
              variables: {
                cartId: cart.id,
                lines: linesToAdd,
              },
            });
            updatedCart = cartLinesAdd.cart;
          }
        } else {
          const cartCreate = await createCart({
            variables: {
              lineItems: lines.map(({ id, quantity }) => ({
                merchandiseId: id,
                quantity,
              })),
            },
          });
          updatedCart = cartCreate.cart;
        }

        if (updatedCart) {
          dispatch(setCart(updatedCart));
        }

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
    },
    [dispatch, cart],
  );

  const handleUpdateCart = useCallback(
    async (line: CartLine, quantity: number) => {
      try {
        setState({ loading: true, success: '', error: '' });

        if (!cart) return; // Check if cart exists

        const cartLinesUpdate = await updateCart({
          variables: {
            cartId: cart.id,
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
    },
    [dispatch, cart],
  );

  const handleRemoveFromCart = useCallback(
    async (lineId: string) => {
      try {
        setState({ loading: true, success: '', error: '' });

        if (!cart) return; // Check if cart exists

        const cartLinesRemove = await removeFromCart({
          variables: {
            cartId: cart.id,
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
    },
    [dispatch, cart],
  );

  return {
    ...state,
    addToCart: handleAddToCart,
    updateCart: handleUpdateCart,
    removeFromCart: handleRemoveFromCart,
  };
}
