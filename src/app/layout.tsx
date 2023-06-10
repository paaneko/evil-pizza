import './globals.css';
import { Exo } from 'next/font/google';

const exo = Exo({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-exo',
  display: 'swap',
});

export const metadata = {
  title: 'Next Pizza',
  description: 'This is the main page of Next Pizza!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${exo.variable} font-sans`}>{children}</body>
    </html>
  );
}
