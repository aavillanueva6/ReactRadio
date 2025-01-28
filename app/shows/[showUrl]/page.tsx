import React from 'react';
import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import SingleShowPageClient from '@/app/components/SingleShowPageClient';

type Props = {
  params: Promise<{
    showUrl: string;
  }>;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function fetchShow(showUrl: string) {
  const response = await fetch(`${baseUrl}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query singleShow($url: String!) {
          singleShow(url: $url) {
            name
            longDescription
            _id
            image
            host {
              nickName
              fullName
              url
            }
            schedule {
              day
              startTime12
              endTime12
            }
          }
        }
      `,
      variables: {
        url: showUrl,
      },
    }),
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch host');
  }

  const { data } = await response.json();
  return data?.singleShow || [];
}

async function getParams(params: Props['params']) {
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await getParams(params);
    const show = await fetchShow(resolvedParams.showUrl);

    if (!show) {
      return {
        title: 'Show Not Found',
        description: 'The requested show could not be found.',
      };
    }
    return {
      title: `${show.name}`,
      description: `Get details on our show, ${show.name}`,
      openGraph: {
        title: `${show.name}`,
        description: `Get details on our show, ${show.name}`,
        images: show.image
          ? [
              {
                url: show.image,
                alt: `${show.name} - WETF Show`,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${show.name}`,
        description: `Get details on our show, ${show.name}`,
        images: show.image
          ? [
              {
                url: show.image,
                alt: `${show.name} - WETF Show`,
              },
            ]
          : [],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: 'Show',
      description: 'Get details on our show',
    };
  }
}

const SingleShow = async ({ params }: Props) => {
  return (
    <>
      <Providers>
        <SingleShowPageClient />
      </Providers>
    </>
  );
};

export default SingleShow;
