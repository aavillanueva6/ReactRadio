import React from 'react';
import { Metadata } from 'next';
import BoardPageClient from '@/app/components/BoardPageClient';
import { Providers } from '@/app/providers';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  title: 'Board',
  description: `Jazz Radio WETF Board Members.`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const BoardMembers: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Board Members</h1>
        </div>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          <Providers>
            <BoardPageClient />
          </Providers>
        </div>
      </div>
    </>
  );
};

export default BoardMembers;
