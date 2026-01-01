import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  counter: 0,
  totalPrice: 0,
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.count, 0);
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
        action.payload.count === undefined
          ? state.cart.push({ ...action.payload, count: 1 })
          : state.cart.push(action.payload);
      } else {
        if (action.payload.fullitem === undefined) {
          state.cart.push(action.payload);
        } else {
          state.cart[indexProduct].count += 1;
        }
      }
    },
    setCount: (state) => {
      state.counter = state.cart.length;
      state.totalPrice = calculateTotalPrice(state.cart);
    },
    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter((el) => {
        const id = el.id === action.payload[0];
        const size = el.size === action.payload[1];
        const count = el.count === action.payload[2];
        return !(id&&size&&count)
      });
      state.totalPrice = calculateTotalPrice(state.cart);
    },
    counterIncrease: (state, action) => {
      const indexProduct = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.cart[indexProduct].count++;
      state.totalPrice = calculateTotalPrice(state.cart);
    },
    counterDecrease: (state, action) => {
      const indexProduct = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.cart[indexProduct].count--;
      state.totalPrice = calculateTotalPrice(state.cart);
    },
  },
});
export const {
  setCart,
  setCount,
  deleteCartItem,
  counterIncrease,
  counterDecrease,
  setTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
