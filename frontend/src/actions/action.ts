import axios from "axios";
import { Dispatch } from "redux";
import { TFetchCategory, FetchCategoryAction, ActionTypes } from "./types";

export const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
        const {
            data: { result, success },
        } = await axios.get<TFetchCategory>("/api/category");

        dispatch<FetchCategoryAction>({
            type: ActionTypes.fetchCategory,
            payload: { result, success },
        });
    };
};
