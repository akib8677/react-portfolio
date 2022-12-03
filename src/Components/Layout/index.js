import React from 'react';
import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';

const Layout = () => {

  function handleClickScroll(id) {
    debugger;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
      <div className='container-flex' id='Home'>
        <div className='navbar-fix' >
          <nav className="navbar navbar-expand-lg p2">
            <div className="container-fluid">
              <div className='d-flex'>
                <img src='image/logo_react_portfolio.png' alt='logo' width={50} style={{ borderRadius: '50%' }} />
                <a className="navbar-brand h1 mt-3 mx-2" href="#">Akib</a>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" type='button' onClick={() => handleClickScroll('Home')}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" type='button' onClick={() => handleClickScroll('About')}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" type='button' onClick={() => handleClickScroll('Skills')}>Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" type='button' onClick={() => handleClickScroll('Projects')}>Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" type='button' onClick={() => handleClickScroll('Contact')}>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className='container slide'>
        <div>
          <Home />
        </div>
        <div id='About' >
          <About />
        </div>
        <div id='Skills'>
          <Skills />
        </div>
        <div id='Projects'>
          <Projects />
        </div>
        <div id='Contact'>
          <Contact />
        </div>
      </div>
        <hr/>
      <footer className='footer-section'>
        <div className="container card text-center">
          <div className="card-body mt-4">
          <img src='image/logo_react_portfolio.png' alt='logo' width={50} style={{ borderRadius: '50%' }} />
            <h5 className="card-title mt-2">Akib</h5>
            <p className="card-text mt-4">© 2022. All rights reserved by KfaqsInfo Tech Private Limited.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout;