import axios from "axios";
import { Dispatch } from "redux";

export interface TFetchCategory {
    success: boolean;
    result: {
        category: string;
        categories: string;
        image: string;
    }[];
}

export interface FetchCategoryAction {
    type: "fetchCategory";
    payload: TFetchCategory;
}

export const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
        const {
            data: { result, success },
        } = await axios.get<TFetchCategory>("/api/category");

        dispatch<FetchCategoryAction>({
            type: "fetchCategory",
            payload: { result, success },
        });
    };
};
