import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = { textDecoration: 'none', color: 'inherit' };

const ScheduleShowCard = ({ show }) => {
  console.log(show);
  return (
    <>
      <div className="col-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {show.startTime12} - {show.endTime12}
            </div>
            <div className="col-md-9">
              <Link style={linkStyle} to={`/shows/${show.show.url}`}>
                <div className="w-auto text-dark">{show.show.name}</div>
              </Link>
              <Link
                className="me-auto w-auto"
                style={linkStyle}
                to={`/djs/${show.show.host.url}`}
              >
                <p className="w-auto text-secondary">
                  {show.show.host.nickName}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleShowCard;
