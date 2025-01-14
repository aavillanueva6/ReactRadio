import React, { useEffect } from 'react';
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

const InvalidPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PageMetadata: PageMetadataType = {
    title: `Page Not Found`,
    meta: {
      name: {
        description: `Jazz Radio WETF | 404 page not found`,
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
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>Oops, nothing exists here :(</h1>
        </div>
        <div>
          We could not find the page you requested. You may be interested in
          learning how you can support WETF. Check the link below:
        </div>
        <Link to={`/donate`}>
          <button
            className={`btn btn-primary rounded-pill mx-auto`}
            type='button'
          >
            Support WETF
          </button>
        </Link>
        <div>
          You can also head back to the home page by the button below this.
        </div>
        <Link to={`/`}>
          <button
            className={`btn btn-primary rounded-pill mx-auto`}
            type='button'
          >
            WETF Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default InvalidPage;
