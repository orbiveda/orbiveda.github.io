import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Eye, Sparkles } from "lucide-react";

const products = [
  {
    icon: BrainCircuit,
    title: "Orb AI",
    description: "A revolutionary AI that understands context and emotion, designed to be a true partner in your creative and analytical pursuits.",
  },
  {
    icon: Sparkles,
    title: "Spiritual OS",
    description: "An operating system for your life. It integrates mindfulness, meditation, and personal growth tools directly into your digital experience.",
  },
  {
    icon: Eye,
    title: "Vision Devices",
    description: "Augmented reality hardware that overlays digital information with a focus on well-being, art, and enhancing your natural perception.",
  },
];

export default function ProductsPage() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="pt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Innovations</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-16">
            We craft premium technology that blends cutting-edge features with a deep respect for the human spirit.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.title} className="bg-card border border-border/50 text-center transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{product.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
