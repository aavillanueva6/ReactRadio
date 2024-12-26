import React from 'react';
import { Link } from 'react-router-dom';

const DJCard = ({ dj }) => {
  let djImageSrc = '';
  if (dj.image != '') {
    djImageSrc = dj.image;
  } else {
    djImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }

  return (
    <div key={dj._id} className='mx-auto col text-center'>
      <div
        className='rounded-circle mx-auto'
        style={{
          backgroundImage: `url('${djImageSrc}')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 140px',
          width: '140px',
          height: '140px',
        }}
      >
        <img
          className='rounded-circle mx-auto'
          width='140'
          height='140'
          src={djImageSrc}
          aria-label={`${dj.nickName} portrait`}
          focusable='false'
          style={{ opacity: 0.0 }}
        />
      </div>
      <div className='h2 fw-normal '>
        {dj.firstName} {dj.lastName}
      </div>
      <div className='lead'>{dj.nickName}</div>

      {dj.Shows &&
        dj.Shows.map((show) => (
          <Link
            className='text-decoration-none text-dark'
            key={show.name}
            to={`/shows/${show.url}`}
          >
            <div>{show.name}</div>
          </Link>
        ))}
      <p>
        <Link to={`/djs/${dj.url}`} className='btn btn-secondary'>
          View profile »
        </Link>
      </p>
    </div>
  );
};

export default DJCard;
