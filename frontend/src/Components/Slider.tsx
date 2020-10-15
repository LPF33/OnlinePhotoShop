import * as React from "react";
import { MainScreenWrapper } from "../Style/AuthScreen";
import axios from "axios";

import Slide from "./Slide";
import SliderWrapper, { TSlideWrapperProps } from "./SlideWrapper";
import SliderButton, { ButtonDirection } from "./SliderButton";
import SliderDots from "./SliderDots";

import useDetectTouch from "../CustomHooks/DetectTouch";

export interface TImages {
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
    const [images, setImages] = React.useState<TImages[]>([]);

    React.useEffect(() => {
        (async () => {
            const {
                data: { success, result },
            } = await axios.get<TFetchBestProducts>("/api/bestproducts");
            if (success && result.length >= 5) {
                setImages(result);
            }
        })();
    }, []);

    // const [slideState, setSlideState] = React.useState<State>({
    //     translate: 100,
    //     currentSlide: 0,
    //     transition: 1,
    //     imageArr: [images[images.length - 1], images[0], images[1]],
    // });

    // const transitionRef = React.useRef<() => void | null>(null!);
    // const animationId = React.useRef<number>(0);

    // React.useEffect(() => {
    //     transitionRef.current = changeimageArr;
    // });

    // React.useEffect(() => {
    //     const smooth = (e: any) => {
    //         if (e.target.className.includes("SliderWrapper")) {
    //             transitionRef.current();
    //         }
    //     };

    //     window.addEventListener("transitionend", smooth);

    //     animationId.current = setTimeout(
    //         () => slide(ButtonDirection.RIGHT),
    //         3000
    //     );

    //     return () => {
    //         window.removeEventListener("transitionend", smooth);
    //         clearTimeout(animationId.current);
    //     };
    // }, []);

    // const slide = (direction: ButtonDirection): void => {
    //     clearTimeout(animationId.current);
    //     switch (direction) {
    //         case ButtonDirection.LEFT:
    //             setSlideState((prev) => ({
    //                 ...prev,
    //                 currentSlide:
    //                     prev.currentSlide === 0
    //                         ? images.length - 1
    //                         : prev.currentSlide - 1,
    //                 translate: 0,
    //                 transition: 1,
    //             }));
    //             break;

    //         case ButtonDirection.RIGHT:
    //             setSlideState((prev) => ({
    //                 ...prev,
    //                 currentSlide:
    //                     prev.currentSlide === images.length - 1
    //                         ? 0
    //                         : prev.currentSlide + 1,
    //                 translate: prev.translate + 100,
    //                 transition: 1,
    //             }));
    //             break;
    //         default:
    //             break;
    //     }

    //     animationId.current = setTimeout(
    //         () => slide(ButtonDirection.RIGHT),
    //         3000
    //     );
    // };

    // const { touch } = useDetectTouch(slide);

    // const changeimageArr = (): void => {
    //     let _slides: TImages[] = [];

    //     if (slideState.currentSlide === images.length - 1) {
    //         _slides = [
    //             images[images.length - 2],
    //             images[images.length - 1],
    //             images[0],
    //         ];
    //     } else if (slideState.currentSlide === 0) {
    //         _slides = [images[images.length - 1], images[0], images[1]];
    //     } else {
    //         _slides = images.slice(
    //             slideState.currentSlide - 1,
    //             slideState.currentSlide + 2
    //         );
    //     }

    //     setSlideState({
    //         ...slideState,
    //         imageArr: _slides,
    //         transition: 0,
    //         translate: 100,
    //     });
    // };

    // const slideWrapperProps: TSlideWrapperProps = {
    //     width: slideState.imageArr.length * 100,
    //     translate: slideState.translate / slideState.imageArr.length,
    //     transition: slideState.transition,
    // };

    return (
        <MainScreenWrapper>
            {images.length > 4 &&
                images.map((item, index) => <Slide foto={item} key={index} />)}

            {/* // <SliderWrapper styleProps={slideWrapperProps}>
            //     {slideState.imageArr.map((item, index) => ( */}
            {/* //         <Slide foto={item} key={index} />
            //     ))}
            // </SliderWrapper> */}
            {/* 
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
            <SliderDots images={images} current={slideState.currentSlide} /> */}
        </MainScreenWrapper>
    );
};

export default Slider;
