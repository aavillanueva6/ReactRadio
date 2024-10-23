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
            <div className="col-3">
              {show.startTime12}-{show.endTime12}
            </div>
            <div className="col-9">
              <Link style={linkStyle} to={`/shows/${show.show.url}`}>
                <div className="text-dark">{show.show.name}</div>
              </Link>
              <Link style={linkStyle} to={`/djs/${show.show.host.url}`}>
                <p className="text-secondary">{show.show.host.nickName}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleShowCard;
