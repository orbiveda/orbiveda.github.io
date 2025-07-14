import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import ScrollToTop from '@/components/ui/scroll-to-top';

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <HeroSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </SidebarProvider>
  );
}
