import * as React from 'react';
import { Link } from 'react-router-dom';

const footerData = require('../../utils/data/footerData.json');

const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <p className='col-md-4 mb-0 text-body-secondary'>
          © {footerData.copyrightYear} {footerData.owner}
        </p>
        <Link to={footerData.logoLink.destination}>
          <img
            alt={footerData.logoLink.imgAlt}
            src={footerData.logoLink.imgSrc}
            width={footerData.logoLink.imgWidth}
            height={footerData.logoLink.imgHeight}
            className={footerData.logoLink.imgClassName}
          />
        </Link>
        <ul className='nav col-md-4 justify-content-end'>
          {footerData.links.map((link) => {
            return (
              <li className='nav-item' role={link.role} key={link.text}>
                <Link
                  to={link.destination}
                  role='link'
                  className={link.className}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
