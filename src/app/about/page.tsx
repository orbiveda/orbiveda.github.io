import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center pt-20 max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fusing <span className="text-primary">Innovation</span> with Timeless <span className="text-primary/70">Wisdom</span>
            </h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our mission is to forge a new paradigm where technology is not just intelligent, but intuitive, soulful, and an extension of human potential.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="flex justify-center order-1 md:order-2">
            <Image 
              src="https://placehold.co/600x600.png"
              alt="Abstract representation of technology and soul"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="abstract technology"
            />
          </div>
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                At Orbiveda, we believe technology should not only be intelligent but also intuitive and soulful. Our mission is to forge a new paradigm where cutting-edge innovation harmonizes with deep-seated spiritual wisdom, creating products that elevate human consciousness.
              </p>
            </div>
             <div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                Our vision is a future where technology acts as a bridge to deeper self-understanding and universal connection. We are dedicated to crafting elegant, futuristic solutions that empower individuals on their journey of growth and discovery.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-primary">Our Story</h3>
            <p className="text-lg text-muted-foreground">
              Founded on the principle that the next leap in technology must be a leap in consciousness, Orbiveda was born from a desire to reconcile the digital with the divine. Our journey began with a simple question: What if our devices could not only connect us to information, but also to ourselves and each other on a more meaningful level? This question drives our every innovation, as we explore the synthesis of advanced AI, beautiful design, and ancient wisdom to build a more enlightened world, one product at a time.
            </p>
        </div>

      </div>
    </section>
  );
}
