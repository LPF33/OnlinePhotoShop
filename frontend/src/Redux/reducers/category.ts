import { TFetchCategory, FetchCategoryAction } from "../actions/category";

export const initialCategoryState = {
    success: false,
    result: [],
};

export const categoryReducer = (
    state: TFetchCategory = initialCategoryState,
    action: FetchCategoryAction
) => {
    switch (action.type) {
        case "fetchCategory":
            return action.payload;
        default:
            return state;
    }
};
