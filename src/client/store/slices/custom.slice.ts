import { createSlice, Slice } from '@reduxjs/toolkit';

export interface CustomState {
  // loading: boolean;
  attributes: Record<string, string>;
}

const initialState: CustomState = {
  // loading: false,
  attributes: {},
};

export const customSlice: Slice<
  CustomState,
  {
    // setLoading: (state: CustomState, action: { payload: boolean }) => void;
    setAttributes: (
      state: CustomState,
      action: { payload: Record<string, string> },
    ) => void;
    setAttribute: (
      state: CustomState,
      action: { payload: { key: string; value: string } },
    ) => void;
  },
  'custom'
> = createSlice({
  name: 'custom',
  initialState,
  reducers: {
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    setAttributes: (state, action) => {
      state.attributes = action.payload;
    },
    setAttribute: (state, action) => {
      const { key, value } = action.payload;
      state.attributes[key] = value;
    },
  },
});

export const { setAttributes, setAttribute } = customSlice.actions;

export default customSlice.reducer;
