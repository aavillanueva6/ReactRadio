import React from 'react';
import { useQuery } from '@apollo/client';
import { Metadata } from 'next';

// import { QUERY_DJs } from '../utils/queries';
// import DJCard from '../components/DJCard';
// import PHDJCard from '../components/PHDJCard';

interface PageMetadataType {
  title: string;
  description: string;
}

interface ShowsType {
  name: string;
  url: string;
}

interface DJsType {
  Shows: ShowsType[];
  Title: string;
  firstName: string;
  image: string;
  lastName: string;
  nickName: string;
  sqImage: string;
  url: string;
  _id: string;
}

const pageMetaData: PageMetadataType = {
  title: 'Contributors',
  description: 'Jazz Radio WETF Contributors.',
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const DJs: React.FC = () => {
  // const { loading, data } = useQuery(QUERY_DJs);
  // const djs: DJsType[] = data?.djs || [];

  // const phDJs = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Contributors</h1>
        </div>
        {/* <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          {loading
            ? phDJs.map((e: number) => (
                <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
              ))
            : djs.map((dj: DJsType) => <DJCard key={dj._id} dj={dj} />)}
        </div> */}
      </div>
    </>
  );
};

export default DJs;
