import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: "M",
  count: 1
}

export const fullProductItemSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload
    },
    setCountPlus:(state) => {
        state.count +=1
    },
    setCountMinus:(state) => {
        state.count -=1
    }
  },
})
export const { setSize, setCountPlus, setCountMinus } = fullProductItemSlice.actions

export default fullProductItemSlice.reducer