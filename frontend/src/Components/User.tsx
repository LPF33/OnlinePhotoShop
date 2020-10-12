import * as React from "react";
import { IconLinkWrapper, Icon } from "../Style/NavMenuIcons";

const User: React.FC = () => {
    return (
        <IconLinkWrapper to="/login">
            <Icon className="fas fa-user"></Icon>
        </IconLinkWrapper>
    );
};

export default User;
