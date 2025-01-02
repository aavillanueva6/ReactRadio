import React from 'react';
import MetaTags from 'react-meta-tags';
import { useQuery } from '@apollo/client';

import { QUERY_BOARD } from '../utils/queries';
import BMCard from '../components/BMCard';
import PHDJCard from '../components/PHDJCard';

const BoardMembers = () => {
  const { loading, data } = useQuery(QUERY_BOARD);
  const boardMembers = data?.boardMembers || [];

  const phDJs = [0, 1, 2, 3, 4, 5, 6];

  const PageMetadata = {
    meta: {
      name: {
        description: `Jazz Radio WETF Board Members`,
        keywords: `WETF, Jazz`,
        author: `Alejandro Villanueva`,
        viewport: `width=device-width, initial-scale=1.0`,
      },
      property: {
        ogTitle: `WETF 105.7 - Board`,
        ogLocale: `en_US`,
        ogType: `website`,
        ogDescription: `Jazz Radio WETF Board Members`,
      },
    },
  };

  return (
    <>
      <MetaTags>
        <title>WETF 105.7 - Board</title>
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
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Board Members</h1>
        </div>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          {loading
            ? phDJs.map((e, i) => (
                <PHDJCard
                  aria-hidden='true'
                  dj={e}
                  key={`placeholder-dj-card-${e}`}
                />
              ))
            : boardMembers.map((member) => (
                <BMCard key={member._id} bm={member} />
              ))}
        </div>
      </div>
    </>
  );
};

export default BoardMembers;
