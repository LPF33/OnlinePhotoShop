import * as React from "react";
import {
    IconWrapper,
    IconLinkWrapper,
    Icon,
} from "../Style/NavMenuIcons.styles";
import { useSelector } from "react-redux";
import { StoreState } from "../Redux/reducers/index.reducer";

const Bookmark: React.FC = () => {
    const wishlistActive: boolean = useSelector((state: StoreState) => {
        if (state.categories.wishlist.length > 0) {
            return true;
        } else {
            return false;
        }
    });

    if (wishlistActive) {
        return (
            <IconLinkWrapper to="/wishlist">
                <Icon className="fas fa-bookmark active"></Icon>
            </IconLinkWrapper>
        );
    } else {
        return (
            <IconWrapper>
                <Icon className="far fa-bookmark"></Icon>
            </IconWrapper>
        );
    }
};

export default Bookmark;
