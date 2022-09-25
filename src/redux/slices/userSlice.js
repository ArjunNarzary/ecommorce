import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    ADD_USER: (state, action) => {
      return action.payload;
    },
  },
});

export const { ADD_USER } = userSlice.actions;

export default userSlice.reducer;
