import React from 'react';
import PHScheduleShowCard from '../PHScheduleShowCard';

const PHScheduleShowRow = ({ shows }) => {
  return (
    <>
      <div className="row justify-content-evenly">
        <PHScheduleShowCard show={shows[0]} />
        <div className="vr px-0"></div>
        <PHScheduleShowCard show={shows[1]} />
      </div>
    </>
  );
};

export default PHScheduleShowRow;
