import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOWS } from '../utils/queries';
import ShowCardShort from '../components/ShowCardShort';
import PHShowCardShort from '../components/PHShowCardShort';

const Shows = () => {
  const { loading, data } = useQuery(QUERY_SHOWS);
  const shows = data?.shows || [];

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
              {shows.map((show, i) => {
                return <ShowCardShort key={i} show={show} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shows;
