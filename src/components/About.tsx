import useScroll from "../hooks/useScroll";

function About():JSX.Element {

    const scroll = useScroll();

    return (
        <main className="about"
            
        >
        <div className="about-wrap">
            <h1>další sekce</h1>
        </div>
        </main>
    )
}

export default About;