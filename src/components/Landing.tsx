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
                zIndex: scrollY < window.innerHeight ? 0 : -1,
              }}
              >
            </div>
            <div
                className="landing-sun"
                style={{
                    transform: scrollY < window.innerHeight ? `translateY(${Math.floor(scrollY * 1.2)}px)` : 'none',
                    background: `hsl(11, ${currentSunSaturation}%, 40%, 0.5)`,
                }}
            ></div>
            <div 
              className="landing-layer"
              style={{
                top: scrollY < window.innerHeight ? '0' : '-100%',
                transition: scrollY < window.innerHeight ? 'none' : 'top 0.5s',
                background: `no-repeat center bottom/contain url("./layer.svg"), radial-gradient(circle, hsla(11, ${currentLayerSaturation}%, 40%, 0.6) 10%, hsla(191, 23%, 64%, 0.5) 100%)`,
              }}
              >
               <div className='top-bar'>
                  <button className='logo'></button>
                  <a className='login'>Log in</a>
               </div>
               <h1>Hloub.at</h1>
               <nav>
                  <ul>
                    <li><a>O mně</a></li>
                    <li><a>Meditace</a></li>
                    <li><a>Partneři projektu</a></li>
                    <li><a>Kontakt</a></li>
                  </ul>
                </nav>
              </div>
        </main>
    );
}

export default Landing;