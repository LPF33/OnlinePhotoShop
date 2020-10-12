import {
    TFetchCategory,
    FetchCategoryAction,
    ActionTypes,
} from "../actions/types";

export const initialCategoryState = {
    success: false,
    result: [],
};

export const categoryReducer = (
    state: TFetchCategory = initialCategoryState,
    action: FetchCategoryAction
) => {
    switch (action.type) {
        case ActionTypes.fetchCategory:
            return action.payload;
        default:
            return state;
    }
};
