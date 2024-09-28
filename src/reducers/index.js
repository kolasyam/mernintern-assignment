import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
