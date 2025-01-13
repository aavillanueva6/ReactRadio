import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_DAY } from '../utils/queries';
import ScheduleShowRow from '../components/ScheduleShowRow';
import PHScheduleShowRow from '../components/PHScheduleShowRow';

const date = new Date();
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const scheduleData = require('../utils/data/scheduleData.json');

let printableScheduleSrc = '';
for (let i = 0; i < scheduleData.printableSchedules.length; i++) {
  let scheduleEffDate = Date.parse(
    scheduleData.printableSchedules[i].effectiveDate
  );
  if (scheduleEffDate <= date) {
    printableScheduleSrc = scheduleData.printableSchedules[i].src;
    break;
  }
}

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [displayDay, SetDisplayDay] = useState(`${daysOfWeek[date.getDay()]}`);
  const { loading, data, client } = useQuery(QUERY_SINGLE_DAY, {
    variables: { day: displayDay },
  });

  const queryResults = data?.schedule || [];
  let orderedResults = [...queryResults];
  orderedResults.sort((a, b) => {
    return a.startTime24 - b.startTime24;
  });
  let pairedResults = [];
  for (
    let i = 0, j = Math.floor(orderedResults.length / 2);
    j < orderedResults.length;
    i++, j++
  ) {
    if (i === Math.floor(orderedResults.length / 2)) {
      pairedResults.push([{}, orderedResults[j]]);
    } else {
      pairedResults.push([orderedResults[i], orderedResults[j]]);
    }
  }

  const phPairedResults = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [14, 15],
  ];

  const handleClick = (e) => {
    SetDisplayDay(e.target.name);
  };

  const prefetchData = (e) => {
    client.query({
      query: QUERY_SINGLE_DAY,
      variables: { day: e.target.name },
    });
  };

  const PageMetadata = {
    title: `WETF 105.7 - Schedule`,
    meta: {
      name: {
        description: `Jazz Radio WETF on air schedule`,
        keywords: `WETF, Jazz, Schedule`,
        author: `Alejandro Villanueva`,
        viewport: `width=device-width, initial-scale=1.0`,
      },
      property: {
        ogLocale: `en_US`,
        ogType: `website`,
      },
    },
  };
  PageMetadata.meta.property.ogTitle = PageMetadata.title;
  PageMetadata.meta.property.ogDescription = PageMetadata.meta.name.description;

  return (
    <>
      <Helmet>
        <title>{PageMetadata.title}</title>
        <meta name='description' content={PageMetadata.meta.name.description} />
        <meta name='keywords' content={PageMetadata.meta.name.keywords} />
        <meta name='author' content={PageMetadata.meta.name.author} />
        <meta name='viewport' content={PageMetadata.meta.name.viewport} />
        <meta
          property='og:title'
          content={PageMetadata.meta.property.ogTitle}
        />
        <meta
          property='og:locale'
          content={PageMetadata.meta.property.ogLocale}
        />
        <meta property='og:type' content={PageMetadata.meta.property.ogType} />
        <meta
          property='og:description'
          content={PageMetadata.meta.property.ogDescription}
        />
      </Helmet>
      <div className='container p-0 bg-body-tertiary'>
        <div className='container justify-content-evenly'>
          <div className='p-5 text-center'>
            <h1 className='display-4'>Weekly Schedule</h1>
          </div>
          <div className='row justify-content-evenly'>
            {daysOfWeek.map((day, i) => {
              return (
                <button
                  className={`col btn ${
                    displayDay === day ? 'btn-secondary' : 'btn-outline-primary'
                  } rounded-pill mx-auto`}
                  type='button'
                  name={day}
                  onClick={handleClick}
                  onMouseEnter={prefetchData}
                  onFocus={prefetchData}
                  key={`weekday-button-${day}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <p className='col text-center lead'>{displayDay}</p>
          </div>
          <div className='row'>
            <p className='col text-center fw-light fst-italic fs-6'>
              All show times listed in Eastern time zone (EST/EDT)
            </p>
          </div>
          {loading ? (
            <>
              {phPairedResults.map((e) => {
                return (
                  <PHScheduleShowRow
                    aria-hidden='true'
                    shows={e}
                    key={`SSRplaceholder-${e}`}
                  />
                );
              })}
            </>
          ) : (
            <>
              {pairedResults.map((e) => {
                return <ScheduleShowRow key={e[1].startTime24} shows={e} />;
              })}
            </>
          )}
        </div>
        <div className='container justify-content-evenly'>
          <div className=' text-center'>
            <a
              href={printableScheduleSrc}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline-primary m-2'
              type='button'
            >
              Download a printer friendly schedule here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
