/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

import HeroSection from '@/components/sections/hero';
import AboutSummary from '@/components/sections/about-summary';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Testimonials from '@/components/sections/testimonials';

function ExploreProductsCTA() {
  return (
    <section id="explore-cta" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to See the Future?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover our vision for technology that elevates human potential and fosters deeper connection.
        </p>
        <Button asChild size="lg">
          <Link href="/products">
            Explore Our Products <MoveRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <Testimonials />
      <ExploreProductsCTA />
    </>
  );
}
