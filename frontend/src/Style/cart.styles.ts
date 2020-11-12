import styled from "styled-components";

export const CartWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: 82vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 10px solid black;
    border-top: 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const CartItemsWrappper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    align-content: flex-start;
    flex-wrap: wrap;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    height: calc(100% - 14vh);
    color: white;
    overflow: auto;

    @media screen and (min-width: 768px) {
        position: static;
        transform: translateX(0%);
        width: calc(100vw - 320px);
        height: 100%;
    }
`;

export const CartNextStep = styled.div`
    position: fixed;
    bottom: calc(10vh + 12px);
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(0, 0, 0, 0.4);
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 90vw;
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & > a {
        width: 100%;
        display: block;
        color: white;
        padding: 2px;
        border-radius: 2px;
        margin: 2px;
        text-align: center;
        cursor: pointer;

        & > h2 {
            border-bottom: 1px solid rgb(165, 110, 110);
        }

        &:hover {
            color: yellow;
        }
    }

    .hide {
        display: none;
    }
    .mobilehide {
        display: block;
    }

    @media screen and (min-width: 768px) {
        display: block;
        position: static;
        transform: translateX(0%);
        align-self: flex-start;
        width: 300px;
        height: auto;

        .hide {
            display: block;
        }
        .mobilehide {
            display: none;
        }

        & > h3 {
            border-bottom: 1px solid rgb(165, 110, 110);
        }

        & > h2 {
            border-top: 1px solid rgb(165, 110, 110);
        }

        & > a {
            width: 100%;
            height: none;
            display: block;
            color: white;
            background-color: rgb(165, 110, 110);
            padding: 2px;
            border-radius: 2px;
            margin: 5px;
            text-align: center;
        }
    }
`;

export const CartItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(255, 255, 255, 0.4);
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    width: 90vw;

    & > img {
        width: 100px;
        object-fit: contain;
    }

    & > section {
        margin-left: 2px;

        & > a {
            color: white;

            &:hover {
                color: blue;
            }
        }

        & > div {
            position: relative;
            border-top: 2px solid rgb(0, 0, 0, 0.1);
            padding: 1px;
            display: flex;
            align-items: center;
            justify-content: center;
            & > i:first-child {
                position: absolute;
                left: 0;
                color: rgb(136, 42, 42);
            }
            & > i,
            & > span {
                margin-left: 5px;
                cursor: pointer;
                &:hover {
                    color: yellow;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        width: 300px;
    }
`;
