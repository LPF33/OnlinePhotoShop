import * as TCart from "../actions/cart";
import { ECartUpdate, TProductItem } from "../actions/cart";

interface TProductReducer extends TProductItem {
    counter: number;
}

export interface TCartState {
    amountItems: number;
    amountPrice: string;
    total: string;
    products: TProductReducer[];
}

const initialState: TCartState = {
    amountItems: 0,
    amountPrice: "0",
    total: "0",
    products: [],
};

export const cartReducer = (
    state = initialState,
    action: TCart.UpdateCartAction
) => {
    const newState: TCartState = { ...state };

    switch (action.type) {
        case ECartUpdate.Increment:
            const { id } = action.payload;
            const index: number = newState.products.findIndex(
                (item) => item.id === id
            );
            if (index !== -1) {
                newState.products[index].counter += 1;
            } else {
                newState.products.push({ ...action.payload, counter: 1 });
            }
            break;
        case ECartUpdate.Decrement:
            const { id: id2 } = action.payload;
            const index2: number = newState.products.findIndex(
                (item) => item.id === id2
            );
            if (index2 !== -1) {
                if (newState.products[index2].counter <= 1) {
                    newState.products.splice(index2, 1);
                } else {
                    newState.products[index2].counter -= 1;
                }
            }
            break;
        case ECartUpdate.Remove:
            const { id: id3 } = action.payload;
            const index3: number = newState.products.findIndex(
                (item) => item.id === id3
            );
            newState.products.splice(index3, 1);
            break;

        default:
            break;
    }

    newState.amountItems = newState.products.reduce(
        (amount, item) => amount + item.counter,
        0
    );

    const amount = newState.products.reduce(
        (amount, item) => amount + item.counter * item.price,
        0
    );
    newState.amountPrice = amount.toFixed(2);
    newState.total = (amount + 4).toFixed(2);

    return newState;
};