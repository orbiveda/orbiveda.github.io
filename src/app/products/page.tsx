import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Bot, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const products = [
  {
    icon: Users,
    title: "TrueBond",
    tagline: "Connect Meaningfully. Beyond Social.",
    description: "TrueBond is Orbiveda’s revolutionary platform designed to foster genuine human connections in an AI-first world. It combines advanced algorithms with a mindful design to help users build real, purposeful relationships—whether with friends, families, or like-minded communities.",
    features: [
      "AI-powered matching based on personality and values.",
      "Community spaces for deeper engagement.",
      "Mindful design to reduce digital fatigue."
    ],
    image: "https://placehold.co/600x400.png",
    aiHint: "social connection"
  },
  {
    icon: Bot,
    title: "BhaktiConnect",
    tagline: "Your Spiritual AI Companion.",
    description: "BhaktiConnect is a unique spiritual assistant crafted especially for ISKCON devotees and seekers. It offers tools and guidance to help practitioners stay connected to their faith and live a balanced, devotional life.",
     features: [
      "AI-generated Timetables for Japa, Sadhana, and daily routines.",
      "Access to sacred texts, kirtans, and lectures.",
      "Community features to connect with temples and fellow devotees."
    ],
    image: "https://placehold.co/600x400.png",
    aiHint: "spiritual ai"
  },
];

export default function ProductsPage() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center pt-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vision for the Future</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
              We craft premium technology that blends cutting-edge features with a deep respect for the human spirit. Our product pipeline is focused on creating a more intuitive and enlightened world.
            </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.title} className="bg-card border text-left transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    data-ai-hint={product.aiHint}
                  />
                </CardHeader>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-full">
                                <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">{product.title}</CardTitle>
                        </div>
                        <Badge variant="outline" className="border-accent text-accent">Coming Soon</Badge>
                    </div>
                     <CardDescription className="text-lg italic text-muted-foreground mb-4">{product.tagline}</CardDescription>
                    <CardContent className="p-0 flex-grow space-y-6">
                      <p className="text-muted-foreground">{product.description}</p>
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map(feature => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary/80 mt-1 shrink-0"/>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
