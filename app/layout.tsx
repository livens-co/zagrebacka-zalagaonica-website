import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';

const font = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zagrebacka zalagaonica',
  description: 'Zagrebacka zalagaonica',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className={font.className}>
        <div className='mainLayout'>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
