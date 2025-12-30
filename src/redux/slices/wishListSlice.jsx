import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
  countOfWishItems: 0,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setWishItems: (state, action) => {
      const index = state.wishItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.wishItems.push({ ...action.payload, like: true });
      } else {
        const currentItem = state.wishItems[index];
        currentItem.like = !currentItem.like;
      }
    },
    setCountOfWishItems: (state) => {
      state.countOfWishItems = state.wishItems.filter(item => item.like === true).length
    },
    deleteWishItem: (state, action) => {
      state.wishItems = state.wishItems.filter(item => item.id !== action.payload.id)
      state.countOfWishItems = state.wishItems.length
    }
  },
});

export const { setWishItems, setCountOfWishItems, deleteWishItem } = wishListSlice.actions;
export default wishListSlice.reducer;
