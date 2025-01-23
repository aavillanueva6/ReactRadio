import React from 'react';
import ScheduleShowCard from '../components/ScheduleShowCard';

interface Host {
  nickName: string;
  fullName: string;
  url: string;
}

interface Show {
  host: Host[];
  name: string;
  shortDescription: string;
  url: string;
}

interface Schedule {
  day: string;
  endTime12: string;
  show: Show;
  startTime12: string;
  startTime24: number;
}

const ScheduleShowRow = ({ shows }: { shows: Schedule[] }) => {
  return (
    <>
      <div className='row justify-content-evenly'>
        {shows[0].show ? (
          <ScheduleShowCard show={shows[0]} />
        ) : (
          <div className='col-5'></div>
        )}
        <div className='vr px-0'></div>
        <ScheduleShowCard show={shows[1]} />
      </div>
    </>
  );
};

export default ScheduleShowRow;
