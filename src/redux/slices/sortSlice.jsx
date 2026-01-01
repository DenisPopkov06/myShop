import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: "price",
  open: false
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setOpen: (state) => {
      state.open = !state.open
    },
    setClose: (state) => {
      state.open = false
    },
  },
})
export const { setStatus,  setOpen, setClose} = sortSlice.actions

export default sortSlice.reducer