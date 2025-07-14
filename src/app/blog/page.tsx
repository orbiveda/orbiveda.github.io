import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Soul of the Machine: Our Vision for Conscious AI",
    date: "October 26, 2024",
    description: "Explore the philosophy behind Orb AI and how we're building artificial intelligence that understands more than just data.",
    image: "https://placehold.co/600x400.png",
    aiHint: "futuristic AI",
    slug: "/blog/soul-of-the-machine",
  },
  {
    title: "Digital Sanctuaries: Designing the Spiritual OS",
    date: "October 15, 2024",
    description: "A look into the design principles of the Spiritual OS, an ecosystem built for mindfulness in a digital world.",
    image: "https://placehold.co/600x400.png",
    aiHint: "digital meditation",
    slug: "/blog/digital-sanctuaries",
  },
  {
    title: "Beyond the Screen: Augmented Reality for Human Flourishing",
    date: "October 1, 2024",
    description: "Our Vision Devices are more than just hardware. They are windows into a new way of perceiving the world, designed to enhance well-being.",
    image: "https://placehold.co/600x400.png",
    aiHint: "augmented reality",
    slug: "/blog/beyond-the-screen",
  },
];

export default function BlogPage() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center pt-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From the Orb</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
              Insights, ideas, and updates from the team at Orbiveda.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="bg-card border text-left transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg"
                  data-ai-hint={post.aiHint}
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">{post.date}</CardDescription>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
                    <Link href={post.slug}>
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
