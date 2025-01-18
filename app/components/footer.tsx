'use client';
import React from 'react';
import Link from 'next/link';

interface LinkInterface {
  className: string;
  destination: string;
  role: string;
  text: string;
}

const footerData: {
  copyrightYear: string;
  owner: string;
  logoLink: {
    destination: string;
    imgAlt: string;
    imgSrc: string;
    imgWidth: string;
    imgHeight: string;
    imgClassName: string;
  };
  links: LinkInterface[];
} = require('../lib/footerData.json');

const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <p className='col-md-4 mb-0 text-body-secondary'>
          © {footerData.copyrightYear} {footerData.owner}
        </p>
        <Link href={footerData.logoLink.destination}>
          <img
            alt={footerData.logoLink.imgAlt}
            src={footerData.logoLink.imgSrc}
            width={footerData.logoLink.imgWidth}
            height={footerData.logoLink.imgHeight}
            className={footerData.logoLink.imgClassName}
          />
        </Link>
        <ul className='nav col-md-4 justify-content-end'>
          {footerData.links.map((link: LinkInterface) => {
            return (
              <li className='nav-item' role={link.role} key={link.text}>
                <Link
                  href={link.destination}
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
