import { useEffect } from "react"
import { useState } from "react"
import SkillItem from "./SkillItem"

export default function Skills() {
    let [languages, setLanguages] = useState([])
    let [tools, setTools] = useState([])

    useEffect(() => {
        fetch("/src/data/languages.json")
            .then(res => res.json())
            .then(res => setLanguages(res.sort((a, b) => a.title.localeCompare(b.title))));

        fetch("/src/data/tools.json")
            .then(res => res.json())
            .then(res => setTools(res.sort((a, b) => a.title.localeCompare(b.title))));
    }, [])

    return(
        <section className="main__skills main__section" id="Skills">
            <h1 className="skills-title">Skills</h1>
            <div className="languages-section">
                <h2 className="languages-title">Languages & Frameworks</h2>
                <div className="languages-container">
                    {languages.map((item) => (
                        <SkillItem key={item.title} item={item} typeOfItem="language"/>
                    ))}
                </div>
            </div>
            <div className="tools-section">
                <h2 className="tools-title">Tools</h2>
                <div className="tools-container">
                    {tools.map((item) => (
                        <SkillItem key={item.title} item={item} typeOfItem="tool"/>
                    ))}
                </div>
            </div>
        </section>
    )
}