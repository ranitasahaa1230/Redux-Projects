import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    carss: carReducer,
    formss: formReducer,
  },
});

export { store, addCar, removeCar, changeSearchTerm, changeCost, changeName };
