import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './slices/headerSlice'
import sortReducer from "./slices/sortSlice"
import categoryReducer from "./slices/categorySlice"

export const store = configureStore({
  reducer: {
    headerReducer, sortReducer, categoryReducer
  },
})