import React from 'react';
import Link from 'next/link';

interface StyledTextType {
  text: string;
  class: string;
  style: Record<string, string>;
}

interface StyledImgType {
  src: string;
  alt: string;
  class: string;
  style: Record<string, string>;
}

interface HomeDataType {
  bannerImg: StyledImgType;
  aboutText: {
    heading: StyledTextType;
  };
  mapSection: {
    img: StyledImgType;
    p: StyledTextType;
  };
  genreSection: {
    img: StyledImgType;
    header: StyledTextType;
    ul: string[];
  };
  endSection: {
    img: StyledImgType;
  };
}
// eslint-disable-next-line @typescript-eslint/no-require-imports
const homeData: HomeDataType = require('./lib/homeData.json');

const Home: React.FC = () => {
  const genreLists: Array<string[]> = [
    homeData.genreSection.ul.slice(0, homeData.genreSection.ul.length / 2),
    homeData.genreSection.ul.slice(homeData.genreSection.ul.length / 2),
  ];

  return (
    <>
      {/* banner image */}
      <div
        className='position-relative mx-auto'
        style={homeData.bannerImg.style}
      >
        <img
          className={homeData.bannerImg.class}
          alt={homeData.bannerImg.alt}
          src={homeData.bannerImg.src}
          style={homeData.bannerImg.style}
        />
        <div
          className='position-absolute top-0 start-0 p-4 text-primary w-50'
          style={{ backgroundColor: 'rgba(25, 35, 120, 0.7)' }}
        >
          <p
            className='fw-bold  text-nowrap mb-0'
            style={{ fontSize: 'min(4vw,51px)' }}
          >
            WETF-LP
          </p>
          <p className='my-2 text-nowrap' style={{ fontSize: 'min(3vw,38px)' }}>
            105.7 FM - The Jazz Station
          </p>
          <p
            className='mb-0 text-nowrap '
            style={{ fontSize: 'min(3vw,38px)' }}
          >
            South Bend, Indiana
          </p>
        </div>
        <div
          className='position-absolute bottom-0 text-secondary w-25'
          style={{
            backgroundColor: 'rgba(25, 35, 120, 0.7)',
            right: '10%',
            padding: '1rem',
          }}
        >
          <div className='text-center mb-3'>
            <img
              src='/WETF_icon.svg'
              alt='Overlay Icon'
              className='img-fluid'
              style={{
                maxWidth: '50%',
                height: 'auto',
              }}
            />
          </div>
          <div className='text-center'>
            <p
              className='fw-bold text-nowrap'
              style={{ fontSize: 'min(2vw,25px)' }}
            >
              <Link
                className='link-underline link-underline-opacity-0 text-white'
                href='/hosts'
              >
                WETF Hosts
              </Link>
            </p>
            <p
              className='fw-bold text-nowrap'
              style={{ fontSize: 'min(2vw,25px)' }}
            >
              <Link
                className='link-underline link-underline-opacity-0 text-white'
                href='/donate'
              >
                Support WETF
              </Link>
            </p>
            <p
              className='fw-bold text-nowrap'
              style={{ fontSize: 'min(2vw,25px)' }}
            >
              <Link
                className='link-underline link-underline-opacity-0 text-white'
                href='/schedule'
              >
                Weekly Schedule
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className='container my-0 pt-5 px-5 bg-body-tertiary rounded-3'>
        <h1 className={homeData.aboutText.heading.class}>
          {homeData.aboutText.heading.text}
        </h1>
        {/* map section */}
        <div className='row'>
          <div className='col-lg-8'>
            <img
              className={homeData.mapSection.img.class}
              alt={homeData.mapSection.img.alt}
              src={homeData.mapSection.img.src}
              style={homeData.mapSection.img.style}
            ></img>
          </div>

          <p className={homeData.mapSection.p.class}>
            {homeData.mapSection.p.text}
          </p>
        </div>
        {/* genre section */}
        <div className='row mt-4'>
          <div className='col-lg-3'>
            <img
              className={homeData.genreSection.img.class}
              alt={homeData.genreSection.img.alt}
              src={homeData.genreSection.img.src}
              style={homeData.genreSection.img.style}
            ></img>
          </div>
          <div className='col-lg-9'>
            <div className='row'>
              <p className={homeData.genreSection.header.class}>
                {homeData.genreSection.header.text}
              </p>
            </div>
            <div className='row'>
              {genreLists.map((list: string[], i: number) => {
                return (
                  <div key={`genre-list-col-${i}`} className='col-6'>
                    <ul>
                      {list.map((genre: string, i: number) => {
                        return <li key={`${genre}-${i}`}>{genre}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <p>
            There is also jazz for kids, jazz history presentations and talking
            jazz with the musicians. Check out our{' '}
            <strong>
              <Link href='/schedule'>Weekly Schedule</Link>
            </strong>{' '}
            for the times to hear your preferred music, presented by more than
            two dozen carefully selected jazz hosts from throughout the country.
            See our{' '}
            <strong>
              <Link href='/hosts'>hosts page</Link>
            </strong>{' '}
            for details on our hosts.
          </p>
        </div>
        {/* end section */}
        <div className='row'>
          <img
            className={homeData.endSection.img.class}
            alt={homeData.endSection.img.alt}
            src={homeData.endSection.img.src}
            style={homeData.endSection.img.style}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
