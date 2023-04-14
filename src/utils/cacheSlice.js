import { createSlice } from "@reduxjs/toolkit";

const cacheSearchSlice = createSlice({
  name: "cacheSearchQuery",
  initialState: {
    cache: {
      "": [],
    },
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cache = { ...state.cache, ...action.payload };
    },
  },
});

export const { cacheResults } = cacheSearchSlice.actions;

export default cacheSearchSlice.reducer;
