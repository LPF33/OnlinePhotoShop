import * as React from "react";
import SliderButton, { ButtonDirection } from "./SliderButton";
import SliderDots from "./SliderDots";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: black;
    display: flex;
    align-items: center;
`;

const IMG = styled.img`
    position: relative;
    min-width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: transform ease-in 1s;
`;

const Slider: React.FC = () => {
    const images: string[] = ["first", "second", "third", "fourth", "fifth"];

    const [x, setX] = React.useState<number>(0);

    const animationId = React.useRef<number>(0);

    React.useEffect(() => {
        animationId.current = setTimeout(
            () => slide(ButtonDirection.RIGHT),
            3000
        );

        return () => {
            clearTimeout(animationId.current);
        };
    }, [x]);

    const slide = (direction: ButtonDirection): void => {
        clearTimeout(animationId.current);
        switch (direction) {
            case ButtonDirection.LEFT:
                x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
                break;

            case ButtonDirection.RIGHT:
                x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
                break;
            default:
                break;
        }
    };

    return (
        <Wrapper>
            {images.map((item, index) => (
                <IMG
                    key={index}
                    src={`/sliderImages/${item}.JPG`}
                    style={{ transform: `translateX(${x}%)` }}
                />
            ))}

            <SliderButton
                direction={ButtonDirection.LEFT}
                clickHandler={slide}
            />
            <SliderButton
                direction={ButtonDirection.RIGHT}
                clickHandler={slide}
            />
            <SliderDots images={images} current={-x / 100} />
        </Wrapper>
    );
};

export default Slider;
