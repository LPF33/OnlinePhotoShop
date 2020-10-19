import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainScreenWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 10px solid black;
    border-top: 0;
    overflow: hidden;
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
    background-color: rgb(1, 103, 187);
    color: white;
    text-align: center;
    font-size: 1.2rem;
    height: 10%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
