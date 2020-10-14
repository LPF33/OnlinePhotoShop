import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { StoreState } from "../Redux/reducers/index";
import { EPaymentMethod } from "../Redux/actions/address";

const Order: React.FC<RouteComponentProps> = ({ history }) => {
    const [WholeState, check]: [StoreState, boolean] = useSelector(
        (state: StoreState) => {
            return [
                state,
                Boolean(state.address.paymentMethod) &&
                    state.address.hasAddress,
            ];
        }
    );

    if (!check) {
        history.goBack();
    }

    return <div>Order</div>;
};

export default Order;
