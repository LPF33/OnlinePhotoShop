import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainScreenWrapper = styled.div`
    position: absolute;
    top: calc(50% - 5vh);
    width: 80vh;
    height: 80vh;
    transform: translateY(-50%);
    overflow: hidden;
    border-radius: 50%;
    display: flex;

    @media screen and (min-width: 768px) {
        width: 80vw;
        border-radius: 10px;
    }
`;

export const MainFlex = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    width: 100%;
    height: calc(100% - 10vh);
    background-color: rgb(0, 0, 0, 0.3);
`;

export const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;

    & > h1 {
        color: white;
    }

    & > input {
        font-size: 1.8rem;
        padding: 10px;
        border-radius: 10px;
    }

    & > [type="submit"] {
        background-color: rgb(196, 196, 196);
        cursor: pointer;

        &:hover {
            background-color: rgb(31, 55, 122);
        }
    }
`;

export const MainGoLink = styled(Link)`
    position: absolute;
    bottom: 0;
    background-color: rgb(1, 103, 187);
    color: white;
    text-align: center;
    font-size: 1.2rem;
    height: 10%;
    width: 100%;
`;
