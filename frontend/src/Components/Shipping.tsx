import * as React from "react";
import { AddressWrapper, AddressForm, Next } from "../Style/Address";
import { EnumAddress, useVerifyAddress } from "../CustomHooks/VerifyAddress";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EActionAddress, setSecondAddress } from "../Redux/actions/address";

const Shipping: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [complete, setComplete] = React.useState<boolean>(false);

    const {
        handleChange,
        error,
        addressState,
        secondAddress,
        checkCompleteness,
    } = useVerifyAddress(EActionAddress.Shipping);

    const nextPage = (): void => {
        setComplete(checkCompleteness());
    };

    React.useEffect(() => {
        if (complete && secondAddress) {
            history.push("/billingaddress");
        } else if (complete && !secondAddress) {
            history.push("/payment");
        }
    }, [complete]);

    return (
        <AddressWrapper>
            <AddressForm>
                <h3>Shipping Address</h3>
                <label>Your last name</label>
                {error.lastname && <span>{error.lastname}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.lastname}
                    value={addressState.lastname}
                    onChange={handleChange}
                    className={error.lastname ? "empty" : ""}
                />
                <label>Your first name</label>
                {error.firstname && <span>{error.firstname}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.firstname}
                    value={addressState.firstname}
                    onChange={handleChange}
                    className={error.firstname ? "empty" : ""}
                />
                <label>Street name</label>
                {error.streetname && <span>{error.streetname}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.streetname}
                    value={addressState.streetname}
                    onChange={handleChange}
                    className={error.streetname ? "empty" : ""}
                />
                <label>Street number</label>
                {error.streetnumber && <span>{error.streetnumber}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.streetnumber}
                    value={addressState.streetnumber}
                    onChange={handleChange}
                    className={error.streetnumber ? "empty" : ""}
                />
                <label>ZIP Code</label>
                {error.postalcode && <span>{error.postalcode}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.postalcode}
                    value={addressState.postalcode}
                    onChange={handleChange}
                    className={error.postalcode ? "empty" : ""}
                />
                <label>City name</label>
                {error.city && <span>{error.city}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.city}
                    value={addressState.city}
                    onChange={handleChange}
                    className={error.city ? "empty" : ""}
                />
                <label>Your email:</label>
                {error.email && <span>{error.email}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    name={EnumAddress.email}
                    value={addressState.email}
                    onChange={handleChange}
                    className={error.email ? "empty" : ""}
                />

                <div>
                    <input
                        type="checkbox"
                        checked={secondAddress}
                        onChange={() => {
                            const val: boolean = !secondAddress;
                            dispatch(setSecondAddress(val));
                        }}
                    />
                    <label>I have a different billing address</label>
                </div>
            </AddressForm>
            <Next type="button" onClick={nextPage}>
                Next <i className="fas fa-chevron-right"></i>
            </Next>
        </AddressWrapper>
    );
};

export default Shipping;
