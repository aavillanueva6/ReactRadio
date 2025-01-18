import type { Metadata } from 'next';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | WETF 105.7FM - The Jazz Station',
    default: 'WETF 105.7FM - The Jazz Station',
  },
  description:
    'Jazz Radio WETF Preserves, Promotes, Perpetuates and Presents Jazz Music.',
  keywords: ['WETF', 'Jazz'],
  authors: [
    {
      name: 'Alejandro Villanueva',
      url: 'https://www.alejandro-a-villanueva.com',
    },
  ],
  metadataBase: new URL('https://react-radio.onrender.com'),
  openGraph: {
    title: {
      template: '%s | WETF 105.7FM - The Jazz Station',
      default: 'WETF 105.7FM - The Jazz Station',
    },
    description:
      'Jazz Radio WETF Preserves, Promotes, Perpetuates and Presents Jazz Music.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={``}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
