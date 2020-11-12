import { Dispatch } from "redux";
import axios from "axios";

export interface TProductItem {
    id: number;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    numReviews: number;
    categories: string;
}

export enum ECartUpdate {
    Increment = "increment",
    Decrement = "decrement",
    Remove = "remove",
}

export interface TFetchProduct {
    success: boolean;
    result: TProductItem[];
}

export interface UpdateCartAction {
    type: ECartUpdate;
    payload: TProductItem;
}

export const updateCart = (item: number, update: ECartUpdate) => {
    return async (dispatch: Dispatch) => {
        const {
            data: { result, success },
        } = await axios.get<TFetchProduct>(`/api/product/${item}`);

        dispatch<UpdateCartAction>({
            type: update,
            payload: result[0],
        });
    };
};
