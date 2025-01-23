'use client';

import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { QUERY_SHOW_NAMES_URLS, QUERY_SINGLE_SHOW } from '@/app/lib/queries';

interface ShowType {
  image: string;
  longDescription: string[];
  name: string;
  _id: string;
  host: Array<{
    fullName: string;
    nickName: string;
    url: string;
  }>;
  schedule: Array<{
    day: string;
    endTime12: string;
    startTime12: string;
  }>;
}

interface ShortShowType {
  name: string;
  url: string;
  _id: string;
}

const SingleShowPageClient: React.FC = () => {
  const { showUrl } = useParams();
  const { loading: q1Loading, data: q1Data } = useQuery(QUERY_SINGLE_SHOW, {
    variables: { url: showUrl },
  });
  const show: ShowType = q1Data?.singleShow || {};
  const { data: q2Data } = useQuery(QUERY_SHOW_NAMES_URLS, {
    variables: { url: showUrl },
  });
  let shows: ShortShowType[] = q2Data?.shows || [];
  shows = shows.filter((e) => e.name !== show.name);

  shows = shows.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  if (q1Loading) {
    return <div>loading...</div>;
  }

  let showImageSrc: string = '';
  if (show.image) {
    showImageSrc = show.image;
  } else {
    showImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }

  return (
    <>
      <div className='container  p-5 justify-content-center '>
        <div className='row'>
          <div className='card mb-3 col-md-8 ps-0'>
            <div className='row g-0'>
              <div className='col-md-4'>
                <img
                  src={showImageSrc}
                  className='img-fluid rounded-start'
                  alt='showCard'
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title'>{show.name}</h5>
                  <div className='mb-1'>
                    <h6 className='card-text text-dark'>
                      Hosted by:{' '}
                      {show.host.map((host, i: number) =>
                        i === 0 ? (
                          <Fragment key={host.url}>
                            <Link
                              className=' link-dark link-underline-opacity-0'
                              href={`/contributors/${host.url}`}
                            >
                              {host.fullName}
                            </Link>
                          </Fragment>
                        ) : (
                          <Fragment key={host.url}>
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
                    </h6>
                  </div>
                  {show.longDescription &&
                    show.longDescription.map((paragraph, i) => (
                      <p
                        className='card-text'
                        key={`description paragraph-${i}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  <div className='lead'>
                    Listen to <span className='fw-bolder'>{show.name}</span>{' '}
                    live:
                  </div>
                  {show.schedule.map((airing, i) => (
                    <p key={`airing-${i}`} className='my-2'>
                      {airing.day}s {airing.startTime12} to {airing.endTime12}
                    </p>
                  ))}
                  <div className='mt-3 fs-6 fst-italic'>
                    All times are listed in the Eastern time zone (EST/EDT)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Explore Other <span className='fw-bolder'>Shows</span>
              </button>
              <ul className='dropdown-menu'>
                {shows.map((show, i) => (
                  <li key={`${show.url}-list-item-${i}`}>
                    <Link className='dropdown-item' href={`/shows/${show.url}`}>
                      {show.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleShowPageClient;
