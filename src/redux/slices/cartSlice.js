import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const indexProduct = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexProduct === -1) {
        state.cart.push({ ...action.payload, count: 1 });
      } else {
        state.cart[indexProduct].count += 1;
      }
    },
  },
});
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
