import React from 'react';
import TypeIt from "typeit-react";
import { FaBirthdayCake } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import {GoPerson,  GoHome, GoMail, GoMortarBoard, GoMarkGithub } from "react-icons/go";

function About() {
  return(
    <section id="about">
      <div id="introduction" className="about-inner">
        <div className="typeit">
          <TypeIt options={{
            strings: ["안녕하세요 : ) <br/>신입 Frontend 개발자 박은지입니다."],
            speed: 100,
            loop: true,
            loopDelay: [2500],
            waitUntilVisible: true,
          }}/>
        </div>
        <p>수학 문제 푸는 것을 좋아해서 수학과 전공을 선택하였습니다.</p>
        <p>빅데이터 열풍이 불던 2018년도에 데이터 분야에 대한 호기심이 생겨<br/>융합데이터공학부 복수전공을 시작하였습니다.</p>
        <p>복수전공 수업 중 마크업 언어에 대한 수업을 수강하면서 퍼블리싱에 대한 관심이 생겼고,</p>
        <p>집에서 혼자 이것저것 시도해보면서 자연스럽게 프론트엔드 개발자를 꿈꾸게 되었습니다.</p>
        <p>최고의 사용자 경험을 제공하기 위해</p>
        <p>매일 꾸준히 성장하는 프론트엔드 개발자가 되고 싶습니다.</p>
      </div>
      <div id="profile" className="about-inner">
        <h2>ABOUT</h2>
        <div className="profile-inner">
          <div className= "profile-img"></div>
          <div className="profile-list">
            <ul>
              <li><GoPerson/><span>박은지</span></li>
              <li><FaBirthdayCake/><span>1999. 03. 15</span></li>
              <li><GoHome/><span>경기도 과천시</span></li>
              <li><GoMail/><span>savinpark0315@gmail.com</span></li>
              <li><GoMortarBoard/><span>경기대학교 ( 수학과, 융합데이터공학부 )</span></li>
            </ul>
            <ul>
              <li>
                <a href="https://github.com/SavinPark"><GoMarkGithub/><span>Git</span></a>
              </li>
              <li><SiBloglovin/><span>BLOG</span></li>
              <li><a href='../박은지.pdf' download><IoNewspaperOutline/><span>RESUME</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;