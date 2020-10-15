import * as React from "react";
import styled from "styled-components";
import { TImages } from "./Slider";

const Wrapper = styled.div`
    position: absolute;
    bottom: 2%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dot = styled.div`
    padding: 5px;
    margin-right: 5px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => (theme === "true" ? "green" : "black")};
`;

interface TSliderDots {
    images: TImages[];
    current: number;
}

const SliderDots: React.FC<TSliderDots> = ({ images, current }) => {
    return (
        <Wrapper>
            {images.map((image, index) => (
                <Dot
                    key={image.image}
                    theme={current === index ? "true" : "false"}
                />
            ))}
        </Wrapper>
    );
};

export default SliderDots;
