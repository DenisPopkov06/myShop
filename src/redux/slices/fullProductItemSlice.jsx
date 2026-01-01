import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullProductsInfo: [],
};

export const fullProductItemSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSize: (state, action) => {
      const indexProduct = state.fullProductsInfo.findIndex(
        (obj) => obj.id === action.payload?.id
      );

      state.fullProductsInfo[indexProduct].size = action.payload.size;
    },
    setCountPlus: (state, action) => {
      const indexProduct = state.fullProductsInfo.findIndex(
        (obj) => obj.id === action.payload?.id
      );
      state.fullProductsInfo[indexProduct].count += 1;
    },
    setCountMinus: (state, action) => {
      const indexProduct = state.fullProductsInfo.findIndex(
        (obj) => obj.id === action.payload?.id
      );
      state.fullProductsInfo[indexProduct].count -= 1;
    },
    setFullProductInfo: (state, action) => {
      state.fullProductsInfo.push(action.payload);
    },
  },
});
export const { setSize, setCountPlus, setCountMinus, setFullProductInfo } =
  fullProductItemSlice.actions;

export default fullProductItemSlice.reducer;
