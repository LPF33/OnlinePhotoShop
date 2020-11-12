import * as React from "react";
import {
    EActionAddress,
    TShippingAddress,
    TBillingAddress,
    setShippingAddress,
    setBillingAddress,
    setHasAddress,
} from "../Redux/actions/address.action";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../Redux/reducers/index.reducer";
import { TAddressState } from "../Redux/reducers/address.reducer";

import {
    checkName,
    checkPostal,
    checkStreet,
    checkEmail,
} from "./HelperFunctions";

export enum EnumAddress {
    lastname = "lastname",
    firstname = "firstname",
    streetname = "streetname",
    streetnumber = "streetnumber",
    postalcode = "postalcode",
    city = "city",
    email = "email",
}

export interface TError {
    lastname: string;
    firstname: string;
    streetname: string;
    streetnumber: string;
    postalcode: string;
    city: string;
    email: string;
}

export interface TReturnVerifyHook<T> {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: TError;
    addressState: T;
    secondAddress: boolean;
    checkCompleteness: () => boolean;
}

export function useVerifyAddress(
    component: EActionAddress.Billing
): TReturnVerifyHook<TBillingAddress>;
export function useVerifyAddress(
    component: EActionAddress.Shipping
): TReturnVerifyHook<TShippingAddress>;
export function useVerifyAddress(
    component: EActionAddress.Billing | EActionAddress.Shipping
) {
    const dispatch = useDispatch();
    const [error, setError] = React.useState<TError>({
        lastname: "",
        firstname: "",
        streetname: "",
        streetnumber: "",
        postalcode: "",
        city: "",
        email: "",
    });

    const validateInput = (name: string, val: string): boolean => {
        if (
            name === EnumAddress.lastname ||
            name === EnumAddress.firstname ||
            name === EnumAddress.streetname ||
            name === EnumAddress.city
        ) {
            const nameCheck = checkName(name, val);
            if (!nameCheck[0]) {
                setError((prev) => ({ ...prev, [name]: nameCheck[1] }));
                return false;
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
                return true;
            }
        }

        if (name === EnumAddress.postalcode) {
            const postalCheck = checkPostal(val);
            if (!postalCheck[0]) {
                setError((prev) => ({ ...prev, [name]: postalCheck[1] }));
                return false;
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
                return true;
            }
        }

        if (name === EnumAddress.streetnumber) {
            const streetCheck = checkStreet(val);
            if (!streetCheck[0]) {
                setError((prev) => ({ ...prev, [name]: streetCheck[1] }));
                return false;
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
                return true;
            }
        }

        if (name === EnumAddress.email) {
            const emailCheck = checkEmail(val);
            if (!emailCheck[0]) {
                setError((prev) => ({ ...prev, [name]: emailCheck[1] }));
                return false;
            } else {
                setError((prev) => ({ ...prev, [name]: "" }));
                return true;
            }
        }

        return false;
    };

    const addressState: TAddressState = useSelector((state: StoreState) => {
        localStorage.setItem("address", JSON.stringify(state.address));
        return state.address;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: { name, value },
        } = e;

        switch (component) {
            case EActionAddress.Shipping:
                dispatch(
                    setShippingAddress({
                        ...addressState.shipping,
                        [name]: value,
                    })
                );
                break;
            case EActionAddress.Billing:
                dispatch(
                    setBillingAddress({
                        ...addressState.billing,
                        [name]: value,
                    })
                );
                break;
        }

        validateInput(name, value);
    };

    const checkCompleteness = (): boolean => {
        switch (component) {
            case EActionAddress.Shipping:
                for (const [name, value] of Object.entries(
                    addressState.shipping
                )) {
                    if (!validateInput(name, value)) {
                        dispatch(setHasAddress(false));
                        return false;
                    }
                }
                dispatch(setHasAddress(true));
                return true;

            case EActionAddress.Billing:
                for (const [name, value] of Object.entries(
                    addressState.billing
                )) {
                    if (!validateInput(name, value)) {
                        return false;
                    }
                }
                return true;
        }
    };

    switch (component) {
        case EActionAddress.Shipping:
            return {
                handleChange,
                error,
                addressState: addressState.shipping,
                secondAddress: addressState.secondAddress,
                checkCompleteness,
            };
        case EActionAddress.Billing:
            return {
                handleChange,
                error,
                addressState: addressState.billing,
                secondAddress: addressState.secondAddress,
                checkCompleteness,
            };
    }
}
