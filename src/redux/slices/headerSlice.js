import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: "Home",
  value: "",
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload
    },
    setValue: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { setActive,  setValue} = activeSlice.actions

export default activeSlice.reducer