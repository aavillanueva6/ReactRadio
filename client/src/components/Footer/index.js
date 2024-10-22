import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          © 2024 Alejandro Villanueva
        </p>
        <Link to="/">
          <img
            alt=""
            src="/WETF_icon.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Link>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Schedule" className="nav-link px-2 text-body-secondary">
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-link px-2 text-body-secondary">
              Support
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/djs" className="nav-link px-2 text-body-secondary">
              DJs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shows" className="nav-link px-2 text-body-secondary">
              Shows
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
