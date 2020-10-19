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
                <label htmlFor={EnumAddress.lastname}>Your last name</label>
                {error.lastname && <span>{error.lastname}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    id={EnumAddress.lastname}
                    name={EnumAddress.lastname}
                    value={addressState.lastname}
                    onChange={handleChange}
                    className={error.lastname ? "empty" : ""}
                />
                <label htmlFor={EnumAddress.firstname}>Your first name</label>
                {error.firstname && <span>{error.firstname}</span>}
                <input
                    type="text"
                    id={EnumAddress.firstname}
                    autoComplete="off"
                    name={EnumAddress.firstname}
                    value={addressState.firstname}
                    onChange={handleChange}
                    className={error.firstname ? "empty" : ""}
                />
                <label htmlFor={EnumAddress.streetname}>Street name</label>
                {error.streetname && <span>{error.streetname}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    id={EnumAddress.streetname}
                    name={EnumAddress.streetname}
                    value={addressState.streetname}
                    onChange={handleChange}
                    className={error.streetname ? "empty" : ""}
                />
                <label htmlFor={EnumAddress.streetnumber}>Street number</label>
                {error.streetnumber && <span>{error.streetnumber}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    id={EnumAddress.streetnumber}
                    name={EnumAddress.streetnumber}
                    value={addressState.streetnumber}
                    onChange={handleChange}
                    className={error.streetnumber ? "empty" : ""}
                />
                <label htmlFor={EnumAddress.postalcode}>ZIP Code</label>
                {error.postalcode && <span>{error.postalcode}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    id={EnumAddress.postalcode}
                    name={EnumAddress.postalcode}
                    value={addressState.postalcode}
                    onChange={handleChange}
                    className={error.postalcode ? "empty" : ""}
                />
                <label htmlFor={EnumAddress.city}>City name</label>
                {error.city && <span>{error.city}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    id={EnumAddress.city}
                    name={EnumAddress.city}
                    value={addressState.city}
                    onChange={handleChange}
                    className={error.city ? "empty" : ""}
                />
                <label htmlFor={EnumAddress.email}>Your email:</label>
                {error.email && <span>{error.email}</span>}
                <input
                    type="text"
                    autoComplete="off"
                    id={EnumAddress.email}
                    name={EnumAddress.email}
                    value={addressState.email}
                    onChange={handleChange}
                    className={error.email ? "empty" : ""}
                />

                <div>
                    <input
                        type="checkbox"
                        id="secondAddress"
                        checked={secondAddress}
                        onChange={() => {
                            const val: boolean = !secondAddress;
                            dispatch(setSecondAddress(val));
                        }}
                    />
                    <label htmlFor="secondAddress">
                        I have a different billing address
                    </label>
                </div>
            </AddressForm>
            <Next type="button" onClick={nextPage}>
                Next <i className="fas fa-chevron-right"></i>
            </Next>
        </AddressWrapper>
    );
};

export default Shipping;
