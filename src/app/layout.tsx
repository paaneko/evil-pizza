import './globals.css';
import { Montserrat } from 'next/font/google';
import React from 'react';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { AppStoreProvider } from './AppStoreProvider';

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
    <AppStoreProvider>
      <html lang="en">
        {/* TODO create card Slot component */}
        <body>
          <div
            className={`${lato.variable} font-sans flex flex-col min-h-screen`}
          >
            <header>
              <Header rightContentSlot={<span>Card slot</span>} />
            </header>
            <main>{children}</main>
            <footer className="mt-auto">
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    </AppStoreProvider>
  );
}
