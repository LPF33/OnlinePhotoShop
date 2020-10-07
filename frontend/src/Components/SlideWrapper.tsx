import * as React from "react";
import styled from "styled-components";

const Content = styled.div`
    position: relative;
    height: 100%;
    width: ${({ theme }) => theme.width}%;
    display: flex;
    align-items: center;
    transform: translateX(-${({ theme }) => theme.translate}%);
    transition: transform ease-in ${({ theme }) => theme.transition}s;
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
