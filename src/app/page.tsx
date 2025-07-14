import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ScrollToTop from '@/components/ui/scroll-to-top';
import AppSidebar from '@/components/layout/sidebar';
import ProductHighlights from '@/components/sections/product-highlights';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-grow overflow-y-auto">
          <HeroSection />
          <ProductHighlights />
          <Testimonials />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
