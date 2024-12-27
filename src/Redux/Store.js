import homeReducer from "./Slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  counter: homeReducer,
});

export const store = configureStore({
  reducer: reducer,
});
