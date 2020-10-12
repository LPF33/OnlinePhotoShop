import * as React from "react";
import {
    IconWrapper,
    Icon,
    MenuWrapper,
    MenuListItem,
} from "../Style/FooterIcons";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCategories } from "../actions/action";
import { TFetchCategory } from "../actions/types";
import { StoreState } from "../reducers/index";

interface MenuProps {
    categories: TFetchCategory;
    fetchCategories(): any;
}

export const MenuButton: React.FC = () => {
    const [show, setShow] = React.useState<boolean>(false);

    return (
        <Link
            to={show ? "/menu" : "/"}
            onClick={() => setShow((prev) => !prev)}
        >
            <IconWrapper>
                <Icon className="fas fa-bars"></Icon>
            </IconWrapper>
        </Link>
    );
};

const _Menu: React.FC<MenuProps> = ({ categories, fetchCategories }) => {
    React.useEffect(() => {
        fetchCategories();
    }, []);

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

const mapStateToProps = ({
    categories,
}: StoreState): { categories: TFetchCategory } => {
    return { categories };
};

const Menu = connect(mapStateToProps, { fetchCategories })(_Menu);
export default Menu;
