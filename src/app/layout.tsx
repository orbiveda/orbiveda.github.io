/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import ScrollToTop from "@/components/ui/scroll-to-top"

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700']
});


export const metadata: Metadata = {
  title: 'Orbiveda - Innovation Meets Soul',
  description: 'Orbiveda is a premium technology company blending cutting-edge innovation with spiritual wisdom.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn("font-sans antialiased flex flex-col min-h-screen bg-background", poppins.variable)}>
        {children}
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
