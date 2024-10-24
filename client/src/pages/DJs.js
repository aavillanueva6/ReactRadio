import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_DJs } from '../utils/queries';
import DJCard from '../components/DJCard';

const DJs = () => {
  const { loading, data } = useQuery(QUERY_DJs);
  const djs = data?.djs || [];
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="p-5 text-center">
          <h1 className="display-4">WETF DJs</h1>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
          {djs.map((dj) => (
            <DJCard key={dj._id} dj={dj} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DJs;
