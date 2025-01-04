import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleShowCard = ({ show }) => {
  return (
    <div key={`${show.startTime24}-airing-time-card`} className='col-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {show.startTime12} - {show.endTime12}
          </div>
          <div className='col-12'>
            <Link
              className='text-decoration-none'
              to={`/shows/${show.show.url}`}
            >
              <div className='w-auto text-dark'>{show.show.name}</div>
            </Link>
            <Link
              className='me-auto w-auto text-decoration-none'
              to={`/djs/${show.show.host.url}`}
            >
              <p className='w-auto text-secondary'>{show.show.host.nickName}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleShowCard;
