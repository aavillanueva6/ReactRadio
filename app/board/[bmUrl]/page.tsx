import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import SingleBoardMemberPageClient from '@/app/components/SingleBoardMemberPageClient';

type Props = {
  params: {
    bmUrl: string;
  };
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function fetchBoardMember(bmUrl: string) {
  const response = await fetch(`${baseUrl}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query singleBM($url: String!) {
          singleBM(url: $url) {
            firstName
            lastName
            nickName
            Title
            image
            bio
          }
        }
      `,
      variables: {
        url: bmUrl,
      },
    }),
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch board members');
  }

  const { data } = await response.json();
  return data?.singleBM || [];
}

async function getParams(params: Props['params']) {
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await getParams(params);
    const boardMember = await fetchBoardMember(resolvedParams.bmUrl);

    if (!boardMember) {
      return {
        title: 'Board Member Not Found',
        description: 'The requested board member could not be found.',
      };
    }
    return {
      title: `${boardMember.firstName} ${boardMember.lastName}`,
      description: `Meet ${boardMember.firstName} ${boardMember.lastName}, ${boardMember.Title}`,
      openGraph: {
        title: `${boardMember.firstName} ${boardMember.lastName}`,
        description: `Meet ${boardMember.firstName} ${boardMember.lastName}, ${boardMember.Title}`,
        images: boardMember.image
          ? [
              {
                url: boardMember.image,
                alt: `${boardMember.firstName} ${boardMember.lastName} - Board Member`,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${boardMember.firstName} ${boardMember.lastName}`,
        description: `Meet ${boardMember.firstName} ${boardMember.lastName}, ${boardMember.Title}`,
        images: boardMember.image
          ? [
              {
                url: boardMember.image,
                alt: `${boardMember.firstName} ${boardMember.lastName} - Board Member`,
              },
            ]
          : [],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: 'Board Member | Organization Name',
      description: 'Meet our board member',
    };
  }
}

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
