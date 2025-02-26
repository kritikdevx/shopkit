import { createSlice, Slice } from '@reduxjs/toolkit';

import { Cart } from '@/common';

export interface CartState {
  cart: Cart | null;
  loading: boolean;
}

const initialState: CartState = {
  cart: null,
  loading: false,
};

export const cartSlice: Slice<
  CartState,
  {
    setCart: (state: CartState, action: { payload: Cart }) => void;
    resetCart: (state: CartState) => void;
    setLoading: (state: CartState, action: { payload: boolean }) => void;

    startGetCartRequest: (state: CartState) => void;
    getCartSuccess: (state: CartState, action: { payload: Cart }) => void;
    getCartFailure: (state: CartState) => void;

    startCreateCartRequest: (state: CartState) => void;
    createCartSuccess: (state: CartState, action: { payload: Cart }) => void;
    createCartFailure: (state: CartState) => void;

    startUpdateCartAttributesRequest: (state: CartState) => void;
    updateCartAttributesSuccess: (
      state: CartState,
      action: { payload: Cart },
    ) => void;
    updateCartAttributesFailure: (state: CartState) => void;
    startUpdateCartDiscountCodesRequest: (state: CartState) => void;
    updateCartDiscountCodesSuccess: (
      state: CartState,
      action: { payload: Cart | null },
    ) => void;
    updateCartDiscountCodesFailure: (state: CartState) => void;
  },
  'cart'
> = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    startGetCartRequest: (state) => {
      state.loading = true;
    },
    getCartSuccess: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    getCartFailure: (state) => {
      state.loading = false;
    },
    startCreateCartRequest: (state) => {
      state.loading = true;
    },
    createCartSuccess: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    createCartFailure: (state) => {
      state.loading = false;
    },
    startUpdateCartAttributesRequest: (state) => {
      state.loading = true;
    },
    updateCartAttributesSuccess: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    updateCartAttributesFailure: (state) => {
      state.loading = false;
    },
    startUpdateCartDiscountCodesRequest: (state) => {
      state.loading = true;
    },
    updateCartDiscountCodesSuccess: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    updateCartDiscountCodesFailure: (state) => {
      state.loading = false;
    },
    resetCart: (state) => {
      state.cart = null;
      state.loading = false;
    },
  },
});

export const {
  setCart,
  resetCart,
  setLoading,
  startGetCartRequest,
  getCartSuccess,
  getCartFailure,
  startCreateCartRequest,
  createCartSuccess,
  createCartFailure,
  startUpdateCartAttributesRequest,
  updateCartAttributesSuccess,
  updateCartAttributesFailure,
  startUpdateCartDiscountCodesRequest,
  updateCartDiscountCodesSuccess,
  updateCartDiscountCodesFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
