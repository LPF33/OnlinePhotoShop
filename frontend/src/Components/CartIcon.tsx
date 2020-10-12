import * as React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../Redux/reducers/index";
import { IconWrapper, Icon, CartCounter } from "../Style/NavMenuIcons";

const CartIcon: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);

    const cartItemsCounter: number = useSelector((state: StoreState) => {
        let helpCounter = 0;
        for (let item in state.cart) {
            helpCounter += state.cart[item].counter;
        }
        return helpCounter;
    });

    return (
        <IconWrapper>
            <Icon className="fas fa-shopping-cart"></Icon>
            {cartItemsCounter > 0 && (
                <CartCounter>{cartItemsCounter}</CartCounter>
            )}
        </IconWrapper>
    );
};

export default CartIcon;
