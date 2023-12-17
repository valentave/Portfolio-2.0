import { useEffect } from "react";
import { useState } from "react"
import ProjectItem from "./ProjectItem";
import PROJECTS from "../../data/projects.json"

export default function Projects() {
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(PROJECTS)
    }, [])

    return(
        <section className="main__projects main__section" id="Projects">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-text">Hey! Here you can take a look at some of my projects.</p>
            <div className="projects-container">
                {projects.map((item) => (
                    <ProjectItem key={item.title} project={item}/>
                ))}
            </div>
        </section>
    )
}