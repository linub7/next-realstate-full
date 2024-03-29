import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import 'remixicon/fonts/remixicon.css';

import ThemeProvider from '@/providers/theme-provider';
import LayoutProvider from '@/providers/layout-provider';

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
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
