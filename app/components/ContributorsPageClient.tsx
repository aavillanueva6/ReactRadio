'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DJs } from '@/app/lib/queries';
import DJCard from '@/app/components/DJCard';
import PHDJCard from '@/app/components/PHDJCard';

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

const ContributorsPageClient: React.FC = () => {
  const { loading, data } = useQuery(QUERY_DJs);
  const djs: DJsType[] = data?.djs || [];

  const phDJs = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
        {loading
          ? phDJs.map((e: number) => (
              <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
            ))
          : djs.map((dj: DJsType) => <DJCard key={dj._id} dj={dj} />)}
      </div>
    </>
  );
};
export default ContributorsPageClient;
