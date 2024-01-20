import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

import ThemeProvider from '@/providers/theme-provider';

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
