import * as React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StoreState } from "../Redux/reducers/index";
import {
    IconLinkWrapper,
    Icon,
    CartCounter,
    AddCartInfo,
} from "../Style/NavMenuIcons";

const CartIcon: React.FC = () => {
    const location = useLocation();
    const [info, setInfo] = React.useState<boolean>(false);

    const timeoutID = React.useRef<number>(0);

    const cartItemsCounter: number = useSelector((state: StoreState) => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return state.cart.amountItems;
    });

    React.useEffect(() => {
        if (cartItemsCounter > 0) {
            setInfo(true);
            timeoutID.current = setTimeout(() => setInfo(false), 2000);
        }

        return () => clearTimeout(timeoutID.current);
    }, [cartItemsCounter]);

    return (
        <>
            <IconLinkWrapper to="/mybasket">
                <Icon className="fas fa-shopping-cart"></Icon>
                {cartItemsCounter > 0 && (
                    <CartCounter>{cartItemsCounter}</CartCounter>
                )}
            </IconLinkWrapper>
            {info && location.pathname !== "/mybasket" && (
                <AddCartInfo to="/mybasket">
                    <i className="fas fa-check-circle"></i>
                    Added to basket. Open basket{" "}
                    <i className="far fa-arrow-alt-circle-right"></i>
                </AddCartInfo>
            )}
        </>
    );
};

export default CartIcon;
