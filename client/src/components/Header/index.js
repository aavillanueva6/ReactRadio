import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const navStyle = {
  backgroundImage: `url('https://aav-react-radio.s3.us-west-2.amazonaws.com/WETFBannerLightsCity_forHeader.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(300px)',
};

const Header = () => {
  const [playingStream, SetPlayingStream] = useState(false);
  const [liveStreamButtonIcon, SetLiveStreamButtonIcon] =
    useState('fa-solid fa-play');
  const [listeningLive, SetListeningLive] = useState(true);
  const [streamButtonHovered, SetStreamButtonHovered] = useState(false);
  const [buttonDisabled, SetButtonDisabled] = useState(false);
  const [loadingAudio, SetLoadingAudio] = useState(false);

  const handleListenLiveClick = () => {
    const audioElement = document.getElementById('liveRadioStream');
    if (!playingStream) {
      playAudio(audioElement);
      handleAudioButtonState(audioElement);
    } else {
      audioElement.pause();
      SetPlayingStream(false);
      SetLiveStreamButtonIcon('fa-solid fa-play');
      SetListeningLive(false);
    }
  };
  const handleJumpToLiveClick = () => {
    const audioElement = document.getElementById('liveRadioStream');
    audioElement.load();
    playAudio(audioElement);
    handleAudioButtonState(audioElement);
    SetListeningLive(true);
  };
  const playAudio = (audioElement) => {
    audioElement.play();
    SetLoadingAudio(true);
    SetPlayingStream(true);
    SetLiveStreamButtonIcon('fa-solid fa-pause');
  };
  const handleFetchAudioStream = () => {
    if (!streamButtonHovered) {
      const audioElement = document.getElementById('liveRadioStream');
      audioElement.load();
      SetStreamButtonHovered(true);
    }
  };
  const handleAudioButtonState = (audioElement) => {
    SetButtonDisabled(true);
    audioElement.onplaying = () => {
      SetLoadingAudio(false);
      SetButtonDisabled(false);
    };
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

          <Button
            size="sm"
            className="p-1"
            onClick={handleListenLiveClick}
            onMouseEnter={handleFetchAudioStream}
            disabled={buttonDisabled}
            variant="outline-primary"
          >
            <p className="p-0 m-0">Listen Live</p>
            {loadingAudio ? (
              <div
                className="spinner-border spinner-border-sm text-primary"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <i className={liveStreamButtonIcon}></i>
            )}
            <audio id="liveRadioStream" preload="none">
              <source
                src="https://ssl-proxy.icastcenter.com/get.php?type=Icecast&server=199.180.72.2&port=9007&mount=/stream&data=mp3"
                type="audio/mp3"
              />
            </audio>
          </Button>
          {listeningLive ? (
            <></>
          ) : (
            <Button
              size="sm"
              className="p-1 ms-1"
              onClick={handleJumpToLiveClick}
              variant="outline-primary"
            >
              <p className="p-0 m-0">Jump to live</p>
            </Button>
          )}
          {/* <Navbar.Toggle
            className="text-primary"
            aria-controls="basic-navbar-nav"
          /> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/donate"
                className="nav-link px-2 text-primary fw-bolder"
              >
                Support WETF
              </Link>
              {/* <NavDropdown
                className="fw-bold"
                title="Menu"
                id="basic-nav-dropdown-bsreact"
              >
                <Link
                  to="/"
                  className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                  role="button"
                >
                  Home
                </Link>
                <Link
                  to="/schedule"
                  className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                  role="button"
                >
                  Schedule
                </Link>
                <Link
                  to="/djs"
                  className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                  role="button"
                >
                  DJs
                </Link>
                <Link
                  to="/shows"
                  className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                  role="button"
                >
                  Shows
                </Link>
              </NavDropdown> */}

              <div className="nav-item dropdown">
                <a
                  id="basic-nav-dropdown"
                  aria-expanded="false"
                  role="button"
                  className="nav-link dropdown-toggle text-primary"
                  tabIndex="0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Menu
                </a>
                <div
                  aria-labelledby="basic-nav-dropdown"
                  data-bs-popper="static"
                  className="dropdown-menu"
                >
                  <Link
                    to="/"
                    className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                    role="button"
                  >
                    Home
                  </Link>
                  <Link
                    to="/schedule"
                    className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                    role="button"
                  >
                    Schedule
                  </Link>
                  <Link
                    to="/djs"
                    className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                    role="button"
                  >
                    DJs
                  </Link>
                  <Link
                    to="/shows"
                    className="nav-link px-3 py-1 text-body-secondary dropdown-item"
                    role="button"
                  >
                    Shows
                  </Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
