import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import HostsPageClient from '@/app/components/HostsPageClient';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  title: 'Hosts',
  description: 'Jazz Radio WETF Hosts.',
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
          <h1 className='display-4'>WETF Hosts</h1>
        </div>
        <Providers>
          <HostsPageClient />
        </Providers>
      </div>
    </>
  );
};

export default DJs;
