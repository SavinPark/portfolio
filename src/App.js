import logo from './logo.svg';
import './scss/style.scss';
import ProfileImg from './images/profileImg.jpg'

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="header">
        {/* <h1 className='header-title'>Instagram</h1> */}
        {/* <h1 className='header-title'>Protfolio</h1> */}
        <h1 className='header-title'>Savingram</h1>
      </header>
      {/* profile */}
      <section className='profile'>
        <div className='profile-img'>
          <img src={ProfileImg} alt='프로필 이미지' hidden/>
        </div>
        <div className='profile-txt'>
          <p>박은지</p>
          <p>1999.03.15</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </section>
      {/* navigation */}
      <nav className='navigation'>
        <ul>
          <li><Link to='/'>&lt; Home /&gt;</Link></li>
          <li><Link to={'/about'}>&lt; About /&gt;</Link></li>
          <li><Link to='/skills'>&lt; Skills /&gt;</Link></li>
          <li><Link to='/projects'>&lt; Projects /&gt;</Link></li>
          <li><Link to='/contact'>&lt; Contact /&gt;</Link></li>
        </ul>
        <hr/>
      </nav>
      {/* main contents */}
      <main>
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/about" exact={true} element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
