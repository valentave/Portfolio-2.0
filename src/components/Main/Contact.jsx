import { useEffect } from "react";
import { useState } from "react";
import Network from "./Network";

export default function Contact() {
    let [networks, setNetworks] = useState([]);

    useEffect(() => {
        fetch("/src/data/networks.json")
            .then((res) => res.json())
            .then(res => setNetworks(res.sort((a, b) => a.name.localeCompare(b.name))));
    }, [])

    return(
        <section className="main__contact main__section" id="Contact">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-text">Thank you for visiting my portfolio. If you wish to get in touch with me, feel free to do so through any of the following contact options:</p>
            <div className="networks-container">
                <ul className="networks-list">
                    {networks.map((item) => (
                        <Network item={item} key={item.name}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}