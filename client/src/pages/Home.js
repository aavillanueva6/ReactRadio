import React from 'react';

const aboutData = {
  lead: [
    `Founded in 2016 in South Bend, Indiana, WETF 105.7 was born out of a love for jazz and a desire to create a space for jazz enthusiasts in the Midwest. The station was the brainchild of a group of local musicians, DJs, and jazz aficionados who felt that South Bend, despite its vibrant music scene, lacked a dedicated jazz station. They envisioned WETF as a hub for jazz education, appreciation, and community connection, playing everything from classic swing to modern jazz fusion. The station quickly gained a following, offering a unique mix of programs that celebrated jazz in all its forms.`,
  ],
  body: [
    `One of the key innovations that set WETF apart from other local stations was its national reach. While rooted in South Bend, the station began curating shows from cities across the country, bringing a rich diversity of jazz traditions to its listeners. From the cool jazz of San Francisco to the Latin influences of Miami, and the bebop beats of Boston to the progressive sounds of Seattle, WETF became a platform for jazz voices and styles from all corners of the U.S. This collaboration with DJs and jazz experts from various regions helped the station grow quickly, offering a fresh and ever-evolving playlist that appealed to a broad audience.`,
    `As a result of this national collaboration, WETF has developed a programming schedule that reflects the full spectrum of jazz culture in America. Shows like "Bebop Bistro" from Seattle, "Blue Note Lounge" from Boston, and "Swingin' Sundays" from Miami provide listeners with a journey through the diverse landscapes of jazz. Each show, whether locally produced or contributed by out-of-state DJs, brings its own unique flavor, making WETF not only a local station but a national voice in jazz broadcasting.`,
    `Now, nearly a decade after its founding, WETF 105.7 has established itself as a leading jazz radio station in the Midwest and beyond. Its commitment to showcasing both classic jazz and emerging talents, combined with its innovative national partnerships, has earned it a dedicated listenership. With a growing presence online and through community events, the station continues to evolve, connecting new generations to the rich legacy of jazz while keeping the genre alive and thriving.`,
  ],
};

const bannerImgSrc =
  'https://aav-react-radio.s3.us-west-2.amazonaws.com/WETFBannerLightsCity.png';

const Home = () => {
  return (
    <>
      <img
        className="img-fluid mx-auto d-block mt-5"
        alt="WETF letters in lights in front of a moody cityscape"
        src={bannerImgSrc}
      ></img>
      <div className="container my-0">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">About WETF</h1>
          <p className="lead">{aboutData.lead}</p>
          {aboutData.body.map((paragraph, i) => (
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
