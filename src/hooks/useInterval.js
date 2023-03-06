import { useEffect, useRef } from "react";

// Dan Abramov's custom hook
export const useInterval = (callBack, delay) => {
    const savedCallback = useRef();

    // latest callback
    useEffect(() => {
        savedCallback.current = callBack;
    }, [callBack]); 

    // setting up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [delay]);
};