import { useState, useEffect } from 'react';

const useScroll = (): number => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return scrollY;
};

export default useScroll;