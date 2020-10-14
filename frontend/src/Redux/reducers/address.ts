import * as TAddress from "../actions/address";

export interface TAddressState {
    shipping: TAddress.TShippingAddress;
    billing: TAddress.TBillingAddress;
    secondAddress: boolean;
}

const initialState: TAddressState = {
    shipping: {
        lastname: "",
        firstname: "",
        streetname: "",
        streetnumber: "",
        postalcode: "",
        city: "",
        email: "",
    },
    billing: {
        lastname: "",
        firstname: "",
        streetname: "",
        streetnumber: "",
        postalcode: "",
        city: "",
    },
    secondAddress: false,
};

export const addressReducer = (
    state = initialState,
    action:
        | TAddress.TSetShippingAddress
        | TAddress.TSetBillingAddress
        | TAddress.TSetSecondAddress
) => {
    const newState = { ...state };
    switch (action.type) {
        case TAddress.EActionAddress.Shipping:
            newState.shipping = action.payload;
            break;
        case TAddress.EActionAddress.Billing:
            newState.billing = action.payload;
            break;
        case TAddress.EActionAddress.SecondAddress:
            newState.secondAddress = action.payload;
            break;
    }

    return newState;
};
