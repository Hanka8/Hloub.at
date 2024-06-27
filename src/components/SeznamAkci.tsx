import "../styles/seznamakci.css";

function SeznamAkci(): JSX.Element {
    return (
        <section className="seznam-akci" id="akce">
            <h1 className="h1">Seznam akcí</h1>
            <ul>
            <li>1. 10. 2021 - Meditace v parku</li>
            <li>2. 10. 2021 - Meditace v parku</li>
            <li>3. 10. 2021 - Meditace v parku</li>
            </ul>
        </section>
        );
};

export default SeznamAkci;