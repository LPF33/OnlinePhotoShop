import * as React from "react";
import styled from "styled-components";

const Content = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

interface TSliderWrapper {
    children: React.ReactNode;
}

const SliderWrapper: React.FC<TSliderWrapper> = ({ children }) => {
    return <Content>{children}</Content>;
};

export default SliderWrapper;
