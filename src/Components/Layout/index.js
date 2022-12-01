import React from 'react';
import Home from '../Home';
import Contact from '../Contact';
import About from '../About';

const Layout = () => {

  function handleClickScroll(id) {
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
        <div id='Contact'>
          <Contact />
        </div>
      </div>

    </>
  )
}

export default Layout;