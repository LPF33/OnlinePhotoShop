import * as React from "react";
import { IconLinkWrapper, Icon } from "../Style/FooterIcons";

const User: React.FC = () => {
    return (
        <IconLinkWrapper to="/login">
            <Icon className="fas fa-user"></Icon>
        </IconLinkWrapper>
    );
};

export default User;
