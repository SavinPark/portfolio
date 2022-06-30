import React from "react";

function Card ( props ) {

    return (
        <div className="projects-item">
            <div className="project-front">
                <div className="info">
                    <h3 className="title">{props.title}</h3>
                    <p>2022.03~</p>
                    <p>click</p>
                </div>
            </div>
            <div className="project-back">
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, nam officia asperiores velit qui
                    tempore veritatis.</p>
                <p>Figma, HTML5, CSS3, JavaScript . . .</p>
                <p>Source Code</p>
                <p>Demo</p>
            </div>
        </div>
    );
}

export default Card;