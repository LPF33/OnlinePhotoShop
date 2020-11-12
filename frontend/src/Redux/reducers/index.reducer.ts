import { combineReducers } from "redux";
import { categoryReducer } from "./category.reducer";
import { cartReducer, TCartState } from "./cart.reducer";
import { TCategoryState } from "./category.reducer";
import { addressReducer, TAddressState } from "./address.reducer";
import { loginReducer, TLoginState } from "./auth.reducer";

export interface StoreState {
    categories: TCategoryState;
    cart: TCartState;
    address: TAddressState;
    login: TLoginState;
}

export const reducers = combineReducers<StoreState>({
    categories: categoryReducer,
    cart: cartReducer,
    address: addressReducer,
    login: loginReducer,
});
