import Login from "./Login";
import { useState } from "react";
import useScrollColor from "../hooks/useScrollColor";
import useScroll from "../hooks/useScroll";
import "../styles/landing.css";

function Landing(): JSX.Element {
  const currentSunSaturation = useScrollColor(50, 100, 2);
  const currentLayerSaturation = useScrollColor(50, 100, 2);
  const scrollY = useScroll();

  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);

  return (
    <main className="landing">
      <div
        className="landing-wall"
        style={{
          zIndex: scrollY < window.innerHeight ? 0 : -1,
        }}
      ></div>
      <div
        className="landing-sun"
        style={{
          transform:
            scrollY < window.innerHeight
              ? `translateY(${Math.floor(scrollY * 1.2)}px)`
              : "none",
          background: `hsl(11, ${currentSunSaturation}%, 40%, 0.5)`,
        }}
      ></div>
      <div
        className="landing-layer"
        style={{
          top: scrollY < window.innerHeight ? "0" : "-100%",
          transition: scrollY < window.innerHeight ? "none" : "top 0.5s",
          background: `no-repeat center bottom/contain url("./layer.svg"), radial-gradient(ellipse at bottom, hsla(11, ${currentLayerSaturation}%, 40%, 0.6) 40%, hsla(191, 59%, 64%, 1) 100%)`,
        }}
      >
        <div className="top-bar">
          <button className="logo"></button>
          <div className="top-bar__minicontainer">
            <a className="login" onClick={() =>
                setIsLoginVisible(!isLoginVisible)}
                >
              Login
            </a>
            {isLoginVisible && <Login />}
          </div>
        </div>
        <h1>Hloub.at</h1>
        <nav>
          <ul>
            <li>
              <a href="#meditace">Meditace</a>
            </li>
            <li>
              <a href="#akce">Seznam akcí</a>
            </li>
            <li>
              <a href="#omne">O mně</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Landing;
