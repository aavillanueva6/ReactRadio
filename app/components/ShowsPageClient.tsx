'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOWS } from '@/app/lib/queries';
import ShowCardShort from '@/app/components/ShowCardShort';
import PHShowCardShort from '@/app/components/PHShowCardShort';

interface ShowsType {
  image: string;
  name: string;
  shortDescription: string;
  url: string;
  _id: string;
  host: Array<{
    fullName: string;
    nickName: string;
    url: string;
  }>;
}

const ShowsPageClient: React.FC = () => {
  const { loading, data } = useQuery(QUERY_SHOWS);
  const shows: ShowsType[] = data?.shows || [];

  return (
    <>
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
    </>
  );
};

export default ShowsPageClient;
