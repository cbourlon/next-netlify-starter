import { useEffect, useState } from "react";

export const breakpoints = {
    xxs: 1,
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1220,
    xl: 1540,
    xxl: 1840,
};

const isClient = typeof window === "object";

function getSize() {
    return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
    };
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
