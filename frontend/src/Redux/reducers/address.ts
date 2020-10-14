import * as TAddress from "../actions/address";

export interface TAddressState {
    shipping: TAddress.TShippingAddress;
    billing: TAddress.TBillingAddress;
    secondAddress: boolean;
    hasAddress: boolean;
    paymentMethod: TAddress.EPaymentMethod | null;
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
    hasAddress: false,
    paymentMethod: null,
};

export const addressReducer = (
    state = initialState,
    action:
        | TAddress.TSetShippingAddress
        | TAddress.TSetBillingAddress
        | TAddress.TSetSecondAddress
        | TAddress.TSetHasAddress
        | TAddress.TSetPaymentMethod
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
        case TAddress.EActionAddress.HasAddress:
            newState.hasAddress = action.payload;
            break;
        case TAddress.EActionAddress.Payment:
            newState.paymentMethod = action.payload;
            localStorage.setItem("address", JSON.stringify(newState));
            break;
        default:
            break;
    }

    return newState;
};
