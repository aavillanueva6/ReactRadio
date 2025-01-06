import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

const homeData = require('../utils/data/homeData.json');

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PageMetadata = {
    title: `WETF 105.7 - The Jazz Station`,
    meta: {
      name: {
        description: `Jazz Radio WETF Preserves, Promotes, Perpetuates and Presents Jazz Music`,
        keywords: `WETF, Jazz`,
        author: `Alejandro Villanueva`,
        viewport: `width=device-width, initial-scale=1.0`,
      },
      property: {
        ogLocale: `en_US`,
        ogType: `website`,
      },
    },
  };
  PageMetadata.meta.property.ogTitle = PageMetadata.title;
  PageMetadata.meta.property.ogDescription = PageMetadata.meta.name.description;

  const genreLists = [
    homeData.genreSection.ul.slice(0, homeData.genreSection.ul.length / 2),
    homeData.genreSection.ul.slice(homeData.genreSection.ul.length / 2),
  ];

  return (
    <>
      <MetaTags>
        <title>{PageMetadata.title}</title>
        <meta name='description' content={PageMetadata.meta.name.description} />
        <meta name='keywords' content={PageMetadata.meta.name.keywords} />
        <meta name='author' content={PageMetadata.meta.name.author} />
        <meta name='viewport' content={PageMetadata.meta.name.viewport} />
        <meta
          property='og:title'
          content={PageMetadata.meta.property.ogTitle}
        />
        <meta
          property='og:locale'
          content={PageMetadata.meta.property.ogLocale}
        />
        <meta property='og:type' content={PageMetadata.meta.property.ogType} />
        <meta
          property='og:description'
          content={PageMetadata.meta.property.ogDescription}
        />
      </MetaTags>
      {/* banner image */}
      <img
        className={homeData.bannerImg.class}
        alt={homeData.bannerImg.alt}
        src={homeData.bannerImg.src}
        style={homeData.bannerImg.style}
      ></img>
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
              <h3>{homeData.genreSection.header}</h3>
            </div>
            <div className='row'>
              {genreLists.map((list, i) => {
                return (
                  <div key={`genre-list-col-${i}`} className='col-6'>
                    <ul>
                      {list.map((genre, i) => {
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
              <Link to='/schedule'>Weekly Schedule</Link>
            </strong>{' '}
            for the times to hear your preferred music, presented by more than
            two dozen carefully selected jazz hosts from throughout the country.
            See our{' '}
            <strong>
              <Link to='/contributors'>contributors page</Link>
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
