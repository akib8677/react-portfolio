import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className='d-flex'>
              <img src='image/logo_react_portfolio.png' alt='logo' width={40} style={{ borderRadius: '50%' }} />
              {/* <a className="navbar-brand" href="#">Akib</a> */}
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'about'}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr />
      <div className='container'>
        <Outlet />
      </div>

    </>
  )
}

export default Layout;