import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setMessage: (state, action) => {
      state.message = action.payload
    },
  },
})
export const { setName, setEmail, setPhone, setMessage} = contactSlice.actions

export default contactSlice.reducer