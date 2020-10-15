import axios from "axios";
import { Dispatch } from "redux";
import { TProductItem } from "./cart";

export enum ECategoryActions {
    FetchCategory = "fetchcategory",
    AddToWishlist = "addToWishList",
    RemoveFromWishlist = "removeFromWishList",
}

export interface TFetchCategory {
    success: boolean;
    result: {
        category: string;
        categories: string;
        image: string;
    }[];
}

export interface TFetchCategoryAction {
    type: ECategoryActions.FetchCategory;
    payload: TFetchCategory;
}

export const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
        const {
            data: { result, success },
        } = await axios.get<TFetchCategory>("/api/category");

        dispatch<TFetchCategoryAction>({
            type: ECategoryActions.FetchCategory,
            payload: { result, success },
        });
    };
};

export interface TAddToWishlist {
    type: ECategoryActions.AddToWishlist;
    payload: TProductItem;
}

export const addToWishlist = (item: TProductItem): TAddToWishlist => {
    return {
        type: ECategoryActions.AddToWishlist,
        payload: item,
    };
};

export interface TRemoveFromWishlist {
    type: ECategoryActions.RemoveFromWishlist;
    payload: number;
}

export const removeFromWishlist = (id: number): TRemoveFromWishlist => {
    return {
        type: ECategoryActions.RemoveFromWishlist,
        payload: id,
    };
};
