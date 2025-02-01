import { Customer } from '@/common';
import { createSlice, Slice } from '@reduxjs/toolkit';

export interface CustomerState {
  customerAccessToken: string | null;
  loading: boolean;
  customer: Customer | null;
  isNewCustomer: boolean;
  isAuthenticated: boolean;
}

const initialState: CustomerState = {
  customerAccessToken: null,
  customer: null,
  loading: false,
  isNewCustomer: true,
  isAuthenticated: false,
};

export const customerSlice: Slice<
  CustomerState,
  {
    setCustomerAccessToken: (
      state: CustomerState,
      action: { payload: string | null },
    ) => void;
    setLoading: (state: CustomerState, action: { payload: boolean }) => void;
    setCustomer: (
      state: CustomerState,
      action: { payload: Customer | null },
    ) => void;
    setIsNewCustomer: (
      state: CustomerState,
      action: { payload: boolean },
    ) => void;

    startGetProfile: (state: CustomerState) => void;
    getProfileSuccess: (
      state: CustomerState,
      action: { payload: Customer },
    ) => void;
    getProfileFailure: (state: CustomerState) => void;
    setAuthenticated: (
      state: CustomerState,
      action: { payload: boolean },
    ) => void;
  },
  'customer'
> = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomerAccessToken: (state, action) => {
      state.customerAccessToken = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setIsNewCustomer: (state, action) => {
      state.isNewCustomer = action.payload;
    },

    startGetProfile: (state) => {
      state.loading = true;
    },
    getProfileSuccess: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
    },
    getProfileFailure: (state) => {
      state.loading = false;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setCustomerAccessToken,
  setLoading,
  setCustomer,
  setIsNewCustomer,

  startGetProfile,
  getProfileSuccess,
  getProfileFailure,
} = customerSlice.actions;

export default customerSlice.reducer;
