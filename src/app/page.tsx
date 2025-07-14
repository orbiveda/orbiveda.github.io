import HeroSection from '@/components/sections/hero';
import AboutSummary from '@/components/sections/about-summary';
import ProductHighlights from '@/components/sections/product-highlights';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <ProductHighlights />
      <Testimonials />
    </>
  );
}
