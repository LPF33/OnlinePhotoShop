import {
    TFetchCategory,
    TFetchCategoryAction,
    ECategoryActions,
    TAddToWishlist,
    TRemoveFromWishlist,
} from "../actions/category.action";
import { TProductItem } from "../actions/cart.action";

export interface TCategoryState extends TFetchCategory {
    wishlist: TProductItem[];
}

export const initialCategoryState: TCategoryState = {
    success: false,
    result: [],
    wishlist: [],
};

export const categoryReducer = (
    state: TCategoryState = initialCategoryState,
    action: TFetchCategoryAction | TAddToWishlist | TRemoveFromWishlist
) => {
    let newState = { ...state };
    switch (action.type) {
        case ECategoryActions.FetchCategory:
            const { result, success } = action.payload;
            newState = { wishlist: [], result, success };
            break;
        case ECategoryActions.AddToWishlist:
            newState.wishlist.push(action.payload);
            break;
        case ECategoryActions.RemoveFromWishlist:
            const index = newState.wishlist.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                newState.wishlist.splice(index, 1);
            }
            break;
        default:
            break;
    }

    return newState;
};
