import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_DJ } from '../utils/queries';
import { useParams } from 'react-router-dom';

const textOutline = {
  color: '#fff',
  textShadow: `1px 1px 0 #000,
    -1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000`,
};

const SingleDJ = () => {
  const { djUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_DJ, {
    variables: { url: djUrl },
  });
  const dj = data?.singleDJ || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-lg-3 justify-content-center g-4 pt-5 bg-secondary">
        <div className="d-flex col justify-content-center">
          <img
            className="bd-placeholder-img rounded-circle card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg"
            width="400"
            src={dj.image}
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 justify-content-center g-4 py-0 bg-secondary">
        <div className="d-flex flex-column h-100 pb-5 pt-0  text-white text-shadow-1">
          <h3
            className="pt-0 mt-0 mb-0 display-5 lh-1 fw-bold"
            style={textOutline}
          >
            {dj.firstName} {dj.lastName}
          </h3>
          <h4 className="pt-0 mt-0 mb-4 display-6 lh-1" style={textOutline}>
            {dj.nickName} - {dj.Title}
          </h4>
          {dj.bio &&
            dj.bio.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
        </div>
      </div>
    </>
  );
};

export default SingleDJ;
