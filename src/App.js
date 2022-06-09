import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './scss/style.scss';


function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="header">
        <div className='container'>
          <h1 className='header-title'>Savingram</h1>
          <nav className='navigation'>
            <div className='nav-btn'><i className ='bx bx-menu'></i></div>
            <ul>
              {/* <li><Link to='/'>&lt; Home /&gt;</Link></li> */}
              <li><Link to={'/about'} style={{ textDecoration: 'none', color: '#000'}}>&lt; About /&gt;</Link></li>
              <li><Link to='/skills' style={{ textDecoration: 'none', color: '#000'}}>&lt; Skills /&gt;</Link></li>
              <li><Link to='/projects' style={{ textDecoration: 'none', color: '#000'}}>&lt; Projects /&gt;</Link></li>
              <li><Link to='/contact' style={{ textDecoration: 'none', color: '#000'}}>&lt; Contact /&gt;</Link></li>
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
