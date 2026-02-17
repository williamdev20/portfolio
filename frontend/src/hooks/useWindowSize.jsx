import { useState, useEffect } from "react"

export default function useWindowSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
}