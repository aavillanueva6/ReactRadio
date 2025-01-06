import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_BOARD_MEMBER } from '../utils/queries';
import { useParams, Link } from 'react-router-dom';

const textOutline = {
  color: '#fff',
  textShadow: `1px 1px 0 #000,
    -1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000`,
};

const SingleBoardMember = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { bmUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_BOARD_MEMBER, {
    variables: { url: bmUrl },
  });
  const boardMember = data?.singleBM || {};
  console.log(bmUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  const PageMetadata = {
    title: `WETF 105.7 - ${boardMember.firstName} ${boardMember.lastName}`,
    meta: {
      name: {
        description: `Jazz Radio WETF Board Member, ${boardMember.firstName} ${boardMember.lastName}`,
        keywords: `WETF, Jazz, ${boardMember.firstName} ${boardMember.lastName}`,
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
              src={boardMember.image}
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
              {boardMember.firstName} {boardMember.lastName}
            </h3>
            <h4 className='pt-0 mt-0 mb-4 display-6 lh-1' style={textOutline}>
              {boardMember.nickName ? (
                <>
                  {boardMember.nickName} - {boardMember.Title}
                </>
              ) : (
                <>{boardMember.Title}</>
              )}
            </h4>
            {boardMember.bio &&
              boardMember.bio.map((paragraph, i) => {
                return <p key={i}>{paragraph}</p>;
              })}
          </div>
        </div>
      </div>
      {/* {to do: add links to DJ social media (fb, twitter, insta, etc.)} */}
    </>
  );
};

export default SingleBoardMember;
