import { Customer } from '@/common';
import { createSlice, Slice } from '@reduxjs/toolkit';

export interface CustomerState {
  customerAccessToken: string | null;
  loading: boolean;
  customer: Customer | null;
  isNewCustomer: boolean;
  error: string;
}

const initialState: CustomerState = {
  customerAccessToken: null,
  customer: null,
  loading: false,
  isNewCustomer: true,
  error: '',
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
    startUpdateProfile: (state: CustomerState) => void;
    updateProfileSuccess: (
      state: CustomerState,
      action: { payload: Customer },
    ) => void;
    updateProfileFailure: (
      state: CustomerState,
      action: { payload: string },
    ) => void;

    clearError: (state: CustomerState) => void;
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

    startUpdateProfile: (state) => {
      state.loading = true;
      state.error = '';
    },
    updateProfileSuccess: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
      state.error = '';
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = '';
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

  startUpdateProfile,
  updateProfileSuccess,
  updateProfileFailure,

  clearError,
} = customerSlice.actions;

export default customerSlice.reducer;
