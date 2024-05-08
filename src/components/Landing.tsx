import { useState, useEffect } from 'react';

function Landing(): JSX.Element {
    
    const initialColorValue = 50;
    const finalColorValue = 100;
    const speedOfColorChange = 2;

    const [scrollY, setScrollY] = useState<number>(0);
    const [currentColorValue, setcurrentColorValue] = useState<number>(50);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const valuesRange = finalColorValue - initialColorValue;
            const scrollProgress = Math.min(scrollY / 500, 1); // Normalize scroll position
            const newHue = initialColorValue + valuesRange * scrollProgress * speedOfColorChange;
            setcurrentColorValue(newHue);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrollY]);

    console.log(currentColorValue);

    return (
        <main className="landing">
            <div 
              className="landing-wall"
              style={{
                transform: scrollY < 500 ? `translateY(-${scrollY * 1.3}px)` : 'none',
              }}
              >
            </div>
            <div
                className="landing-sun"
                style={{ 
                    background: `hsl(11, ${currentColorValue}%, 40%, 0.5)`
                }}
            ></div>
            <div 
              className="landing-layer"
              style={{
                transform: `translateY(-${scrollY * 0.3}px)`,
                background: `no-repeat center/100% url("./1.webp"), radial-gradient(circle, hsla(11, ${currentColorValue}%, 40%, 0.6) 0%, hsla(191, 23%, 64%, 0.5) 100%)`,
              }}
              >
              </div>
        </main>
    );
}

export default Landing;