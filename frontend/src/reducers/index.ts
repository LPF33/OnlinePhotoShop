import { combineReducers } from "redux";
import { categoryReducer } from "./category";
import { TFetchCategory } from "../actions/types";

export interface StoreState {
    categories: TFetchCategory;
}

export const reducers = combineReducers<StoreState>({
    categories: categoryReducer,
});
