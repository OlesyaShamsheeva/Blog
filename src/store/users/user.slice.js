import { createSlice } from '@reduxjs/toolkit';

const initialState = []
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    }
  }
})
export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

