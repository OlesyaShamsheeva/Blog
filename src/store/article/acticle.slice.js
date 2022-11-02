import { createSlice } from '@reduxjs/toolkit';

const initialState = []
export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    }
  }
})
export const articleReducer = articleSlice.reducer
export const articleActions = articleSlice.actions