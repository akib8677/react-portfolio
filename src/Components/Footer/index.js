import React from 'react';
import { data } from '../../shared/data';

const Footer = () => {
  const { footer: { name, description, imageUrl } } = data;

  return (
    <>
      <footer className='footer-section'>
        <div className="container card text-center">
          <div className="card-body mt-4">
            <img src={ imageUrl } alt='logo' width={50} style={{ borderRadius: '50%' }} />
            <h5 className="card-title mt-2">{ name }</h5>
            <p className="card-text mt-4">{ description }</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;