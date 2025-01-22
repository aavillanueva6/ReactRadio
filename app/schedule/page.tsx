import React /*, { useState }*/ from 'react';
// import { QUERY_SINGLE_DAY } from '../utils/queries';
import { Metadata } from 'next';
import { SchedulePageClient } from '@/app/components';
import { Providers } from '@/app/providers';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  title: 'Schedule',
  description: `Jazz Radio WETF on air schedule.`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

interface PrintableScheduleDataType {
  printableSchedules: Array<{
    src: string;
    effectiveDate: string;
  }>;
}

const scheduleData: PrintableScheduleDataType = require('@/app/lib/scheduleData.json');

let printableScheduleSrc: string = '';
for (let i: number = 0; i < scheduleData.printableSchedules.length; i++) {
  let scheduleEffDate: number = Date.parse(
    scheduleData.printableSchedules[i].effectiveDate
  );
  if (scheduleEffDate <= Date.now()) {
    printableScheduleSrc = scheduleData.printableSchedules[i].src;
    break;
  }
}

const Schedule: React.FC = () => {
  return (
    <>
      <div className='container p-0 bg-body-tertiary'>
        <Providers>
          <SchedulePageClient />
        </Providers>
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
