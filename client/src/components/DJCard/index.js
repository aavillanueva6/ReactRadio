import React from 'react';
import { Link } from 'react-router-dom';

const DJCard = ({ dj }) => {
  return (
    <div key={dj._id} className="col-md-4">
      <img
        className="bd-placeholder-img rounded-circle"
        width="140"
        height="140"
        src={dj.image}
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <h2 className="fw-normal">
        {dj.firstName} {dj.lastName}
      </h2>
      <p className="lead">{dj.nickName}</p>

      {dj.Shows && dj.Shows.map((show) => <p key={show.name}>{show.name}</p>)}
      <p>
        <Link to={`/djs/${dj._id}`} className="btn btn-secondary">
          View profile »
        </Link>
      </p>
    </div>
  );
};

export default DJCard;
