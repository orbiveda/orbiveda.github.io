/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

import HeroSection from "@/components/sections/hero";
import AboutSummary from "@/components/sections/about-summary";
import Testimonials from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <Testimonials />
    </>
  );
}
