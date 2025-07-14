import AnimatedOrb from '@/components/ui/animated-orb';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import AboutSummary from './about-summary';

export default function HeroSection() {
  return (
    <>
      <section id="home" className="relative flex items-center justify-center min-h-screen text-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <AnimatedOrb />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center p-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 leading-tight">
            Innovation Meets Soul
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Shaping the future with purpose by blending cutting-edge technology with timeless wisdom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
              <Link href="/about">
                Learn More <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/products">Explore Our Vision</Link>
            </Button>
          </div>
        </div>
      </section>
      <AboutSummary />
    </>
  );
}
