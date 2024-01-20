import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import ThemeProvider from '@/providers/theme-provider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linuxxii Real State',
  description: 'Real state next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
