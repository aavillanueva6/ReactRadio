import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOWS } from '../utils/queries';
import ShowCardShort from '../components/ShowCardShort';

const Shows = () => {
  const { loading, data } = useQuery(QUERY_SHOWS);
  const shows = data?.shows || [];

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="container">
        {shows.map((show, i) => {
          return <ShowCardShort key={i} show={show} />;
        })}
      </div>
    </>
  );
};

export default Shows;
