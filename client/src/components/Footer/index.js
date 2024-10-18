import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">
          © 2024 Alejandro Villanueva
        </p>
        <Link to="/">
          <img
            alt=""
            src="/wetf_logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Link>
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link to="/" class="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Schedule" class="nav-link px-2 text-body-secondary">
              Schedule
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/donate" class="nav-link px-2 text-body-secondary">
              Support
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
