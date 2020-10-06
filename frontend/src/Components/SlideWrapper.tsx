import * as React from "react";
import styled from "styled-components";

const Content = styled.div`
    position: relative;
    height: 100vh;
    width: ${(props) => props.theme.width}%;
    display: flex;
    align-items: center;
    transform: translateX(-${(props) => props.theme.translate}%);
    transition: transform ease-in ${(props) => props.theme.transition}s;
`;

export interface TSlideWrapperProps {
    width: number;
    translate: number;
    transition: number;
}

interface TSliderWrapper {
    children: React.ReactNode;
    styleProps: TSlideWrapperProps;
}

const SliderWrapper: React.FC<TSliderWrapper> = ({ children, styleProps }) => {
    return (
        <Content theme={styleProps} className="SliderWrapper">
            {children}
        </Content>
    );
};

export default SliderWrapper;
