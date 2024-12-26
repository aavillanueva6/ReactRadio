import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_BOARD } from '../utils/queries';
import BMCard from '../components/BMCard';
import PHDJCard from '../components/PHDJCard';

const BoardMembers = () => {
  const { loading, data } = useQuery(QUERY_BOARD);
  const boardMembers = data?.boardMembers || [];

  const phDJs = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    document.title = 'WETF 105.7 - Board';
  }, []);

  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Board Members</h1>
        </div>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          {loading
            ? phDJs.map((e, i) => (
                <PHDJCard
                  aria-hidden='true'
                  dj={e}
                  key={`placeholder-dj-card-${e}`}
                />
              ))
            : boardMembers.map((member) => (
                <BMCard key={member._id} bm={member} />
              ))}
        </div>
      </div>
    </>
  );
};

export default BoardMembers;
