import { createSlice } from "@reduxjs/toolkit";
import { resetApp } from "../actions";

const movieSlice = createSlice({
  name: "moviess",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      return state.filter((movie) => movie !== action.payload);
    },
    // reset(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(resetApp, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
