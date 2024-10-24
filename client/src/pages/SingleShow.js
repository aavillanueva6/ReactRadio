import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { QUERY_SINGLE_SHOW } from '../utils/queries';

const SingleShow = () => {
  const { showUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_SHOW, {
    variables: { url: showUrl },
  });
  const show = data?.singleShow || {};
  console.log(show.longDescription);

  if (loading) {
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
                  alt="..."
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
                      <p className="card-text" key={i}>
                        {paragraph}
                      </p>
                    ))}
                  <div className="lead">
                    Listen to <span className="fw-bolder">{show.name}</span>{' '}
                    live:
                  </div>
                  {show.schedule.map((airing) => (
                    <p className="my-2">
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
          {/* <div className="col-md-4">hello there</div> */}
          {/* todo: add dropdown menu to select a different show */}
        </div>
      </div>
    </>
  );
};

export default SingleShow;
