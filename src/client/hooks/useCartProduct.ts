import { useState } from 'react';

import { CartLine } from '@/common';
import { removeFromCart, updateCart } from '@/common/api/services';

import { useAppDispatch, useAppSelector } from '../store';
import { setCart } from '../store/slices/cart.slice';

interface UseCartProductState {
  loading: boolean;
  success: string;
  error: string;
}

export default function useCartProduct({ line }: { line: CartLine }) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<UseCartProductState>({
    loading: false,
    success: '',
    error: '',
  });

  const { cart } = useAppSelector((state) => state.cart);

  const handleRemoveFromCart = async () => {
    try {
      setState({ loading: true, success: '', error: '' });
      const { cartLinesRemove } = await removeFromCart({
        variables: {
          cartId: cart?.id as string,
          lineIds: [line.id],
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

  const handleUpdateCart = async (quantity: number) => {
    try {
      setState({ loading: true, success: '', error: '' });
      const { cartLinesUpdate } = await updateCart({
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

  return {
    ...state,
    updateCart: handleUpdateCart,
    removeFromCart: handleRemoveFromCart,
  };
}
