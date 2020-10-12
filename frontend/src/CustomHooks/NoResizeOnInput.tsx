import * as React from "react";

export default function useNoResizeOnFocus(): void {
    const [sizeBefore, setSizeBefore] = React.useState<number>(
        window.innerHeight
    );

    const metaViewport = document.querySelector("meta[name=viewport]")!;

    const resizeWindow = (): void => {
        metaViewport.setAttribute(
            "content",
            "height=" + sizeBefore + "px, width=device-width, initial-scale=1.0"
        );
    };

    React.useEffect(() => {
        window.addEventListener("resize", resizeWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow);
            metaViewport.setAttribute(
                "content",
                "width=device-width, initial-scale=1.0"
            );
        };
    }, []);
}
