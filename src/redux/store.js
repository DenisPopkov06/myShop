import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import sortReducer from "./slices/sortSlice";
import categoryReducer from "./slices/categorySlice";
import contactReducer from "./slices/contactSlice";
import productReducer from "./slices/productSlice";
import priceReducer from "./slices/priceSlice";
export const store = configureStore({
  reducer: {
    headerReducer,
    sortReducer,
    categoryReducer,
    contactReducer,
    productReducer,
    priceReducer,
  },
});
