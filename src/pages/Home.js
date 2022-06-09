import React from "react";

import Feed from '../components/Feed';

function Home () {
    return (
        <section className="home">
            {/* <h2>Home Menu</h2>
            <p>이 페이지는 Home 페이지입니다.</p> */}

            {/* VER (1) */}
            <Feed title="프로젝트 제목" contents="내용" link="링크" />
            <Feed title="프로젝트 제목" contents="내용" link="링크" />
            <Feed title="프로젝트 제목" contents="내용" link="링크" />
        </section>
    );
}

export default Home;