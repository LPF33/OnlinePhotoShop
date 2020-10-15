import { combineReducers } from "redux";
import { categoryReducer } from "./category";
import { cartReducer, TCartState } from "./cart";
import { TCategoryState } from "../reducers/category";
import { addressReducer, TAddressState } from "./address";

export interface StoreState {
    categories: TCategoryState;
    cart: TCartState;
    address: TAddressState;
}

export const reducers = combineReducers<StoreState>({
    categories: categoryReducer,
    cart: cartReducer,
    address: addressReducer,
});
