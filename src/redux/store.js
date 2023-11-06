import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import {filterReducer} from "./reducers/filterReducer"
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());