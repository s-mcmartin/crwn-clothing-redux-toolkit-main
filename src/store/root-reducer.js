import { cartReducer } from "./cart/cart.slice";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { categoriesReducer } from "./categories/category.slice";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default rootReducer;
