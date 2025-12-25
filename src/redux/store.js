import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import sortReducer from "./slices/sortSlice";
import categoryReducer from "./slices/categorySlice";
import contactReducer from "./slices/contactSlice";
import productReducer from "./slices/productSlice";
import priceReducer from "./slices/priceSlice";
import fullProductItemReducer from "./slices/fullProductItemSlice";
import cartReducer from "./slices/cartSlice"
export const store = configureStore({
  reducer: {
    headerReducer,
    sortReducer,
    categoryReducer,
    contactReducer,
    productReducer,
    priceReducer,
    fullProductItemReducer,
    cartReducer
  },
});
