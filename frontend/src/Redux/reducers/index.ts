import { combineReducers } from "redux";
import { categoryReducer } from "./category";
import { cartReducer, TCartState } from "./cart";
import { TFetchCategory } from "../actions/types";

export interface StoreState {
    categories: TFetchCategory;
    cart: TCartState;
}

export const reducers = combineReducers<StoreState>({
    categories: categoryReducer,
    cart: cartReducer,
});
