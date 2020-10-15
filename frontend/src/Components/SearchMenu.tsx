import * as React from "react";
import { IconLinkWrapper, Icon } from "../Style/NavMenuIcons";

const SearchMenu: React.FC = () => {
    return (
        <IconLinkWrapper to="/search/all">
            <Icon className="fas fa-search"></Icon>
        </IconLinkWrapper>
    );
};

export default SearchMenu;
