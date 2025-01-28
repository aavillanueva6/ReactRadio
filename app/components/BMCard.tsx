import React from 'react';
import Link from 'next/link';

interface BoardMember {
  Title: string;
  firstName: string;
  fullName: string;
  image: string;
  lastName: string;
  nickName: string;
  sqImage: string;
  url: string;
  _id: string;
  shortBio: string;
}

const BMCard = ({ bm }: { bm: BoardMember }) => {
  let bmImageSrc: string = '';
  if (bm.image !== '') {
    bmImageSrc = bm.image;
  } else {
    bmImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }
  let bmSqImageSrc: string = '';
  if (bm.sqImage !== '') {
    bmSqImageSrc = bm.sqImage;
  } else {
    bmSqImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }

  return (
    <div key={bm._id} className='mx-auto col text-center'>
      <div
        className='rounded-circle mx-auto'
        style={{
          backgroundImage: `url('${bmSqImageSrc}')`,
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
          src={bmImageSrc}
          aria-label={`${bm.nickName} portrait`}
          style={{ opacity: 0.0 }}
          loading='lazy'
        />
      </div>
      <div className='h2 fw-normal '>
        {bm.firstName} {bm.lastName}
      </div>
      <div className='lead'>{bm.nickName}</div>
      <p className='mb-0 text-start'>{bm.shortBio}</p>
      <p>
        <Link href={`/board/${bm.url}`} className='btn btn-secondary'>
          View profile »
        </Link>
      </p>
    </div>
  );
};

export default BMCard;
