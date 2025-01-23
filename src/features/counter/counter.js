import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      user_id: "",
   },
   reducers: {
      incrementByAmount: (state,action) => {
         state.user_id += action.payload
      },
   },
});

export const {incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;