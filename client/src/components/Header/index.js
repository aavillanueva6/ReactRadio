import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const navStyle = {
  backgroundImage: `url('https://aav-react-radio.s3.us-west-2.amazonaws.com/WETFBannerLightsCity_forHeader.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(300px)',
};
const Header = () => {
  const [playingLiveStream, SetPlayingLiveStream] = useState(false);
  const [liveStreamButtonText, SetLiveStreamButtonText] =
    useState('Listen Live');

  const handleListenLiveClick = () => {
    const audioElement = document.getElementById('liveRadioStream');
    if (!playingLiveStream) {
      audioElement.play();
      SetPlayingLiveStream(true);
      SetLiveStreamButtonText('Pause Stream');
    } else {
      audioElement.pause();
      SetPlayingLiveStream(false);
      SetLiveStreamButtonText('Listen Live');
    }
  };

  return (
    <>
      <Navbar className=" sticky-top" style={navStyle}>
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
          <Button onClick={handleListenLiveClick} variant="outline-primary">
            {liveStreamButtonText}
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
