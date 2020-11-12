import * as React from "react";
import { IconLinkWrapper, Icon } from "../Style/NavMenuIcons.styles";
import { useSelector } from "react-redux";
import { StoreState } from "../Redux/reducers/index.reducer";
import { TLoginState } from "../Redux/reducers/auth.reducer";

const User: React.FC = () => {
    const loginState: TLoginState = useSelector(
        (state: StoreState) => state.login
    );

    return loginState.token ? (
        <IconLinkWrapper to="/profile">
            <Icon className="fas fa-user profile"></Icon>
        </IconLinkWrapper>
    ) : (
        <IconLinkWrapper to="/login">
            <Icon className="fas fa-user"></Icon>
        </IconLinkWrapper>
    );
};

export default User;
