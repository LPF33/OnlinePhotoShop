import styled from "styled-components";

export const PaymentWrapper = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    height: calc(82vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 10px solid black;
    border-top: 0;
    overflow: auto;
    color: white;
`;

export const PaymentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    & > div {
        display: flex;
        align-items: baseline;
        justify-content: center;

        & > [type="radio"] {
            width: 1rem;
            height: 1rem;
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
