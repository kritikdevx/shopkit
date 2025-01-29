import { createSlice, Slice } from '@reduxjs/toolkit';

export interface CustomerState {
  customerAccessToken: string | null;
  loading: boolean;
  customer: {} | null;
  isNewCustomer: boolean;
}

const initialState: CustomerState = {
  customerAccessToken: null,
  customer: null,
  loading: false,
  isNewCustomer: false,
};

export const customerSlice: Slice<
  CustomerState,
  {
    setCustomerAccessToken: (
      state: CustomerState,
      action: { payload: string | null },
    ) => void;
    setLoading: (state: CustomerState, action: { payload: boolean }) => void;
    setCustomer: (state: CustomerState, action: { payload: {} | null }) => void;
    setIsNewCustomer: (
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
  },
});

export const {
  setCustomerAccessToken,
  setLoading,
  setCustomer,
  setIsNewCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;
