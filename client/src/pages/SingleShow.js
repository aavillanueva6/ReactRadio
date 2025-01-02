import React from 'react';
import MetaTags from 'react-meta-tags';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { QUERY_SHOW_NAMES_URLS, QUERY_SINGLE_SHOW } from '../utils/queries';

const SingleShow = () => {
  const { showUrl } = useParams();
  const { loading: q1Loading, data: q1Data } = useQuery(QUERY_SINGLE_SHOW, {
    variables: { url: showUrl },
  });
  const show = q1Data?.singleShow || {};
  const { loading: q2Loading, data: q2Data } = useQuery(QUERY_SHOW_NAMES_URLS, {
    variables: { url: showUrl },
  });
  let shows = q2Data?.shows || [];
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

  const hostCount = show.host.length;
  console.log(hostCount);

  let showImageSrc = '';
  if (show.image) {
    showImageSrc = show.image;
  } else {
    showImageSrc =
      'https://aav-myawsbucket.s3.us-west-2.amazonaws.com/WETF-Prod/member-images/WETF_placeholder.svg';
  }

  const PageMetadata = {
    title: `WETF 105.7 - ${show.name}`,
    meta: {
      name: {
        description: `Jazz Radio WETF show ${show.name}`,
        keywords: `WETF, Jazz, ${show.name}`,
        author: `Alejandro Villanueva`,
        viewport: `width=device-width, initial-scale=1.0`,
      },
      property: {
        ogLocale: `en_US`,
        ogType: `website`,
      },
    },
  };
  PageMetadata.meta.property.ogTitle = PageMetadata.title;
  PageMetadata.meta.property.ogDescription = PageMetadata.meta.name.description;

  return (
    <>
      <MetaTags>
        <title>{PageMetadata.title}</title>
        <meta name='description' content={PageMetadata.meta.name.description} />
        <meta name='keywords' content={PageMetadata.meta.name.keywords} />
        <meta name='author' content={PageMetadata.meta.name.author} />
        <meta name='viewport' content={PageMetadata.meta.name.viewport} />
        <meta
          property='og:title'
          content={PageMetadata.meta.property.ogTitle}
        />
        <meta
          property='og:locale'
          content={PageMetadata.meta.property.ogLocale}
        />
        <meta property='og:type' content={PageMetadata.meta.property.ogType} />
        <meta
          property='og:description'
          content={PageMetadata.meta.property.ogDescription}
        />
      </MetaTags>
      {console.log(show)}
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
                      {show.host.map((host, i, arr) =>
                        i === 0 ? (
                          <Link
                            className=' link-dark link-underline-opacity-0'
                            to={`/djs/${host.url}`}
                          >
                            {host.fullName}
                          </Link>
                        ) : (
                          <>
                            <span>, </span>
                            <Link
                              className=' link-dark link-underline-opacity-0'
                              to={`/djs/${host.url}`}
                            >
                              {host.fullName}
                            </Link>
                          </>
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
                    <Link className='dropdown-item' to={`/shows/${show.url}`}>
                      {show.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* todo: add dropdown menu to select a different show */}
        </div>
      </div>
    </>
  );
};

export default SingleShow;
