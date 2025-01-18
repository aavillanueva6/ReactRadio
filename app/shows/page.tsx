import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOWS } from '../utils/queries';
import ShowCardShort from '../components/ShowCardShort';
import PHShowCardShort from '../components/PHShowCardShort';

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

const Shows: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_SHOWS);
  const shows: ShowsType[] = data?.shows || [];

  const PageMetadata: PageMetadataType = {
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
        ogTitle: '',
        ogDescription: '',
      },
    },
  };

  return (
    <>
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
