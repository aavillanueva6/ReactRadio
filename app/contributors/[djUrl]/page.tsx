import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import SingleContributorPageClient from '@/app/components/SingleContributorPageClient';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  // title: `${dj.firstName} ${dj.lastName}`,
  // description: `Jazz Radio WETF Board Member, ${dj.firstName} ${dj.lastName}.`,
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

const SingleContributor: React.FC = () => {
  return (
    <>
      <Providers>
        <SingleContributorPageClient />
      </Providers>
    </>
  );
};

export default SingleContributor;
