import { stat } from "fs";
import * as TCart from "../actions/cart";
import { ECartUpdate, TProductItem } from "../actions/cart";

interface TProductReducer extends TProductItem {
    counter: number;
}

export type TCartState = { [key: number]: TProductReducer };

const initialState: TCartState = {};

export const cartReducer = (
    state = initialState,
    action: TCart.UpdateCartAction
) => {
    switch (action.type) {
        case ECartUpdate.Increment:
            const { id } = action.payload;
            if (state[id]) {
                state[id].counter = state[id].counter + 1;
            } else {
                state[id] = { ...action.payload, counter: 1 };
            }
            break;
        case ECartUpdate.Decrement:
            const { id: id2 } = action.payload;
            if (state[id2]) {
                if (state[id2].counter <= 1) {
                    delete state[id2];
                } else {
                    state[id2].counter = state[id2].counter - 1;
                }
            }
            break;
        case ECartUpdate.Remove:
            delete state[action.payload.id];
            break;

        default:
            break;
    }
    return state;
};
