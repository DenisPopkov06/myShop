import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  counter: 0,
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
    setCount: (state) =>{
      state.counter = state.cart.length
    },
    deleteCartItem: (state, action) =>{
      state.cart = state.cart.filter(el => el.id !== action.payload)
    }
  },
});
export const { setCart, setCount, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
