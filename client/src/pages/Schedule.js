import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_DAY } from '../utils/queries';
import ScheduleShowRow from '../components/ScheduleShowRow';

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

const Schedule = () => {
  const [displayDay, SetDisplayDay] = useState(`${daysOfWeek[date.getDay()]}`);
  const { loading, data } = useQuery(QUERY_SINGLE_DAY, {
    variables: { day: displayDay },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

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
  const handleClick = (e) => {
    SetDisplayDay(e.target.name);
  };

  return (
    <>
      <div className="container">
        <div className=" justify-content-center">
          {daysOfWeek.map((day) => {
            return (
              <button
                className={`btn ${
                  displayDay === day ? 'btn-secondary' : 'btn-primary'
                } rounded-pill mx-auto`}
                type="button"
                name={day}
                onClick={handleClick}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <p className="col text-center lead">{displayDay}</p>
        </div>
        {pairedResults.map((e, i) => {
          return (
            <>
              <ScheduleShowRow shows={e}></ScheduleShowRow>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Schedule;
