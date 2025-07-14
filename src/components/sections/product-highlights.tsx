import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const highlightedProducts = [
  {
    icon: Users,
    title: "TrueBond",
    description: "A revolutionary platform to foster genuine human connections in an AI-first world.",
  },
  {
    icon: Bot,
    title: "BhaktiConnect",
    description: "A unique spiritual AI assistant crafted for ISKCON devotees and seekers.",
  },
];

export default function ProductHighlights() {
  return (
    <section id="products-highlights" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
            <div className="p-2 bg-primary/10 rounded-full mb-4 inline-block">
                <span className="text-primary font-semibold px-2">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting the Future</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
              We are developing a suite of products designed to elevate the human experience. Here's a glimpse into what's coming.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlightedProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.title} className="bg-background border text-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                   <Badge variant="outline" className="mt-2 border-accent text-accent">Coming Soon</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center">
            <Button asChild size="lg">
                <Link href="/products">View All Products <MoveRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
