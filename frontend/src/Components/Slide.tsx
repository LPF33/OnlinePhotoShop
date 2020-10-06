import * as React from "react";
import styled from "styled-components";

const Image = styled.img`
    position: relative;
    min-width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

type TProps = {
    image: string;
};

const Slide: React.FC<TProps> = ({ image }) => {
    return <Image alt="picture" src={`/sliderImages/${image}.JPG`} />;
};

export default Slide;
