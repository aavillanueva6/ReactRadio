import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_DJs } from '../utils/queries';
import DJCard from '../components/DJCard';
import PHDJCard from '../components/PHDJCard';

const DJs = () => {
  const { loading, data } = useQuery(QUERY_DJs);
  const djs = data?.djs || [];

  const phDJs = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="container">
        <div className="p-5 text-center">
          <h1 className="display-4">WETF DJs</h1>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
          {loading
            ? phDJs.map((e, i) => (
                <PHDJCard
                  aria-hidden="true"
                  dj={e}
                  key={`placeholder-dj-card-${e}`}
                />
              ))
            : djs.map((dj) => <DJCard key={dj._id} dj={dj} />)}
        </div>
      </div>
    </>
  );
};

export default DJs;
