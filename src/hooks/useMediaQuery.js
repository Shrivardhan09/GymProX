import { useState, useLayoutEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useLayoutEffect(() => {
        const media = window.matchMedia(query);  //matchMedia is for setting media query
        if (media.matches !== matches) {         //media.matches result in boolean value
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery;