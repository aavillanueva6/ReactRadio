import React from 'react';
import { useQuery } from '@apollo/client';
import { Metadata } from 'next';

// import { QUERY_BOARD } from '../utils/queries';
import BMCard from '../components/BMCard';
import PHDJCard from '../components/PHDJCard';

interface PageMetadataType {
  title: string;
  description: string;
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

const pageMetaData: PageMetadataType = {
  title: 'Board',
  description: `Jazz Radio WETF Board Members.`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const BoardMembers: React.FC = () => {
  // const { loading, data } = useQuery(QUERY_BOARD);
  // let boardMembers: BoardMemberType[] = data?.boardMembers || [];

  // const phDJs: number[] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Board Members</h1>
        </div>
        {/* <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          {loading
            ? phDJs.map((e: number) => (
                <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
              ))
            : boardMembers.map((member: BoardMemberType) => (
                <BMCard key={member._id} bm={member} />
              ))}
        </div> */}
      </div>
    </>
  );
};

export default BoardMembers;
