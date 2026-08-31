import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
});

const siteOrigin = process.env.SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Pino Noir | Los Angeles Gypsy Jazz Band for Events & Weddings',
  description:
    'Book Pino Noir, a Los Angeles Gypsy Jazz band for venues, private events, cocktail hours, and weddings. Watch live performances and check availability.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'Pino Noir | LA Gypsy Jazz',
    description: 'Hot-club swing for Los Angeles rooms, parties, and weddings.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Pino Noir — Los Angeles Gypsy Jazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pino Noir | LA Gypsy Jazz',
    description: 'Hot-club swing for Los Angeles rooms, parties, and weddings.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
