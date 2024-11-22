import React, { useEffect } from 'react';

const homeData = require('../utils/data/homeData.json');

const Home = () => {
  useEffect(() => {
    document.title = 'WETF 105.7 - The Jazz Station';
  }, []);

  return (
    <>
      <img
        className="img-fluid mx-auto d-block mt-4"
        alt="WETF letters in lights in front of a moody cityscape"
        src={homeData.bannerImgSrc}
      ></img>
      <div className="container my-0">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">About WETF</h1>
          <p className="lead">{homeData.lead}</p>
          {homeData.body.map((paragraph, i) => (
            <p key={`about-paragraph-${i}`} className="">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
