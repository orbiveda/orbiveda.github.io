import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ScrollToTop from '@/components/ui/scroll-to-top';
import ProductHighlights from '@/components/sections/product-highlights';
import AboutSummary from '@/components/sections/about-summary';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <HeroSection />
        <AboutSummary />
        <ProductHighlights />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
