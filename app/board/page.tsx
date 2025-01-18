import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_BOARD } from '../utils/queries';
import BMCard from '../components/BMCard';
import PHDJCard from '../components/PHDJCard';

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

interface BoardMemberType {
  Title: string;
  firstName: string;
  fullName: string;
  image: string;
  lastName: string;
  nickName: string;
  sqImage: string;
  url: string;
  _id: string;
}

const BoardMembers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_BOARD);
  let boardMembers: BoardMemberType[] = data?.boardMembers || [];

  const phDJs: number[] = [0, 1, 2, 3, 4, 5, 6];

  const PageMetadata: PageMetadataType = {
    title: `WETF 105.7 - Board`,
    meta: {
      name: {
        description: `Jazz Radio WETF Board Members`,
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
          <h1 className='display-4'>WETF Board Members</h1>
        </div>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          {loading
            ? phDJs.map((e: number) => (
                <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
              ))
            : boardMembers.map((member: BoardMemberType) => (
                <BMCard key={member._id} bm={member} />
              ))}
        </div>
      </div>
    </>
  );
};

export default BoardMembers;
