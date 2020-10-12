import * as React from "react";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import User from "./User";
import { MenuButton } from "./Menu";
import Bookmark from "./Bookmark";
import PictureMenu from "./PictureMenu";

const NavMenuWrapper = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavMenuGrid = styled.div`
    width: 80vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-content: center;
`;

const NavMenu: React.FC = () => {
    return (
        <NavMenuWrapper>
            <NavMenuGrid>
                <User />
                <PictureMenu />
                <CartIcon />
                <Bookmark />
                <MenuButton />
            </NavMenuGrid>
        </NavMenuWrapper>
    );
};

export default NavMenu;
