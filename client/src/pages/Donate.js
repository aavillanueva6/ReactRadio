import React from 'react';

const donateData = require('../utils/data/donateData.json');

const Donate = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <div className="text-center p-5">
          <h1 className="display-4">Support Independent Radio</h1>
        </div>
        {donateData.infoText.map((paragraph, i) => {
          return (
            <p className="text-body-secondary" key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {donateData.donationLevel.map((level, i) => {
            return (
              <div key={level.levelName} className="col">
                <div className={level.levelTheme.card}>
                  <div className={level.levelTheme.cardHeader}>
                    <h4 className="my-0 fw-normal">{level.levelName}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {level.levelCost}
                      <small className="text-body-secondary fw-light">
                        /mo
                      </small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      {level.levelBenefit.map((benefit, j) => {
                        return (
                          <li key={`${level.levelName}-benefit-${j}`}>
                            {benefit}
                          </li>
                        );
                      })}
                    </ul>
                    <button type="button" className={level.levelTheme.button}>
                      Pledge Today
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Donate;
