import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

interface PageMetadataType {
  title: string;
  meta: {
    name: {
      description: string;
      keywords: string;
      author: string;
      viewport: string;
    };
    property: {
      ogLocale: string;
      ogType: string;
      ogTitle: string;
      ogDescription: string;
    };
  };
}

interface DonateMethodType {
  header: {
    text: string;
    class: string;
  };
  body: {
    text: string;
    class: string;
    style: Record<string, string>;
  };
  icon: {
    src: string;
    style: Record<string, string>;
  };
}

interface DonateDataType {
  infoText: string[];
  pledgeButton: {
    theme: string;
    url: string;
  };
  afterPledgeSection: {
    textSection: {
      text: string;
      class: string;
      style: Record<string, string>;
    };
    otherSupportMethods: DonateMethodType[];
  };
}

const donateData: DonateDataType = require('../utils/data/donateData.json');

const Donate: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PageMetadata: PageMetadataType = {
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
        ogTitle: '',
        ogDescription: '',
      },
    },
  };
  PageMetadata.meta.property.ogTitle = PageMetadata.title;
  PageMetadata.meta.property.ogDescription = PageMetadata.meta.name.description;

  return (
    <>
      <Helmet>
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
      </Helmet>
      <div className='container mx-auto text-center'>
        <div className='text-center px-5 pt-5 pb-3'>
          <h1 className='display-4'>Support Independent Radio</h1>
        </div>
        {donateData.infoText.map((paragraph: string, i: number) => {
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
          {donateData.afterPledgeSection.otherSupportMethods.map(
            (method: DonateMethodType) => (
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
                    <span
                      className={method.body.class}
                      style={method.body.style}
                    >
                      {method.body.text}
                    </span>
                  </div>
                </div>
              </Fragment>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Donate;
