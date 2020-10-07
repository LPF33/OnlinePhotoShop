import * as React from "react";
import styled from "styled-components";

const CompanyName = styled.header`
    position: absolute;
    display: flex;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;
    background-color: rgba(0, 0, 0, 0.74);
    z-index: 1;
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    text-shadow: 2px 2px white;
    color: rgb(165, 110, 110);
`;

const Header: React.FC = () => {
    return (
        <CompanyName>
            <Title>ShopiHolic</Title>
        </CompanyName>
    );
};

export default Header;
