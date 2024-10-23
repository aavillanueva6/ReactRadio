import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const InvalidPage = () => {
  return (
    <>
      <div>
        Oops! We could not find the page you requested. You may be interested in
        learning how you can support WETF. Check the link below{' '}
      </div>
      <Link to={`/donate`}>
        <button
          className={`btn btn-primary rounded-pill mx-auto`}
          type="button"
        >
          Support WETF
        </button>
      </Link>
    </>
  );
};

export default InvalidPage;
