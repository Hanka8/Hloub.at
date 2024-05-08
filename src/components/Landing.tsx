import useScrollColor from '../hooks/useScrollColor';
import useScroll from '../hooks/useScroll';

function Landing(): JSX.Element {
    
    const currentSunSaturation = useScrollColor(50, 100, 2);
    const currentLayerSaturation = useScrollColor(50, 100, 2);

    const scrollY = useScroll();

    return (
        <main className="landing">
            <div 
              className="landing-wall"
              style={{
                transform: scrollY < 500 ? `translateY(${scrollY * 1}px)` : 'none',
              }}
              >
            </div>
            <div
                className="landing-sun"
                style={{
                    transform: scrollY < 500 ? `translateY(${scrollY * 1.3}px)` : 'none',
                    background: `hsl(11, ${currentSunSaturation}%, 40%, 0.5)`
                }}
            ></div>
            <div 
              className="landing-layer"
              style={{
                transform: `translateY(${scrollY * 1}px)`,
                background: `no-repeat center/contain url("./layer.svg"), radial-gradient(circle, hsla(11, ${currentLayerSaturation}%, 40%, 0.6) 0%, hsla(191, 23%, 64%, 0.5) 100%)`,
              }}
              >
              </div>
        </main>
    );
}

export default Landing;