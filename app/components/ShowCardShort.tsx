import React, { Fragment } from 'react';
import Link from 'next/link';

interface Host {
  nickName: string;
  fullName: string;
  url: string;
}

interface Show {
  host: Host[];
  image: string;
  name: string;
  shortDescription: string;
  url: string;
}

const ShowCardShort: React.FC<Show> = (show) => {
  let showImageSrc: string = '';
  if (show.image) {
    showImageSrc = show.image;
  } else {
    showImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }

  return (
    <div className='col-5 mx-auto px-0 card mb-3' style={{ maxWidth: '540px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <Link href={`/shows/${show.url}`}>
            <img
              src={showImageSrc}
              className='img-fluid rounded-start'
              alt={`${show.name}`}
            />
          </Link>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <Link
              className=' link-dark link-underline-opacity-0'
              href={`/shows/${show.url}`}
            >
              <h5 className='card-title'>{show.name}</h5>
            </Link>
            <div className='mb-1'></div>
            <p className='text-dark'>
              Hosted by{' '}
              {show.host.map((host, i) =>
                i === 0 ? (
                  <Link
                    className=' link-dark link-underline-opacity-0'
                    href={`/contributors/${host.url}`}
                    key={i}
                  >
                    {host.fullName}
                  </Link>
                ) : (
                  <Fragment key={i}>
                    <span>, </span>
                    <Link
                      className=' link-dark link-underline-opacity-0'
                      href={`/contributors/${host.url}`}
                    >
                      {host.fullName}
                    </Link>
                  </Fragment>
                )
              )}
            </p>

            <p className='card-text'>{show.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCardShort;
