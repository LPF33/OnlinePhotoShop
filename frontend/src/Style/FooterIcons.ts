import styled from "styled-components";

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

export const Icon = styled.i`
    transform: scale(1.5);
    color: white;
    @media screen and (min-width: 768px) {
        transform: scale(2);
    }
    @media screen and (min-width: 1440px) {
        transform: scale(3);
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
