import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersReducer } from "./slices/usersSlices";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    //slices are geneertaed automattically,slice in cturn create reducers and neeed reducers to connect to store
    [albumsApi.reducerPath]: albumsApi.reducer, //'albums'=>the key should be same, 
    photos:photosApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(albumsApi.middleware)
    .concat(photosApi.middleware);
  }

});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from './apis/albumsApi';
export {useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,} from './apis/photosApi';

