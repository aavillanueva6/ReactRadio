import React from 'react';
import MetaTags from 'react-meta-tags';

const homeData = require('../utils/data/homeData.json');

const Home = () => {
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
      <img
        className={homeData.bannerImg.class}
        alt={homeData.bannerImg.alt}
        src={homeData.bannerImg.src}
      ></img>
      <div className='container my-0'>
        <div className='p-5 text-center bg-body-tertiary rounded-3'>
          <h1 className='text-body-emphasis'>About WETF</h1>
          <p className='lead'>{homeData.lead}</p>
          {homeData.body.map((paragraph, i) => (
            <p key={`about-paragraph-${i}`} className=''>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
