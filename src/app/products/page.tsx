import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bot, CalendarCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const products = [
  {
    icon: Users,
    title: "TrueBond",
    description: "An AI-powered social connection platform designed to foster deep, meaningful relationships by moving beyond superficial interactions.",
    image: "https://placehold.co/600x400.png",
    aiHint: "social connection"
  },
  {
    icon: Bot,
    title: "BhaktiConnect",
    description: "A spiritual AI companion for ISKCON devotees, providing personalized guidance, scriptural insights, and a supportive community.",
    image: "https://placehold.co/600x400.png",
    aiHint: "spiritual ai"
  },
  {
    icon: CalendarCheck,
    title: "AI Timetable Planner",
    description: "A personalized life scheduling tool that helps you organize your days with purpose, aligning your tasks with your long-term goals.",
    image: "https://placehold.co/600x400.png",
    aiHint: "schedule planner"
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
        <div className="grid md:grid-cols-3 gap-8">
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
                    className="w-full h-48 object-cover"
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
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground">{product.description}</p>
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
