import React from 'react';

const PHDJCard = ({ dj }) => {
  return (
    <div className="mx-auto col text-center placeholder-glow">
      <img
        className="placeholder rounded-circle mx-auto"
        width="140"
        height="140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div className="h2 fw-normal ">
        <span className="placeholder  w-100"></span>
      </div>
      <div className="lead">
        {' '}
        <span className="placeholder bg-secondary  w-100"></span>
      </div>

      <p>
        <span className="placeholder bg-secondary  w-100"></span>
      </p>
      <div
        tabindex="-1"
        class="btn btn-secondary disabled placeholder col-6 mb-3"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default PHDJCard;
