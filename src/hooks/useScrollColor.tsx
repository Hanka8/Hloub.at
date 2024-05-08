import { useMemo } from 'react';
import useScroll from './useScroll';

const useScrollColor = (
    initialColorValue: number,
    finalColorValue: number,
    speedOfColorChange: number,
): number => {
    const scrollY = useScroll();

    const calculateColorValue = useMemo(() => {
        const valuesRange = finalColorValue - initialColorValue;
        return () => {
            const scrollProgress = Math.min(scrollY / 500, 1);
            return initialColorValue + valuesRange * scrollProgress * speedOfColorChange;
        };
    }, [scrollY, initialColorValue, finalColorValue, speedOfColorChange]);

    return calculateColorValue();
};

export default useScrollColor;