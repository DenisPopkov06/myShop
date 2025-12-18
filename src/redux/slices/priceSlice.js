import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  price: 500
}

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload
    },
    
  },
})
export const { setPrice } = priceSlice.actions

export default priceSlice.reducer