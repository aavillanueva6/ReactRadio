import React from 'react';
import Link from 'next/link';

interface Shows {
  name: string;
  url: string;
}
interface DeeJay {
  Shows: Shows[];
  Title: string;
  firstName: string;
  image: string;
  lastName: string;
  nickName: string;
  sqImage: string;
  url: string;
  _id: string;
  bio: string[];
}

const DJCard = ({ dj }: { dj: DeeJay }) => {
  let djImageSrc: string = '';
  if (dj.image !== '') {
    djImageSrc = dj.image;
  } else {
    djImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }
  let djSqImageSrc: string = '';
  if (dj.sqImage !== '') {
    djSqImageSrc = dj.sqImage;
  } else {
    djSqImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }

  return (
    <div key={dj._id} className='mx-auto col text-center'>
      <div
        className='rounded-circle mx-auto'
        style={{
          backgroundImage: `url('${djSqImageSrc}')`,
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
          style={{ opacity: 0.0 }}
          loading='lazy'
        />
      </div>
      <div className='h2 fw-normal '>
        {dj.firstName} {dj.lastName}
      </div>
      <div className='lead'>{dj.nickName}</div>
      {dj.Shows &&
        dj.Shows.map((show: Shows) => (
          <Link
            className='text-decoration-none text-dark'
            key={show.name}
            href={`/shows/${show.url}`}
          >
            <div>{show.name}</div>
          </Link>
        ))}
      <p className='mb-0 text-start'>
        {dj.bio.map((paragraph: string, i) => {
          return <span key={i}>{paragraph} </span>;
        })}
      </p>
      <p>
        <Link href={`/hosts/${dj.url}`} className='btn btn-secondary'>
          View profile »
        </Link>
      </p>
    </div>
  );
};

export default DJCard;
