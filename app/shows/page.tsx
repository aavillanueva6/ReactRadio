import React from 'react';
import { useQuery } from '@apollo/client';
// import { QUERY_SHOWS } from '../utils/queries';
// import ShowCardShort from '../components/ShowCardShort';
// import PHShowCardShort from '../components/PHShowCardShort';
import { Metadata } from 'next';

interface PageMetadataType {
  title: string;
  description: string;
}

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

const pageMetaData: PageMetadataType = {
  title: 'Shows',
  description: `Jazz Radio WETF programs.`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const Shows: React.FC = () => {
  // const { loading, data } = useQuery(QUERY_SHOWS);
  // const shows: ShowsType[] = data?.shows || [];

  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <div className='display-4'>WETF Shows</div>
        </div>
        {/* <div className='row justify-content-center'>
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
        </div> */}
      </div>
    </>
  );
};

export default Shows;
