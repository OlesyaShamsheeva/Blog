import { createSlice } from '@reduxjs/toolkit';

const initialState = []
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})
export const authReducer = authSlice.reducer
export const authActions =authSlice.actions