// This code will have reducer program which will increment & decrement the centrailized state

import { createSlice } from "@reduxjs/toolkit";
// createSlice is an object that can take initial state, collection of reducer functions
// it returns an object with name, reducer, actions

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 5 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
