import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

const donateData = require('../utils/data/donateData.json');

const Donate = () => {
  const PageMetadata = {
    title: `WETF 105.7 - Support WETF`,
    meta: {
      name: {
        description: `Jazz Radio WETF donate to support independent non-profit radio`,
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
      <div className='container mx-auto text-center'>
        <div className='text-center px-5 pt-5 pb-3'>
          <h1 className='display-4'>Support Independent Radio</h1>
        </div>
        {donateData.infoText.map((paragraph, i) => {
          return (
            <p className='text-body-secondary' key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className='container my-4'>
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center'>
          <div className='col'>
            <Link
              to={donateData.pledgeButton.url}
              className={donateData.pledgeButton.theme}
              target='_blank'
            >
              Pledge Today
            </Link>
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <span
          className={donateData.afterPledgeSection.textSection.class}
          style={donateData.afterPledgeSection.textSection.style}
        >
          {donateData.afterPledgeSection.textSection.text}
        </span>
      </div>
      <div className='container my-4'>
        <div className='row justify-content-between'>
          {donateData.afterPledgeSection.otherSupportMethods.map((method) => (
            <Fragment key={method.header.text}>
              <div className='col-sm-3'>
                <div
                  className='row text-primary text-center'
                  style={method.icon.style}
                >
                  <i className={`${method.icon.src}`} />
                </div>
                <div className='row'>
                  <span className={`${method.header.class}`}>
                    {method.header.text}
                  </span>
                </div>
                <div className='row'>
                  <span className={method.body.class} style={method.body.style}>
                    {method.body.text}
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Donate;
