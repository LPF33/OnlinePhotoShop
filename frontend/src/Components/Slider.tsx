import * as React from "react";
import { MainScreenWrapper } from "../Style/AuthScreen";
import axios from "axios";

import Slide from "./Slide";
import SliderWrapper, { TSlideWrapperProps } from "./SlideWrapper";
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
    translate: number;
    currentSlide: number;
    transition: number;
    imageArr: TImages[];
}

interface TFetchBestProducts {
    success: boolean;
    result: TImages[];
}

const Slider: React.FC = () => {
    const [sliderState, setSliderState] = React.useState<State>({
        translate: 0,
        currentSlide: 0,
        transition: 1,
        imageArr: [],
    });

    const animationId = React.useRef<number>(0);
    const transitionRef = React.useRef<() => void | null>(null!);

    React.useEffect(() => {
        transitionRef.current = changeImageArr;
    });

    React.useEffect(() => {
        (async () => {
            const {
                data: { success, result },
            } = await axios.get<TFetchBestProducts>("/api/bestproducts");
            if (success && result.length >= 5) {
                setSliderState((prev) => ({ ...prev, imageArr: result }));
            }
        })();

        const trans = () => {
            transitionRef.current();
        };

        window.addEventListener("transitionend", trans);

        animationId.current = setTimeout(
            () => slide(ButtonDirection.RIGHT),
            3000
        );

        return () => {
            window.removeEventListener("transitionend", trans);
            clearTimeout(animationId.current);
        };
    }, []);

    const changeImageArr = () => {
        const helper: TImages[] = [...sliderState.imageArr];
        const firstPic: TImages = helper.shift()!;
        helper.push(firstPic);

        setSliderState({
            ...sliderState,
            transition: 0,
            translate: 0,
            imageArr: helper,
        });
    };

    const slide = (direction: ButtonDirection): void => {
        clearTimeout(animationId.current);
        switch (direction) {
            case ButtonDirection.LEFT:
                setSliderState((prev) => ({
                    ...prev,
                    currentSlide:
                        prev.currentSlide === 0
                            ? prev.imageArr.length - 1
                            : prev.currentSlide - 1,
                    translate: prev.translate - 100,
                    transition: 1,
                }));
                break;

            case ButtonDirection.RIGHT:
                setSliderState((prev) => ({
                    ...prev,
                    currentSlide:
                        prev.currentSlide === prev.imageArr.length - 1
                            ? 0
                            : prev.currentSlide + 1,
                    translate: prev.translate + 100,
                    transition: 1,
                }));
                break;
            default:
                break;
        }

        animationId.current = setTimeout(
            () => slide(ButtonDirection.RIGHT),
            3000
        );
    };

    const { touch } = useDetectTouch(slide);

    const slideWrapperProps: TSlideWrapperProps = {
        width: sliderState.imageArr.length * 100,
        translate: sliderState.translate / sliderState.imageArr.length,
        transition: sliderState.transition,
    };

    return (
        <MainScreenWrapper>
            <SliderWrapper styleProps={slideWrapperProps}>
                {sliderState.imageArr.length > 4 &&
                    sliderState.imageArr.map((item, index) => (
                        <Slide foto={item} key={index} />
                    ))}
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
