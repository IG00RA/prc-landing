import type { Metadata } from 'next';
import '../styles/globals.css';
import {
  M_PLUS_Rounded_1c,
  Jura,
  Sofia_Sans_Extra_Condensed,
} from 'next/font/google';

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-plus',
});

const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jura',
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sofia',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${mPlusRounded.variable} ${jura.variable} ${sofiaSansExtraCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
