import React from 'react';
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

  return (
    <>
      <div className="container  p-5 justify-content-center ">
        <div className="row">
          <div className="card mb-3 col-md-8 ps-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={show.image}
                  className="img-fluid rounded-start"
                  alt="showCard"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{show.name}</h5>
                  <div className="mb-1">
                    <Link
                      className=" link-primary link-underline-opacity-0"
                      to={`/djs/${show.host.url}`}
                    >
                      <h6 className="card-text text-dark">
                        Hosted by {show.host.nickName}
                      </h6>
                    </Link>
                  </div>
                  {show.longDescription &&
                    show.longDescription.map((paragraph, i) => (
                      <p
                        className="card-text"
                        key={`description paragraph-${i}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  <div className="lead">
                    Listen to <span className="fw-bolder">{show.name}</span>{' '}
                    live:
                  </div>
                  {show.schedule.map((airing, i) => (
                    <p key={`airing-${i}`} className="my-2">
                      {airing.day}s {airing.startTime12} to {airing.endTime12}
                    </p>
                  ))}
                  <div className="mt-3 fs-6 fst-italic">
                    All times are listed in the Eastern time zone (EST/EDT)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore Other <span className="fw-bolder">Shows</span>
              </button>
              <ul className="dropdown-menu">
                {shows.map((show, i) => (
                  <li key={`${show.url}-list-item-${i}`}>
                    <Link className="dropdown-item" to={`/shows/${show.url}`}>
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
