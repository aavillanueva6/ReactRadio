import React from 'react';
import { Link } from 'react-router-dom';

const BMCard = ({ bm }) => {
  return (
    <div key={bm._id} className='mx-auto col text-center'>
      <div
        className='rounded-circle mx-auto'
        style={{
          backgroundImage: `url('${bm.image}')`,
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
          src={bm.image}
          aria-label={`${bm.nickName} portrait`}
          focusable='false'
          style={{ opacity: 0.0 }}
          loading='lazy'
        />
      </div>
      <div className='h2 fw-normal '>
        {bm.firstName} {bm.lastName}
      </div>
      <div className='lead'>{bm.nickName}</div>
      <p>
        <Link to={`/board/${bm.url}`} className='btn btn-secondary'>
          View profile »
        </Link>
      </p>
    </div>
  );
};

export default BMCard;
