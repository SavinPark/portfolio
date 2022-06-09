import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './scss/style.scss';
import { useState } from 'react';

function App() {

  // const nav = document.querySelector('.navigation');

  // // const [menu, setMenu] = useState(false);
  // const menuToggle = (event) => {
  //   // setMenu(!menu);
  //   // console.log(`menu Tab: ${menu}`)
  //   console.log(event.target);
  //   // event.stopPropagation();
  //   nav.classList.toggle('active');
  // }

  return (
    <div className="App">
      {/* header */}
      <header className="header">
        <div className='container'>
          <h1 className='header-title'>Savingram</h1>
          <nav className='navigation'>
            <div className='nav-btn'>
              <i className ='bx bx-menu'></i>
            </div>
            <ul>
              {/* <li><Link to='/'>&lt; Home /&gt;</Link></li> */}
              <li><Link to={'/about'} className="link" style={{ textDecoration: 'none', color: '#000'}}>&lt; About /&gt;</Link></li>
              <li><Link to='/skills' className="link" style={{ textDecoration: 'none', color: '#000'}}>&lt; Skills /&gt;</Link></li>
              <li><Link to='/projects' className="link" style={{ textDecoration: 'none', color: '#000'}}>&lt; Projects /&gt;</Link></li>
              <li><Link to='/contact' className="link" style={{ textDecoration: 'none', color: '#000'}}>&lt; Contact /&gt;</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* main contents */}
      <main>
        <div className='container'>
          <Routes>
            <Route path="/" exact={true} element={<Home/>} />
            <Route path="/about" exact={true} element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
