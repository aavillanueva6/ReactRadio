import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleShowCard from '../ScheduleShowCard';

const ScheduleShowRow = ({ shows }) => {
  return (
    <>
      <div className="row justify-content-evenly">
        {shows[0].show ? (
          <ScheduleShowCard show={shows[0]} />
        ) : (
          <div className="col-5"></div>
        )}
        <div className="vr px-0"></div>
        <ScheduleShowCard show={shows[1]} />
      </div>
    </>
  );
};

export default ScheduleShowRow;
