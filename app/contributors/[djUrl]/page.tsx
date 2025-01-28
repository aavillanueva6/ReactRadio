import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import SingleContributorPageClient from '@/app/components/SingleContributorPageClient';

type Props = {
  params: Promise<{
    djUrl: string;
  }>;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function fetchHost(djUrl: string) {
  const response = await fetch(`${baseUrl}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query singleDJ($url: String!) {
          singleDJ(url: $url) {
            firstName
            lastName
            nickName
            Title
            image
            bio
            Shows {
              name
              url
              _id
            }
          }
        }
      `,
      variables: {
        url: djUrl,
      },
    }),
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch host');
  }

  const { data } = await response.json();
  return data?.singleDJ || [];
}

async function getParams(params: Props['params']) {
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await getParams(params);
    const host = await fetchHost(resolvedParams.djUrl);

    if (!host) {
      return {
        title: 'Host Not Found',
        description: 'The requested host could not be found.',
      };
    }
    return {
      title: `${host.firstName} ${host.lastName}`,
      description: `Meet ${host.firstName} ${host.lastName}, ${host.Title}`,
      openGraph: {
        title: `${host.firstName} ${host.lastName}`,
        description: `Meet ${host.firstName} ${host.lastName}, ${host.Title}`,
        images: host.image
          ? [
              {
                url: host.image,
                alt: `${host.firstName} ${host.lastName} - Host`,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${host.firstName} ${host.lastName}`,
        description: `Meet ${host.firstName} ${host.lastName}, ${host.Title}`,
        images: host.image
          ? [
              {
                url: host.image,
                alt: `${host.firstName} ${host.lastName} - Host`,
              },
            ]
          : [],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: 'Host',
      description: 'Meet our host',
    };
  }
}

const SingleContributor = async ({ params }: Props) => {
  return (
    <>
      <Providers>
        <SingleContributorPageClient />
      </Providers>
    </>
  );
};

export default SingleContributor;
