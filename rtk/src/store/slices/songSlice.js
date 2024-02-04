import { createSlice } from "@reduxjs/toolkit";
import { resetApp } from "../actions";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      // console.log(state);
      // console.log(action);
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter((song) => song !== action.payload);
      // const index = state.findIndex((song) => song === action.payload);
      // state.splice(index, 1);
    },
    // resets(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    //ALL SAME WAY
    // builder.addCase("moviess/reset", (state, action) => {
    // builder.addCase(movieSlice.actions.reset.toString(), (state, action) => {
    // builder.addCase(movieSlice.actions.reset(), (state, action) => {
    // builder.addCase(movieSlice.actions.reset, (state, action) => {
    builder.addCase(resetApp, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong, resets } = songSlice.actions;
export const songsReducer = songSlice.reducer;
