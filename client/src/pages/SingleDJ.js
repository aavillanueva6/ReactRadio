import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_DJ } from '../utils/queries';
import { useParams, Link } from 'react-router-dom';

const textOutline = {
  color: '#fff',
  textShadow: `1px 1px 0 #000,
    -1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000`,
};

const SingleDJ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { djUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_DJ, {
    variables: { url: djUrl },
  });
  const dj = data?.singleDJ || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const PageMetadata = {
    title: `WETF 105.7 - ${dj.firstName} ${dj.lastName}`,
    meta: {
      name: {
        description: `Jazz Radio WETF contributor, ${dj.firstName} ${dj.lastName}`,
        keywords: `WETF, Jazz, ${dj.firstName} ${dj.lastName}`,
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
      <div className='container '>
        <div className='row row-cols-1 row-cols-lg-3 justify-content-center g-4 pt-5 bg-secondary'>
          <div className='d-flex col justify-content-center'>
            <img
              className='bd-placeholder-img rounded-circle card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg'
              width='400'
              src={dj.image}
              aria-label='Placeholder'
              preserveAspectRatio='xMidYMid slice'
              focusable='false'
            />
          </div>
        </div>
        <div className='row row-cols-1 row-cols-lg-3 justify-content-center g-4 py-0 bg-secondary'>
          <div className='d-flex flex-column h-100 pb-5 pt-0  text-white text-shadow-1'>
            <h3
              className='pt-0 mt-0 mb-0 display-5 lh-1 fw-bold'
              style={textOutline}
            >
              {dj.firstName} {dj.lastName}
            </h3>
            <h4 className='pt-0 mt-0 mb-4 display-6 lh-1' style={textOutline}>
              {dj.nickName ? (
                <>
                  {dj.Title} - {dj.nickName}
                </>
              ) : (
                <>{dj.Title}</>
              )}
            </h4>
            {dj.bio &&
              dj.bio.map((paragraph, i) => {
                return <p key={i}>{paragraph}</p>;
              })}

            {dj.Shows[0] ? (
              <>
                <p className='lead'>
                  Listen to {dj.nickName ? dj.nickName : dj.firstName} on:
                </p>
                {console.log(dj.fullName)}
                <div className='container'>
                  <div className='row justify-content-center'>
                    {dj.Shows &&
                      dj.Shows.map((Show) => {
                        return (
                          <Link
                            to={`/shows/${Show.url}`}
                            key={Show._id}
                            className='btn btn-dark mb-2 col-5 mx-2'
                          >
                            {Show.name}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* {to do: add links to DJ social media (fb, twitter, insta, etc.)} */}
    </>
  );
};

export default SingleDJ;
