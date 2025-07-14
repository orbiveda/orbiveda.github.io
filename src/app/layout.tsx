import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';


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
      <body className={cn("font-sans antialiased", poppins.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
