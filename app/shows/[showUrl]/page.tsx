import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import SingleShowPageClient from '@/app/components/SingleShowPageClient';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  // title: `${show.name}`,
  // description: `Jazz Radio WETF show ${show.name}.`,
  title: 'placeholder',
  description: 'placeholder',
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const SingleShow: React.FC = () => {
  return (
    <>
      <Providers>
        <SingleShowPageClient />
      </Providers>
    </>
  );
};

export default SingleShow;
