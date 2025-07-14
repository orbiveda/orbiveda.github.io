import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSummary() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="p-2 bg-primary/10 rounded-full mb-4 inline-block">
                <span className="text-primary font-semibold px-2">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pioneering the Future of Conscious Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Orbiveda is not just a technology company; we are a collective of visionaries, engineers, and philosophers dedicated to harmonizing innovation with intuition. We build products that serve as tools for enlightenment in the digital age.
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
                <Link href="/about">
                Learn More About Us <MoveRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Orbiveda Team Vision"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl shadow-primary/10 transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="team vision"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
