import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducer,
  productUpdateReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productsList: productListReducer,
  productUpdate: productUpdateReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: middleware,
  preloadedState: initialState,
  devTools: applyMiddleware(...middleware),
});

export default store;
