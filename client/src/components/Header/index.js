import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const navStyle = {
  backgroundImage: `url('https://aav-react-radio.s3.us-west-2.amazonaws.com/WETFBannerLightsCity_forHeader.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(300px)',
};
const Header = () => {
  const [playingLiveStream, SetPlayingLiveStream] = useState(false);
  const [liveStreamButtonIcon, SetLiveStreamButtonIcon] =
    useState('fa-solid fa-play');

  const handleListenLiveClick = () => {
    const audioElement = document.getElementById('liveRadioStream');
    if (!playingLiveStream) {
      audioElement.play();
      SetPlayingLiveStream(true);
      SetLiveStreamButtonIcon('fa-solid fa-pause');
    } else {
      audioElement.pause();
      SetPlayingLiveStream(false);
      SetLiveStreamButtonIcon('fa-solid fa-play');
    }
  };

  return (
    <>
      <Navbar expand="sm" className=" sticky-top" style={navStyle}>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt="WETF Logo"
                src="/WETF_icon.svg"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/donate" className="nav-link px-2 text-dark fw-bolder">
                Support WETF
              </Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </Link>
                </NavDropdown.Item>{' '}
                <NavDropdown.Item>
                  <Link
                    to="/schedule"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Schedule
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/djs" className="nav-link p-0 text-body-secondary">
                    DJs
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/shows"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Shows
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Button
            size="sm"
            className="p-1"
            onClick={handleListenLiveClick}
            variant="outline-primary"
          >
            <p className="p-0 m-0">Listen Live</p>
            <i className={liveStreamButtonIcon}></i>
            <audio id="liveRadioStream" preload="none">
              <source
                src="https://ssl-proxy.icastcenter.com/get.php?type=Icecast&server=199.180.72.2&port=9007&mount=/stream&data=mp3"
                type="audio/mp3"
              />
            </audio>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
