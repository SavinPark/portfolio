import React from 'react';
import TypeIt from "typeit-react";
import { FaBirthdayCake } from "react-icons/fa";
import {GoPerson,  GoHome, GoMail, GoMortarBoard, GoMarkGithub, GoNote, GoFile } from "react-icons/go";

function About() {
  return(
    <section id="about">
      <div id="introduction" className="about-inner">
        <TypeIt options={{
          strings: ["안녕하세요 : ) <br/>신입 Frontend 개발자 박은지입니다."],
          speed: 100,
          waitUntilVisible: true,
        }}/>
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
              <li><GoNote/><span>BLOG</span></li>
              <li><a href='../박은지.pdf' download><GoFile/><span>RESUME</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;