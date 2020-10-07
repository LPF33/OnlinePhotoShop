import * as React from "react";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import User from "./User";
import Menu from "./Menu";
import Bestseller from "./Bestseller";

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FooterGrid = styled.div`
    width: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterGrid>
                <User />
                <CartIcon />
                <Bestseller />
                <Menu />
            </FooterGrid>
        </FooterWrapper>
    );
};

export default Footer;
