import React from "react";
import styled from "styled-components";


function Projects() {

    const projects = ['EAT-HEALTY', 'WEATHER', 'MRS', 'EAT-HEALTY', 'WEATHER', 'MRS']
    return(
        <section id="projects">
            <h2>PORTFOLIO</h2>
            <div className="projects-grid">
                {
                    projects.map((ele, idx) => {
                        return(
                            <div className="projects-item" key={idx}>
                                <div className="project-info">
                                    <h3 className="title">{ele}</h3>
                                    <p>2022.03~</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;