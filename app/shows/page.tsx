import React from 'react';

import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import ShowsPageClient from '@/app/components/ShowsPageClient';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  title: 'Shows',
  description: `Jazz Radio WETF programs.`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const Shows: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <div className='display-4'>WETF Shows</div>
        </div>
        <Providers>
          <ShowsPageClient />
        </Providers>
      </div>
    </>
  );
};

export default Shows;
