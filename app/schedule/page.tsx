import React /*, { useState }*/ from 'react';
// import { QUERY_SINGLE_DAY } from '../utils/queries';
import { Metadata } from 'next';
import { ScheduleDaysButton } from '@/app/components';
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

const Schedule: React.FC = () => {
  return (
    <>
      <Providers>
        <ScheduleDaysButton />
      </Providers>
    </>
  );
};

export default Schedule;
