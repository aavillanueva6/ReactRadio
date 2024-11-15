import React from 'react';

const placeholderCards = [0, 1, 2, 3, 4, 5, 6, 7];

const PHShowCardShort = () => {
  return placeholderCards.map((e, i) => {
    return (
      <div
        key={`show-card-placeholder-${i}`}
        className="col-5 mx-auto px-0 card mb-3"
        style={{ maxWidth: '540px' }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <svg
              width="100%"
              height="50%"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          </div>
          <div className="col-md-8">
            <div className="card-body placeholder-glow">
              <h5 className="card-title placeholder">Placeholder Show Name</h5>
              <div className="mb-1"></div>
              <p className="text-dark">
                <span className="placeholder">Hosted by</span>
                <span> </span>
                <span className="placeholder">Show Host</span>
              </p>
              <p className="card-text placeholder">
                This is a two sentence bit of text to use as a placeholder while
                loading data. There is nothing to see here.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PHShowCardShort;
