import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import ContributorsPageClient from '@/app/components/ContributorsPageClient';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  title: 'Contributors',
  description: 'Jazz Radio WETF Contributors.',
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const DJs: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Contributors</h1>
        </div>
        <Providers>
          <ContributorsPageClient />
        </Providers>
      </div>
    </>
  );
};

export default DJs;
