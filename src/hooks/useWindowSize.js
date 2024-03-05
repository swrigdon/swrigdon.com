import { useState, useLayoutEffect } from "react"

export const useWindowSize = () => {
    const [windowSize, setwindowSize] = useState({width: 0, height: 0});
    const updatewindowSize = () => {
        setwindowSize({width: window.innerWidth, height: window.innerHeight});
    };
    useLayoutEffect(() => {
        window.addEventListener('resize', updatewindowSize);
        updatewindowSize();
        return () => window.removeEventListener('resize', updatewindowSize);
    },[])
    return {
        height: windowSize.height,
        width: windowSize.width
    };
};
