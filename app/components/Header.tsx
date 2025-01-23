'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

interface AudioElement {
  src: string;
  type: string;
}
interface HeaderLink {
  className: string;
  destination: string;
  role: string;
  text: string;
}
interface LogoLink {
  destination: string;
  imgAlt: string;
  imgClassName: string;
  imgHeight: string;
  imgSrc: string;
  imgWidth: string;
}
interface NavStyle {
  backdropFilter: string;
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundSize: string;
}
interface HeaderData {
  audioElement: AudioElement;
  dropdownLinks: HeaderLink[];
  logoLink: LogoLink;
  navStyle: NavStyle;
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const headerData: HeaderData = require('../lib/headerData.json');

const navStyle: NavStyle = headerData.navStyle;

const Header = () => {
  const [playingStream, SetPlayingStream] = useState<boolean>(false);
  const [liveStreamButtonIcon, SetLiveStreamButtonIcon] =
    useState<string>('fa-solid fa-play');
  const [listeningLive, SetListeningLive] = useState<boolean>(true);
  const [streamButtonHovered, SetStreamButtonHovered] =
    useState<boolean>(false);
  const [buttonDisabled, SetButtonDisabled] = useState<boolean>(false);
  const [loadingAudio, SetLoadingAudio] = useState<boolean>(false);

  const handleListenLiveClick = () => {
    const audioElement = document.getElementById(
      'liveRadioStream'
    ) as HTMLAudioElement;
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
    const audioElement = document.getElementById(
      'liveRadioStream'
    ) as HTMLAudioElement;
    audioElement.load();
    playAudio(audioElement);
    handleAudioButtonState(audioElement);
    SetListeningLive(true);
  };

  const playAudio = (audioElement: HTMLAudioElement) => {
    audioElement.play();
    SetLoadingAudio(true);
    SetPlayingStream(true);
    SetLiveStreamButtonIcon('fa-solid fa-pause');
  };

  const handleFetchAudioStream = () => {
    const audioElement = document.getElementById(
      'liveRadioStream'
    ) as HTMLAudioElement;
    if (!streamButtonHovered) {
      audioElement.load();
      SetStreamButtonHovered(true);
    }
  };

  const handleAudioButtonState = (audioElement: HTMLAudioElement) => {
    SetButtonDisabled(true);
    audioElement.onplaying = () => {
      SetLoadingAudio(false);
      SetButtonDisabled(false);
    };
  };

  return (
    <>
      <Navbar expand='sm' className='sticky-top' style={navStyle}>
        <Container>
          <Link href={headerData.logoLink.destination}>
            <Navbar.Brand>
              <img
                alt={headerData.logoLink.imgAlt}
                src={headerData.logoLink.imgSrc}
                width={headerData.logoLink.imgWidth}
                height={headerData.logoLink.imgHeight}
                className={headerData.logoLink.imgClassName}
              />
            </Navbar.Brand>
          </Link>

          <Button
            size='sm'
            className='p-1'
            onClick={handleListenLiveClick}
            onMouseEnter={handleFetchAudioStream}
            disabled={buttonDisabled}
            variant='outline-primary'
          >
            <p className='p-0 m-0'>Listen Live</p>
            {loadingAudio ? (
              <div
                className='spinner-border spinner-border-sm text-primary'
                role='status'
              >
                <span className='visually-hidden'>Loading...</span>
              </div>
            ) : (
              <i className={liveStreamButtonIcon}></i>
            )}
            <audio id='liveRadioStream' preload='none'>
              <source
                src={headerData.audioElement.src}
                type={headerData.audioElement.type}
              />
            </audio>
          </Button>
          {listeningLive ? (
            <></>
          ) : (
            <Button
              size='sm'
              className='p-1 ms-1'
              onClick={handleJumpToLiveClick}
              variant='outline-primary'
            >
              <p className='p-0 m-0'>Jump to live</p>
            </Button>
          )}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#basic-navbar-nav'
            aria-controls='basic-navbar-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link
                href='/donate'
                className='nav-link px-2 text-primary fw-bolder'
              >
                Support WETF
              </Link>
              <div className='nav-item dropdown'>
                <a
                  id='basic-nav-dropdown'
                  aria-expanded='false'
                  role='button'
                  className='p-2 nav-link dropdown-toggle text-primary'
                  tabIndex={0}
                  href='#'
                  data-bs-toggle='dropdown'
                >
                  Menu
                </a>
                <div
                  aria-labelledby='basic-nav-dropdown'
                  data-bs-popper='static'
                  className='dropdown-menu'
                >
                  {headerData.dropdownLinks.map((e: HeaderLink) => {
                    return (
                      <Link
                        key={e.text}
                        href={e.destination}
                        className={e.className}
                        role={e.role}
                      >
                        {e.text}
                      </Link>
                    );
                  })}
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
