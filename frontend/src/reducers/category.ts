import { StoreState } from "./index";

import {
    TFetchCategory,
    FetchCategoryAction,
    ActionTypes,
} from "../actions/types";

const initialState = {
    success: false,
    result: [],
};

export const categoryReducer = (
    state: TFetchCategory = initialState,
    action: FetchCategoryAction
) => {
    switch (action.type) {
        case ActionTypes.fetchCategory:
            return action.payload;
        default:
            return state;
    }
};
