import * as React from "react";
import styled from "styled-components";
import { TImages } from "./Slider";
import Rating from "./Rating";

const Figure = styled.figure`
    position: relative;
    min-width: 80vh;
    height: 80vh;
`;

const Image = styled.img`
    position: relative;
    min-width: 60vh;
    height: 60vh;
    object-fit: contain;
`;

interface TProps {
    foto: TImages;
}

const Slide: React.FC<TProps> = ({ foto }) => {
    return (
        <Figure>
            <Image alt={foto.name} src={foto.image} />
            <figcaption>
                {foto.name} <Rating rating={foto.rating} />
            </figcaption>
        </Figure>
    );
};

export default Slide;
