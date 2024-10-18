import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
      <Navbar bg="secondary" className="">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/wetf_logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>{' '}
    </>
  );
};

export default Header;
