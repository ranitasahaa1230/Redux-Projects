import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersReducer } from "./slices/usersSlices";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, //'albums'=>the key should be same
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(albumsApi.middleware);
  }

});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export {useFetchAlbumsQuery, useAddAlbumMutation} from './apis/albumsApi';
