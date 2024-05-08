import { useState, useEffect } from 'react';

const useScroll = (throttleMs: number = 10): number => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        let throttleTimeout: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout(() => {
                    setScrollY(window.scrollY);
                    throttleTimeout = null;
                }, throttleMs);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, [throttleMs]);

    return scrollY;
};

export default useScroll;
