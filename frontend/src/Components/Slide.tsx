import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TImages } from "./Slider";
import Rating from "./Rating";

const LinkTo = styled(Link)`
    position: relative;
    width: calc(100% / 5);
    height: 100%;
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
}

const Slide: React.FC<TProps> = ({ foto }) => {
    return (
        <LinkTo to={`/product/${foto.categories}/${foto.id}`}>
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
