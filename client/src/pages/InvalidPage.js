import React from 'react';
import { Link } from 'react-router-dom';

const InvalidPage = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center">
          <h1 className="display-4">Oops, nothing exists here :(</h1>
        </div>
        <div>
          We could not find the page you requested. You may be interested in
          learning how you can support WETF. Check the link below:
        </div>
        <Link to={`/donate`}>
          <button
            className={`btn btn-primary rounded-pill mx-auto`}
            type="button"
          >
            Support WETF
          </button>
        </Link>
        <div>
          You can also head back to the home page by the button below this.
        </div>
        <Link to={`/`}>
          <button
            className={`btn btn-primary rounded-pill mx-auto`}
            type="button"
          >
            WETF Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default InvalidPage;
