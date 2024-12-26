import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const donateData = require('../utils/data/donateData.json');

const Donate = () => {
  useEffect(() => {
    document.title = 'WETF 105.7 - Support WETF';
  }, []);

  return (
    <>
      <div className='container mx-auto text-center'>
        <div className='text-center px-5 pt-5 pb-3'>
          <h1 className='display-4'>Support Independent Radio</h1>
        </div>
        {donateData.infoText.map((paragraph, i) => {
          return (
            <p className='text-body-secondary' key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className='container my-4'>
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center'>
          <div className='col'>
            <Link
              to={donateData.pledgeButton.url}
              className={donateData.pledgeButton.theme}
            >
              Pledge Today
            </Link>
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <span
          className={donateData.afterPledgeSection.textSection.class}
          style={donateData.afterPledgeSection.textSection.style}
        >
          {donateData.afterPledgeSection.textSection.text}
        </span>
      </div>
      <div className='container my-4'>
        <div className='row justify-content-between'>
          {donateData.afterPledgeSection.otherSupportMethods.map((method) => (
            <Fragment key={method.header.text}>
              <div className='col-sm-3'>
                <div
                  className='row text-primary text-center'
                  style={method.icon.style}
                >
                  <i className={`${method.icon.src}`} />
                </div>
                <div className='row'>
                  <span className={`${method.header.class}`}>
                    {method.header.text}
                  </span>
                </div>
                <div className='row'>
                  <span className={method.body.class} style={method.body.style}>
                    {method.body.text}
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Donate;
