import React, { useState } from "react";
import Card from './Card';


function Projects() {
    const projects = ['EAT-HEALTY', 'WEATHER', 'MRS', 'EAT-HEALTY', 'WEATHER', 'MRS'];
    const [flipAll, setFlipAll] = useState(false);
    const [flip, setFlip] = useState(-1);
    const cardFlip = (n) => {
        if (flip !== -1) {
            setFlip(-1)
        } else {
            setFlip(n)
        }
    }

    return(
        <section id="projects">
            <h2>PORTFOLIO</h2>
            <button className="control-all" onClick={() => {setFlipAll(!flipAll)}}>
                { !flipAll ? (<span>Flip All &gt;</span>) : (<span>Reset &gt;</span>)}
            </button>
            <div className="projects-grid">
                {
                    projects.map((ele, idx) => {
                        return(
                            <div key={`proj-${idx}`} className={(flip === idx) || flipAll ? "flip active" : "flip" } onClick={() => {cardFlip(idx)}}>
                                <Card title={ele} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;