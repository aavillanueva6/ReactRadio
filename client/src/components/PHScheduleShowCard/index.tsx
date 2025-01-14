import React from 'react';

const PHScheduleShowCard = ({ show }: { show: number }) => {
  return (
    <div key={`ph-${show}-airing-time-card`} className='col-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 placeholder-glow'>
            <p className='placeholder h-75 w-100'></p>
          </div>
          <div className='col-md-9 placeholder-glow'>
            <div className='w-auto text-dark'>
              <span className='placeholder  w-100'></span>
            </div>
            <p className='w-auto text-secondary'>
              <span className='placeholder  w-100'></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PHScheduleShowCard;
