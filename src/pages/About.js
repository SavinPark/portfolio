import React from 'react';

import ProfileImg from '../images/profileImg.jpg'

function About() {
  return(
    <section className="about">
      {/* <h2>About Menu</h2>
      <p>이 페이지는 About 페이지입니다.</p> */}

      {/* profile */}
      <div className='profile'>
        <div className='profile-img'>
          <img src={ProfileImg} alt='프로필 이미지'/>
        </div>
        <div className='profile-txt'>
          <p>박은지</p>
          <p>1999.03.15</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/* timeline */}
      <div className='timeline'>
        Lorem ipsum
      </div>
    </section>
  );
}

export default About;