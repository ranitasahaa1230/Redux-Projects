import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { resetApp } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: movieReducer,
  },
});

// console.log(store);

// const startingState = store.getState();
// console.log(startingState, JSON.stringify(startingState));

// console.log(songSlice.actions.addSong("some song!!"));
//1.// store.dispatch({
//   type: "song/addSong",
//   payload: "New songgg!!",
// });
//2.
// store.dispatch(songSlice.actions.addSong("some songgg!!"));

// const finalState = store.getState();
// console.log(finalState, JSON.stringify(finalState));

export { store, addMovie, removeMovie, addSong, removeSong, resetApp };

// console.log(movieSlice.actions.reset.toString());
