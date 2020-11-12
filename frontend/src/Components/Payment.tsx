import * as React from "react";
import { PaymentWrapper, PaymentForm, Next } from "../Style/Payment.styles";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { StoreState } from "../Redux/reducers/index.reducer";
import {
    setPaymentMethod,
    EPaymentMethod,
} from "../Redux/actions/address.action";

const Payment: React.FC<RouteComponentProps> = ({ history }) => {
    const hasAddress: boolean = useSelector(
        (state: StoreState) => state.address.hasAddress
    );

    if (!hasAddress) {
        history.goBack();
    }

    const [paymentMethod, setPayMethod] = React.useState<EPaymentMethod>(
        EPaymentMethod.Paypal
    );

    const dispatch = useDispatch();

    const setPay = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayMethod(e.currentTarget.value as EPaymentMethod);
    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setPaymentMethod(paymentMethod));
        history.push("/order");
    };

    return (
        <PaymentWrapper>
            <h3>Select you payment method</h3>
            <PaymentForm onSubmit={submitHandler}>
                <div>
                    <input
                        type="radio"
                        value={EPaymentMethod.Paypal}
                        checked={paymentMethod === EPaymentMethod.Paypal}
                        name="paymentMethod"
                        onChange={setPay}
                    />
                    <label>Pay with PayPal</label>
                </div>

                <Next type="submit">
                    Next <i className="fas fa-chevron-right"></i>
                </Next>
            </PaymentForm>
        </PaymentWrapper>
    );
};

export default Payment;
