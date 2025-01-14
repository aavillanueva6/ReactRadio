import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { QUERY_SHOW_NAMES_URLS, QUERY_SINGLE_SHOW } from '../utils/queries';

interface PageMetadataType {
  title: string;
  meta: {
    name: {
      description: string;
      keywords: string;
      author: string;
      viewport: string;
    };
    property: {
      ogLocale: string;
      ogType: string;
      ogTitle: string;
      ogDescription: string;
    };
  };
}

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

const SingleShow: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const PageMetadata: PageMetadataType = {
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
        ogTitle: '',
        ogDescription: '',
      },
    },
  };
  PageMetadata.meta.property.ogTitle = PageMetadata.title;
  PageMetadata.meta.property.ogDescription = PageMetadata.meta.name.description;

  return (
    <>
      <Helmet>
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
      </Helmet>
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
                          <Link
                            className=' link-dark link-underline-opacity-0'
                            to={`/contributors/${host.url}`}
                          >
                            {host.fullName}
                          </Link>
                        ) : (
                          <>
                            <span>, </span>
                            <Link
                              className=' link-dark link-underline-opacity-0'
                              to={`/contributors/${host.url}`}
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
        </div>
      </div>
    </>
  );
};

export default SingleShow;
