import styled from "styled-components";

export const AddressWrapper = styled.div`
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
    overflow: auto;
`;

export const AddressForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    & > [type="text"] {
        max-width: 500px;
        width: 100%;
        margin: 1vh;
        text-align: center;
        border: 5px solid white;
        font-size: 1rem;
        outline: none;

        &.empty {
            border: 5px solid red;
        }
    }

    & > span {
        color: red;
        font-size: 0.9rem;
    }

    & > div {
        & > [type="checkbox"] {
            width: 2rem;
            height: 2rem;
            margin-right: 10px;
        }
    }
`;

export const Next = styled.button`
    background-color: white;
    padding: 5px;
    text-align: center;
    width: 100px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 10px;
`;
