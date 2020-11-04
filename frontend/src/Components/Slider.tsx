import * as React from "react";
import { MainScreenWrapper } from "../Style/AuthScreen";
import axios from "axios";

import Slide from "./Slide";
import SliderWrapper from "./SlideWrapper";
import SliderButton, { ButtonDirection } from "./SliderButton";
import SliderDots from "./SliderDots";

import useDetectTouch from "../CustomHooks/DetectTouch";

export interface TImages {
    id: number;
    categories: string;
    image: string;
    name: string;
    rating: number;
}

interface State {
    currentSlide: number;
    imageArr: TImages[];
}

interface TFetchBestProducts {
    success: boolean;
    result: TImages[];
}

export type TSlidePosition = "activeSlide" | "nextSlide" | "lastSlide";

const Slider: React.FC = () => {
    const [sliderState, setSliderState] = React.useState<State>({
        currentSlide: 0,
        imageArr: [],
    });

    const animationId = React.useRef<number>(0);

    const slide = (direction: ButtonDirection): void => {
        clearTimeout(animationId.current);
        switch (direction) {
            case ButtonDirection.LEFT:
                setSliderState((prev) => {
                    let index = prev.currentSlide - 1;
                    if (index < 0) {
                        index = prev.imageArr.length - 1;
                    }

                    return { ...prev, currentSlide: index };
                });
                break;

            case ButtonDirection.RIGHT:
                setSliderState((prev) => {
                    let index = prev.currentSlide + 1;
                    if (index > prev.imageArr.length - 1) {
                        index = 0;
                    }

                    return { ...prev, currentSlide: index };
                });
                break;

            default:
                break;
        }

        animationId.current = setTimeout(
            () => slide(ButtonDirection.RIGHT),
            3000
        );
    };

    React.useEffect(() => {
        (async () => {
            const {
                data: { success, result },
            } = await axios.get<TFetchBestProducts>("/api/bestproducts");
            if (success && result.length >= 5) {
                setSliderState((prev) => ({ ...prev, imageArr: result }));
            }
        })();

        animationId.current = setTimeout(
            () => slide(ButtonDirection.RIGHT),
            3000
        );

        return () => clearTimeout(animationId.current);
    }, []);

    const { touch } = useDetectTouch(slide);

    return (
        <MainScreenWrapper>
            <SliderWrapper>
                {sliderState.imageArr.length > 0 &&
                    sliderState.imageArr.map((item, index) => {
                        let position: TSlidePosition = "nextSlide";
                        if (index === sliderState.currentSlide) {
                            position = "activeSlide";
                        }
                        if (
                            index === sliderState.currentSlide - 1 ||
                            (sliderState.currentSlide === 0 &&
                                index === sliderState.imageArr.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <Slide
                                foto={item}
                                position={position}
                                key={index}
                            />
                        );
                    })}
            </SliderWrapper>
            {!touch && (
                <SliderButton
                    direction={ButtonDirection.LEFT}
                    clickHandler={slide}
                />
            )}
            {!touch && (
                <SliderButton
                    direction={ButtonDirection.RIGHT}
                    clickHandler={slide}
                />
            )}
            <SliderDots
                images={sliderState.imageArr}
                current={sliderState.currentSlide}
            />
        </MainScreenWrapper>
    );
};

export default Slider;
