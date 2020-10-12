import axios from "axios";
import { Dispatch } from "redux";

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

export interface UpdateCartAction {
    type: ECartUpdate;
    payload: TProductItem;
}

export const updateCart = (item: TProductItem, update: ECartUpdate) => {
    return (dispatch: Dispatch) => {
        dispatch<UpdateCartAction>({
            type: update,
            payload: item,
        });
    };
};
