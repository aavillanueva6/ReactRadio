import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const navStyle = {
  backgroundImage: `url('https://aav-react-radio.s3.us-west-2.amazonaws.com/WETFBannerLightsCity_forHeader.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(300px)',
};
const Header = () => {
  return (
    <>
      <Navbar style={navStyle}>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/WETF_icon.svg"
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
