import React from 'react';
import { Outlet } from 'react-router-dom';

function About() {
    return(
        <section className="about">
            <h2>About Menu</h2>
            <p>이 페이지는 About 페이지입니다.</p>
        </section>
    );
}

export default About;