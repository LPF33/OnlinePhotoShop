import * as React from "react";
import styled from "styled-components";

const Image = styled.img`
    position: relative;
    min-width: 80vh;
    height: 80vh;
    object-fit: cover;
`;

type TProps = {
    image: string;
};

const Slide: React.FC<TProps> = ({ image }) => {
    return (
        <Image
            alt="picture"
            src={require(`../images/sliderImages/${image}.PNG`)}
        />
    );
};

export default Slide;
