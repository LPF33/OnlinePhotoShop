import * as React from "react";
import { IconWrapper, Icon, CartCounter } from "../Style/FooterIcons";

const CartIcon: React.FC = () => {
    return (
        <IconWrapper>
            <Icon className="fas fa-shopping-cart"></Icon>
            <CartCounter>0</CartCounter>
        </IconWrapper>
    );
};

export default CartIcon;
