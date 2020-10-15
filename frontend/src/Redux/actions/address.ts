export interface TShippingAddress {
    lastname: string;
    firstname: string;
    streetname: string;
    streetnumber: string;
    postalcode: string;
    city: string;
    email: string;
}

export type TBillingAddress = Omit<TShippingAddress, "email">;

export enum EPaymentMethod {
    Paypal = "Paypal",
}

export enum EActionAddress {
    Shipping,
    Billing,
    SecondAddress,
    HasAddress,
    Payment,
}

export interface TSetShippingAddress {
    type: EActionAddress.Shipping;
    payload: TShippingAddress;
}

export function setShippingAddress(
    address: TShippingAddress
): TSetShippingAddress {
    console.log("hsda");
    return {
        type: EActionAddress.Shipping,
        payload: address,
    };
}

export interface TSetBillingAddress {
    type: EActionAddress.Billing;
    payload: TBillingAddress;
}

export function setBillingAddress(
    address: TBillingAddress
): TSetBillingAddress {
    return {
        type: EActionAddress.Billing,
        payload: address,
    };
}

export interface TSetSecondAddress {
    type: EActionAddress.SecondAddress;
    payload: boolean;
}

export function setSecondAddress(value: boolean): TSetSecondAddress {
    return {
        type: EActionAddress.SecondAddress,
        payload: value,
    };
}

export interface TSetHasAddress {
    type: EActionAddress.HasAddress;
    payload: boolean;
}

export function setHasAddress(value: boolean): TSetHasAddress {
    return {
        type: EActionAddress.HasAddress,
        payload: value,
    };
}

export interface TSetPaymentMethod {
    type: EActionAddress.Payment;
    payload: EPaymentMethod;
}

export function setPaymentMethod(value: EPaymentMethod): TSetPaymentMethod {
    return {
        type: EActionAddress.Payment,
        payload: value,
    };
}
