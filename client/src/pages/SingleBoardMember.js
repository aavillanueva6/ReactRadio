import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_BOARD_MEMBER } from '../utils/queries';
import { useParams, Link } from 'react-router-dom';

const textOutline = {
  color: '#fff',
  textShadow: `1px 1px 0 #000,
    -1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000`,
};

const SingleBoardMember = () => {
  const { bmUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_BOARD_MEMBER, {
    variables: { url: bmUrl },
  });
  const boardMember = data?.singleBM || {};
  console.log(bmUrl);

  useEffect(() => {
    document.title = `WETF 105.7 - ${boardMember.firstName} ${boardMember.lastName}`;
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className='container '>
        <div className='row row-cols-1 row-cols-lg-3 justify-content-center g-4 pt-5 bg-secondary'>
          <div className='d-flex col justify-content-center'>
            <img
              className='bd-placeholder-img rounded-circle card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg'
              width='400'
              src={boardMember.image}
              aria-label='Placeholder'
              preserveAspectRatio='xMidYMid slice'
              focusable='false'
            />
          </div>
        </div>
        <div className='row row-cols-1 row-cols-lg-3 justify-content-center g-4 py-0 bg-secondary'>
          <div className='d-flex flex-column h-100 pb-5 pt-0  text-white text-shadow-1'>
            <h3
              className='pt-0 mt-0 mb-0 display-5 lh-1 fw-bold'
              style={textOutline}
            >
              {boardMember.firstName} {boardMember.lastName}
            </h3>
            <h4 className='pt-0 mt-0 mb-4 display-6 lh-1' style={textOutline}>
              {boardMember.nickName ? (
                <>
                  {boardMember.nickName} - {boardMember.Title}
                </>
              ) : (
                <>{boardMember.Title}</>
              )}
            </h4>
            {boardMember.bio &&
              boardMember.bio.map((paragraph, i) => {
                return <p key={i}>{paragraph}</p>;
              })}
          </div>
        </div>
      </div>
      {/* {to do: add links to DJ social media (fb, twitter, insta, etc.)} */}
    </>
  );
};

export default SingleBoardMember;
