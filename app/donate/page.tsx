import React, { Fragment } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import donateData from '@/app/lib/donateData.json';

interface PageMetadataType {
  title: string;
  description: string;
}

interface DonateMethodType {
  header: {
    text: string;
    class: string;
  };
  body: {
    text: string;
    class: string;
    style: Record<string, string>;
  };
  icon: {
    src: string;
    style: Record<string, string>;
  };
}

interface DonateDataType {
  infoText: string[];
  pledgeButton: {
    theme: string;
    url: string;
  };
  afterPledgeSection: {
    textSection: {
      text: string;
      class: string;
      style: Record<string, string>;
    };
    otherSupportMethods: DonateMethodType[];
  };
}

const pageMetaData: PageMetadataType = {
  title: 'Support WETF',
  description: `Jazz Radio WETF donate to support independent non-profit radio.`,
};

export const metadata: Metadata = {
  title: pageMetaData.title,
  description: pageMetaData.description,
  openGraph: {
    title: pageMetaData.title,
    description: pageMetaData.description,
  },
};

const typedDonateData: DonateDataType = donateData;

const Donate: React.FC = () => {
  return (
    <>
      <div className='container mx-auto text-center'>
        <div className='text-center px-5 pt-5 pb-3'>
          <h1 className='display-4'>Support Independent Radio</h1>
        </div>
        {typedDonateData.infoText.map((paragraph: string, i: number) => {
          return (
            <p className='text-body-secondary' key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className='container my-4'>
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center'>
          <div className='col'>
            <Link
              href={typedDonateData.pledgeButton.url}
              className={typedDonateData.pledgeButton.theme}
              target='_blank'
            >
              Pledge Today
            </Link>
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <span
          className={typedDonateData.afterPledgeSection.textSection.class}
          style={typedDonateData.afterPledgeSection.textSection.style}
        >
          {typedDonateData.afterPledgeSection.textSection.text}
        </span>
      </div>
      <div className='container my-4'>
        <div className='row justify-content-between'>
          {typedDonateData.afterPledgeSection.otherSupportMethods.map(
            (method: DonateMethodType) => (
              <Fragment key={method.header.text}>
                <div className='col-sm-3'>
                  <div
                    className='row text-primary text-center'
                    style={method.icon.style}
                  >
                    <i className={`${method.icon.src}`} />
                  </div>
                  <div className='row'>
                    <span className={`${method.header.class}`}>
                      {method.header.text}
                    </span>
                  </div>
                  <div className='row'>
                    <span
                      className={method.body.class}
                      style={method.body.style}
                    >
                      {method.body.text}
                    </span>
                  </div>
                </div>
              </Fragment>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Donate;
