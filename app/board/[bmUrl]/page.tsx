import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import SingleBoardMemberPageClient from '@/app/components/SingleBoardMemberPageClient';

interface PageMetadataType {
  title: string;
  description: string;
}

const pageMetaData: PageMetadataType = {
  // title: `${boardMember.firstName} ${boardMember.lastName}`,
  // description: `Jazz Radio WETF Board Member, ${boardMember.firstName} ${boardMember.lastName}.`,
  title: `placeholder`,
  description: `placeholder`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const SingleBoardMember: React.FC = () => {
  return (
    <>
      <div className='container '>
        <Providers>
          {/* @ts-ignore */}
          <SingleBoardMemberPageClient />
        </Providers>
      </div>
      {/* {to do: add links to DJ social media (fb, twitter, insta, etc.)} */}
    </>
  );
};

export default SingleBoardMember;
