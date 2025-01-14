import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';

import { QUERY_DJs } from '../utils/queries';
import DJCard from '../components/DJCard';
import PHDJCard from '../components/PHDJCard';

interface PageMetadataType {
  title: string;
  meta: {
    name: {
      description: string;
      keywords: string;
      author: string;
      viewport: string;
    };
    property: {
      ogLocale: string;
      ogType: string;
      ogTitle: string;
      ogDescription: string;
    };
  };
}

interface ShowsType {
  name: string;
  url: string;
}

interface DJsType {
  Shows: ShowsType[];
  Title: string;
  firstName: string;
  image: string;
  lastName: string;
  nickName: string;
  sqImage: string;
  url: string;
  _id: string;
}

const DJs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_DJs);
  const djs: DJsType[] = data?.djs || [];

  const phDJs = [0, 1, 2, 3, 4, 5, 6];

  let PageMetadata: PageMetadataType = {
    title: `WETF 105.7 - Contributors`,
    meta: {
      name: {
        description: `Jazz Radio WETF Contributors`,
        keywords: `WETF, Jazz`,
        author: `Alejandro Villanueva`,
        viewport: `width=device-width, initial-scale=1.0`,
      },
      property: {
        ogLocale: `en_US`,
        ogType: `website`,
        ogTitle: '',
        ogDescription: '',
      },
    },
  };
  PageMetadata.meta.property.ogTitle = PageMetadata.title;
  PageMetadata.meta.property.ogDescription = PageMetadata.meta.name.description;

  return (
    <>
      <Helmet>
        <title>{PageMetadata.title}</title>
        <meta name='description' content={PageMetadata.meta.name.description} />
        <meta name='keywords' content={PageMetadata.meta.name.keywords} />
        <meta name='author' content={PageMetadata.meta.name.author} />
        <meta name='viewport' content={PageMetadata.meta.name.viewport} />
        <meta
          property='og:title'
          content={PageMetadata.meta.property.ogTitle}
        />
        <meta
          property='og:locale'
          content={PageMetadata.meta.property.ogLocale}
        />
        <meta property='og:type' content={PageMetadata.meta.property.ogType} />
        <meta
          property='og:description'
          content={PageMetadata.meta.property.ogDescription}
        />
      </Helmet>
      <div className='container'>
        <div className='p-5 text-center'>
          <h1 className='display-4'>WETF Contributors</h1>
        </div>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center'>
          {loading
            ? phDJs.map((e: number) => (
                <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
              ))
            : djs.map((dj: DJsType) => <DJCard key={dj._id} dj={dj} />)}
        </div>
      </div>
    </>
  );
};

export default DJs;
