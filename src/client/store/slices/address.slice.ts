import { createSlice, Slice } from '@reduxjs/toolkit';

import { Address, Connection, PageInfo } from '@/common';

export interface AddressState {
  loading: boolean;
  addresses: Connection<Address> & {
    pageInfo: PageInfo;
  };
  defaultAddress: Address | null;
  error: string;
}

const initialState: AddressState = {
  loading: false,
  addresses: {
    edges: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
  },
  defaultAddress: null,
  error: '',
};

export const addressSlice: Slice<
  AddressState,
  {
    startListAddressesRequest: (state: AddressState) => void;
    listAddressesSuccess: (
      state: AddressState,
      action: {
        payload: {
          addresses: Connection<Address> & { pageInfo: PageInfo };
          defaultAddress: Address | null;
        };
      },
    ) => void;
    listAddressesFailure: (
      state: AddressState,
      action: { payload: string },
    ) => void;
    resetAddress: (state: AddressState) => void;
  },
  'address'
> = createSlice({
  name: 'address',
  initialState,
  reducers: {
    startListAddressesRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    listAddressesSuccess: (state, action) => {
      state.loading = false;
      state.addresses = action.payload.addresses;
      state.defaultAddress = action.payload.defaultAddress;
    },
    listAddressesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetAddress: (state) => {
      state = initialState;
    },
  },
});

export const {
  startListAddressesRequest,
  listAddressesSuccess,
  listAddressesFailure,
  resetAddress,
} = addressSlice.actions;

export default addressSlice.reducer;
