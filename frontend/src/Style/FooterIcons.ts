import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 10vh;
    &:hover {
        background-color: rgb(165, 110, 110);
    }
`;

export const IconLinkWrapper = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 10vh;
    &:hover {
        background-color: rgb(165, 110, 110);
    }
`;

export const Icon = styled.i`
    transform: scale(1.5);
    color: white;
    @media screen and (min-width: 768px) {
        transform: scale(2);
    }
    @media screen and (min-width: 1440px) {
        transform: scale(2.5);
    }
`;

export const CartCounter = styled.div`
    position: relative;
    top: 10px;
    left: 10px;
    font-size: 1.6rem;
    color: white;

    @media screen and (min-width: 768px) {
        left: 20px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 2rem;
        left: 30px;
    }
`;

export const MenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    border: 10px solid black;
    overflow: auto;
`;

export const MenuListItem = styled(Link)`
    max-width: 100%;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    cursor: pointer;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px 0;

    &:hover {
        background-color: rgb(165, 110, 110);
        color: white;
    }

    & > img {
        width: 50%;
        max-width: 300px;
    }
`;
