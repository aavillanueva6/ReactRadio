import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = { textDecoration: 'none', color: 'inherit' };

const DJCard = ({ dj }) => {
  return (
    <div key={dj._id} className="mx-auto col-sm-4 text-center">
      <img
        className="rounded-circle mx-auto"
        width="140"
        height="140"
        src={dj.image}
        role="img"
        aria-label={`${dj.nickName} portrait`}
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div className="h2 fw-normal ">
        {dj.firstName} {dj.lastName}
      </div>
      <div className="lead">{dj.nickName}</div>

      {dj.Shows &&
        dj.Shows.map((show) => (
          <Link style={linkStyle} key={show.name} to={`/shows/${show.url}`}>
            <div>
              {show.name}
              {console.log(show)}
            </div>
          </Link>
        ))}
      <p>
        <Link to={`/djs/${dj.url}`} className="btn btn-secondary">
          View profile »
        </Link>
      </p>
    </div>
  );
};

export default DJCard;
