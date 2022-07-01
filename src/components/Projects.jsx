import React, { useState } from "react";
import Card from './Card';


function Projects() {
    // const projects = ['EAT-HEALTY', 'WEATHER', 'MRS', 'EAT-HEALTY', 'WEATHER', 'MRS'];
    const projects = [
        {
            title: "Coupang-Discovery",
            image: "Coupang-Discovery",
            detail: "쿠팡 웹페이지의 오늘의 발견 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "",
            source: "",
        },
        {
            title: "Coupang-Offer",
            image: "Coupang-Discovery",
            detail: "쿠팡 웹페이지의 <오늘의 쇼핑 제안>을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "",
            source: "",
        },
        {
            title: "Coupang-Category Best",
            image: "Coupang-Discovery",
            detail: "쿠팡 웹페이지의 <카테고리별 추천 광고상품> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3", "JavaScript"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "",
            source: "",
        },
        {
            title: "Coupang-Header",
            image: "Coupang-Discovery",
            detail: "쿠팡 웹페이지의 <헤더> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3", "JavaScript"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "",
            source: "",
        },
        {
            title: "Coupang-Nav & Footer",
            image: "Coupang-Discovery",
            detail: "쿠팡 웹페이지의 <네비게이션>과 <푸터> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3", "JavaScript"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "",
            source: "",
        },{
            title: "Eat Healthy",
            image: "Eat-Healthy",
            detail: "식단 영양 정보 분석 & 레시피 검색 및 관리 기능을 제공하는 웹서비스 입니다.",
            start: "2022.06.05",
            end: "2022.06.30",
            tech: ["HTML 마크업", "CSS 스타일링"],
            work: [],
            demo: "https://savinpark.github.io/Eat-Healthy/",
            source: "https://github.com/SavinPark/Eat-Healthy",
        },
        {
            title: "Portfolio",
            image: "Eat-Healthy",
            detail: "개인 포트폴리오 웹페이지 입니다.",
            start: "2022.06.28",
            end: "2022.07.01",
            tech: ["React", "Scss", "styled-component"],
            work: [],
            demo: "https://savinpark.github.io/portfolio/",
            source: "https://github.com/SavinPark/portfolio",
        },
    ]
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
            <div className="flipBtn">
            <button className="filp-all" onClick={() => {setFlipAll(!flipAll)}}>
                { !flipAll ? (<span>Flip All &gt;</span>) : (<span>Reset &gt;</span>)}
            </button>
            </div>
            <div className="projects-grid">
                {
                    projects.map((ele, idx) => {
                        return(
                            <div key={`proj-${idx}`} className={(flip === idx) || flipAll ? "flip active" : "flip" } onClick={() => {cardFlip(idx)}}>
                                <Card proj={ele} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;