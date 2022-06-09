import React from "react";
import styled from "styled-components";

import Feed from '../components/Feed';

const FeedBox = styled.div`
    border: 1 px solid red;
`

function Projects() {
    return(
        <section className="projects">
            {/* <h2>Projects Menu</h2>
            <p>이 페이지는 Projects 페이지입니다.</p> */}

            {/* VER (1) */}
            {/* <Feed title="프로젝트 제목" contents="내용" link="링크" />
            <Feed title="프로젝트 제목" contents="내용" link="링크" />
            <Feed title="프로젝트 제목" contents="내용" link="링크" /> */}

            {/* VER (2) */}
            <FeedBox className="feedbox"/>
            <FeedBox className="feedbox"/>
            <FeedBox className="feedbox"/>
            <FeedBox className="feedbox"/>
            <FeedBox className="feedbox"/>
            <FeedBox className="feedbox"/>
        </section>
    );
}

export default Projects;