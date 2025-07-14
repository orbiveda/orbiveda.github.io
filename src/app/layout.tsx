import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { PageTransition } from '@/components/layout/page-transition';


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
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
             <PageTransition>
                {children}
             </PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
