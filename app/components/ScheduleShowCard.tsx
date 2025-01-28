import React, { Fragment } from 'react';
import Link from 'next/link';

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

const ScheduleShowCard = ({ show }: { show: Schedule }) => {
  return (
    <div key={`${show.startTime24}-airing-time-card`} className='col-5 pb-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {show.startTime12} - {show.endTime12}
          </div>
          <div className='col-12'>
            <Link
              className='text-decoration-none'
              href={`/shows/${show.show.url}`}
            >
              <div className='w-auto text-dark'>{show.show.name}</div>
            </Link>
            {show.show.host.map((e: Host, i: number) => {
              return i === 0 ? (
                <Link
                  key={i}
                  className='me-auto w-auto text-decoration-none'
                  href={`/hosts/${e.url}`}
                >
                  <span className='w-auto text-secondary'>{e.fullName}</span>
                </Link>
              ) : (
                <Fragment key={i}>
                  <span className='w-auto text-secondary'>, </span>
                  <Link
                    className='me-auto w-auto text-decoration-none'
                    href={`/hosts/${e.url}`}
                  >
                    <span className='w-auto text-secondary'>{e.fullName}</span>
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleShowCard;
