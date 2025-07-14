import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-1 md:order-2">
            <Image 
              src="https://placehold.co/500x500.png"
              alt="Abstract representation of technology and soul"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="abstract technology"
            />
          </div>
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fusing <span className="text-primary">Innovation</span> with Timeless <span className="text-accent">Wisdom</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              At Orbiveda, we believe technology should not only be intelligent but also intuitive and soulful. Our mission is to forge a new paradigm where cutting-edge innovation harmonizes with deep-seated spiritual wisdom, creating products that elevate human consciousness.
            </p>
            <p className="text-lg text-foreground/80">
              Our vision is a future where technology acts as a bridge to deeper self-understanding and universal connection. We are dedicated to crafting elegant, futuristic solutions that empower individuals on their journey of growth and discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
