import React from 'react';
import { useQuery } from '@apollo/client';

const donateData = {
  infoText: [
    'At WETF 105.7, we pride ourselves on being a truly independent voice for jazz, bringing the best music to listeners without commercial influence. As a 501(c)3 nonprofit organization, we rely on the generosity of our audience to keep the station thriving. Your donations help us maintain our high-quality programming, support our talented DJs from around the country, and ensure we can continue sharing jazz’s rich history and vibrant future with listeners near and far. Every dollar counts toward preserving the music you love and providing a platform for new and emerging artists.',
    "By contributing to WETF, you’re not only supporting the station but also becoming part of a community that values jazz and its legacy. Because we are listener-funded, your donations ensure that our programming remains free from corporate sponsorship and aligned with the heart and soul of the music. Whether it's a one-time gift or a recurring contribution, your support helps sustain this beloved station, keeping jazz alive on the airwaves for future generations. Please consider donating today and keeping WETF strong, independent, and focused on what matters most: the music.",
  ],
  donationLevel: [
    {
      levelName: 'Supporter',
      levelCost: '$5',
      levelBenefit: [
        'this is a benefit of the Supporter level',
        'this is another benefit of the Supporter level',
      ],
      levelTheme: {
        card: 'card mb-4 rounded-3 shadow-sm',
        button: 'w-100 btn btn-lg btn-outline-primary',
        cardHeader: 'card-header py-3',
      },
    },
    {
      levelName: 'Patron',
      levelCost: '$15',
      levelBenefit: [
        'this is a benefit of the Patron level',
        'this is another benefit of the Patron level',
      ],
      levelTheme: {
        card: 'card mb-4 rounded-3 shadow-sm',
        button: 'w-100 btn btn-lg btn-outline-primary',
        cardHeader: 'card-header py-3',
      },
    },
    {
      levelName: 'Benefactor',
      levelCost: '$50',
      levelBenefit: [
        'this is a benefit of the Benefactor level',
        'this is another benefit of the Benefactor level',
      ],
      levelTheme: {
        card: 'card mb-4 rounded-3 shadow-sm border-primary',
        button: 'w-100 btn btn-lg btn-primary',
        cardHeader: 'card-header py-3 text-bg-primary border-primary',
      },
    },
  ],
};

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
              <div key={`${level.levelName}-card-${i}`} className="col-3">
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
