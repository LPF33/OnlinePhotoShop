import * as React from "react";
import styled from "styled-components";

const BestsellerWrapper = styled.div`
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

const Icon = styled.i`
    transform: scale(1.5);
    color: white;
    @media screen and (min-width: 768px) {
        transform: scale(2);
    }
    @media screen and (min-width: 1440px) {
        transform: scale(3);
    }
`;

const Bestseller: React.FC = () => {
    return (
        <BestsellerWrapper>
            <Icon className="fas fa-thumbs-up"></Icon>
        </BestsellerWrapper>
    );
};

export default Bestseller;
