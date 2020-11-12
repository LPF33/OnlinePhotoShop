import * as TCart from "../actions/cart.action";
import { ECartUpdate, TProductItem } from "../actions/cart.action";

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
        case ECartUpdate.Increment: {
            const { id, stock } = action.payload;
            const index: number = newState.products.findIndex(
                (item) => item.id === id
            );
            if (stock > 0) {
                if (index !== -1 && stock > newState.products[index].counter) {
                    newState.products[index].counter += 1;
                } else if (index === -1) {
                    newState.products.push({ ...action.payload, counter: 1 });
                }
            }

            break;
        }
        case ECartUpdate.Decrement: {
            const { id } = action.payload;
            const index: number = newState.products.findIndex(
                (item) => item.id === id
            );
            if (index !== -1) {
                if (newState.products[index].counter <= 1) {
                    newState.products.splice(index, 1);
                } else {
                    newState.products[index].counter -= 1;
                }
            }
            break;
        }
        case ECartUpdate.Remove: {
            const { id } = action.payload;
            const index: number = newState.products.findIndex(
                (item) => item.id === id
            );
            newState.products.splice(index, 1);
            break;
        }

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
