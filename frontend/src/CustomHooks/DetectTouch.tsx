import * as React from "react";
import { ButtonDirection } from "../Components/SliderButton";

interface ReturnTypeDetectTouch {
    touch: boolean;
}

export default function useDetectTouch(
    slideFunction: (direction: ButtonDirection) => void
): ReturnTypeDetectTouch {
    const [touch, setTouch] = React.useState<boolean>(false);
    const touchStartPoint = React.useRef<number>(0);

    const is_touch_enabled = (): void => {
        setTouch(
            "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
        );
    };

    const getTouchStart = (e: TouchEvent): void => {
        touchStartPoint.current = e.touches[0].pageX;
    };

    const measureDistance = (e: TouchEvent): void => {
        const touchEndPoint = e.changedTouches[0].pageX;
        if (touchStartPoint.current - touchEndPoint > 50) {
            slideFunction(ButtonDirection.RIGHT);
        } else if (touchStartPoint.current - touchEndPoint < -50) {
            slideFunction(ButtonDirection.LEFT);
        }
    };

    React.useEffect(() => {
        is_touch_enabled();

        window.addEventListener("resize", is_touch_enabled);
        window.addEventListener("touchstart", getTouchStart);
        window.addEventListener("touchend", measureDistance);

        return () => {
            window.removeEventListener("resize", is_touch_enabled);
            window.removeEventListener("touchstart", getTouchStart);
            window.removeEventListener("touchend", measureDistance);
        };
    }, []);

    return { touch };
}
