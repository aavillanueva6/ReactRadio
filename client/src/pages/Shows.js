import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { QUERY_SHOWS } from '../utils/queries';
import ShowCardShort from '../components/ShowCardShort';
import PHShowCardShort from '../components/PHShowCardShort';

const Shows = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_SHOWS);
  const shows = data?.shows || [];

  const PageMetadata = {
    title: `WETF 105.7 - Shows`,
    meta: {
      name: {
        description: `Jazz Radio WETF programs`,
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
      {console.log(shows)}
      <div className='container'>
        <div className='p-5 text-center'>
          <div className='display-4'>WETF Shows</div>
        </div>
        <div className='row justify-content-center'>
          {loading ? (
            <>
              <PHShowCardShort />
            </>
          ) : (
            <>
              {shows.map((show) => {
                return <ShowCardShort key={show._id} show={show} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shows;
