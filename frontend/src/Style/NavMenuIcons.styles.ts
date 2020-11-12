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

    .active {
        color: rgb(253, 255, 137);
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
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 1rem;
    color: white;
    background-color: red;
    padding: 2px 5px;
    line-height: 1;
    border-radius: 2px 2px 50% 50%;

    @media screen and (min-width: 768px) {
        font-size: 1.7rem;
    }

    @media screen and (min-width: 1440px) {
        font-size: 2rem;
    }
`;

export const AddCartInfo = styled(Link)`
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);

    width: 90vw;
    max-width: 400px;
    height: 50px;
    background-color: rgb(165, 110, 110, 0.85);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    & > i:first-child {
        margin-right: 10px;
    }

    & > i {
        margin-left: 5px;
    }
`;

export const MenuWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: calc(82vh);
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    border: 10px solid black;
    border-top: 0;
    overflow: auto;
`;

export const MenuListItem = styled(Link)`
    width: 50%;
    max-width: 300px;
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
