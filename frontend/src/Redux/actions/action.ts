import axios from "axios";
import { Dispatch } from "redux";
import * as Types from "./types";

export const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
        const {
            data: { result, success },
        } = await axios.get<Types.TFetchCategory>("/api/category");

        dispatch<Types.FetchCategoryAction>({
            type: Types.ActionTypes.fetchCategory,
            payload: { result, success },
        });
    };
};
