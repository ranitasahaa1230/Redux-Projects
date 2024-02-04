import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
    //   return { ...state, name: action.payload };
    state.name=action.payload;
    },
    changeCost(state, action) {
      return { ...state, cost: action.payload };
    //   state.cost=action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(addCar,(state,action)=>{
      state.name='';
      state.cost=0
    })
  }
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer=formSlice.reducer;
