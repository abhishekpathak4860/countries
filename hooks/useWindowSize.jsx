import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setwidth] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        window.addEventListener('resize', () => {
            setwidth({
                width: window.innerWidth,
                height: window.innerHeight
            })
            // console.log(window.innerWidth);
        })
    }, [])

    return windowSize;
}