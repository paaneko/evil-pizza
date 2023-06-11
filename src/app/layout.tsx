import './globals.css';
import { Montserrat } from 'next/font/google';
import React from 'react';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const lato = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata = {
  title: 'Next Pizza',
  description: 'This is the main page of Next Pizza!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* TODO create card Slot component */}
      <body className={`${lato.variable} font-sans`}>
        <header>
          <Header rightContentSlot={<span>Card slot</span>} />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
