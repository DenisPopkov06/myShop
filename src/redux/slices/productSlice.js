import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  hoveredId: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
        state.products = action.payload
    },
    setHoveredId: (state, action) => {
        state.hoveredId = action.payload
    },
  },
})
export const { setProducts, setHoveredId } = productSlice.actions

export default productSlice.reducer