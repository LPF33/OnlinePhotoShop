import * as React from "react";
import {
    IconWrapper,
    Icon,
    MenuWrapper,
    MenuListItem,
} from "../Style/NavMenuIcons";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Redux/actions/action";
import { TFetchCategory } from "../Redux/actions/types";
import { StoreState } from "../Redux/reducers/index";

export const MenuButton: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <Link to={location.pathname !== "/menu" ? "/menu" : "/"}>
            <IconWrapper>
                <Icon className="fas fa-bars"></Icon>
            </IconWrapper>
        </Link>
    );
};

export const Menu: React.FC = () => {
    const categories: TFetchCategory = useSelector(
        (state: StoreState) => state.categories
    );

    return (
        <MenuWrapper>
            {categories.result.map((item, index) => (
                <MenuListItem key={index} to={`/products/${item.categories}`}>
                    <img src={item.image} alt={item.category} />
                    {item.category}
                </MenuListItem>
            ))}
        </MenuWrapper>
    );
};

export default Menu;
