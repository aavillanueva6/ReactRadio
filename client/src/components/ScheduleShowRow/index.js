import React from 'react';
import ScheduleShowCard from '../ScheduleShowCard';

const ScheduleShowRow = ({ shows }) => {
  return (
    <>
      <div className="row justify-content-evenly">
        {shows[0].show ? (
          <ScheduleShowCard show={shows[0]} />
        ) : (
          <div className="col-5 w-auto"></div>
        )}
        <div className="vr px-0"></div>
        <ScheduleShowCard show={shows[1]} />
      </div>
    </>
  );
};

export default ScheduleShowRow;
