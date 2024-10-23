import React from 'react';
import { Link } from 'react-router-dom';

const ShowCardShort = ({ show }) => {
  return (
    <div className="col-5 mx-auto px-0 card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/shows/${show.url}`}>
            <img
              src={show.image}
              className="img-fluid rounded-start"
              alt={`${show.name} image`}
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link
              className=" link-dark link-underline-opacity-0"
              to={`/shows/${show.url}`}
            >
              <h5 className="card-title">{show.name}</h5>
            </Link>
            <div className="mb-1"></div>
            <p className="text-dark">
              Hosted by{' '}
              <Link
                className="link-dark link-underline-opacity-0"
                to={`/djs/${show.host.url}`}
              >
                {show.host.nickName}
              </Link>
            </p>

            <p className="card-text">{show.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCardShort;
