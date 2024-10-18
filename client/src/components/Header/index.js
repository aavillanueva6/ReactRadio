import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link className="text-light" to="/">
          <h1 className="m-0">WETF-LP</h1>
        </Link>
        <p className="m-0">The Jazz Station</p>
      </div>
    </header>
  );
};

export default Header;
