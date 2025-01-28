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
  bio: string[];
}

const HostsPageClient: React.FC = () => {
  const { loading, data } = useQuery(QUERY_DJs);
  const djs: DJsType[] = data?.djs || [];
  const sortedDJs = [...djs].sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });

  const phDJs = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
        {loading
          ? phDJs.map((e: number) => (
              <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
            ))
          : sortedDJs.map((dj: DJsType) => <DJCard key={dj._id} dj={dj} />)}
      </div>
    </>
  );
};
export default HostsPageClient;
