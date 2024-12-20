import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOWS } from '../utils/queries';
import ShowCardShort from '../components/ShowCardShort';
import PHShowCardShort from '../components/PHShowCardShort';

const Shows = () => {
  const { loading, data } = useQuery(QUERY_SHOWS);
  const shows = data?.shows || [];

  useEffect(() => {
    document.title = 'WETF 105.7 - Shows';
  }, []);

  return (
    <>
      <div className="container">
        <div className="p-5 text-center">
          <div className="display-4">WETF Shows</div>
        </div>
        <div className="row justify-content-center">
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
