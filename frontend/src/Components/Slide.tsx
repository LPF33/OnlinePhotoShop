import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TImages, TSlidePosition } from "./Slider";
import Rating from "./Rating";

const LinkTo = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s ease-in all;

    &.activeSlide {
        transform: translateX(0);
        opacity: 1;
    }

    &.lastSlide {
        transform: translateX(-100%);
        opacity: 0;
    }

    &.nextSlide {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const Figure = styled.figure`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    position: relative;
    width: 80%;
    height: 80%;
    object-fit: contain;
`;

const Figcaption = styled.figcaption`
    height: 10%;
    width: 80%;
    color: white;
`;

interface TProps {
    foto: TImages;
    position: TSlidePosition;
}

const Slide: React.FC<TProps> = ({ foto, position }) => {
    return (
        <LinkTo
            to={`/product/${foto.categories}/${foto.id}`}
            className={position}
        >
            <Figure>
                <Image alt={foto.name} src={foto.image} />
                <Figcaption>
                    {foto.name} <Rating rating={foto.rating} />
                </Figcaption>
            </Figure>
        </LinkTo>
    );
};

export default Slide;
