/*
 * © 2025 Orbiveda™. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "TrueBond: Redefining Human Interaction",
    date: "October 26, 2024",
    description: "In a world oversaturated with notifications and digital noise, TrueBond is a bold step towards genuine and effortless communication. Unlike traditional video calls or static messaging, TrueBond leverages real-time gesture recognition, AI-assisted visual cues, and immersive UI to make conversations more human-centric.",
    image: "https://placehold.co/600x400.png",
    aiHint: "futuristic connection",
    slug: "/blog/truebond-redefining-interaction",
  },
  {
    title: "BhaktiPath App: Technology Meets Spirituality",
    date: "October 15, 2024",
    description: "In today’s fast-paced digital world, BhaktiPath is Orbiveda’s answer to seekers longing for balance and depth. It combines AI with timeless spiritual wisdom to help users plan their devotional routines, access scriptures, and connect with devotees worldwide. This isn’t just an app—it’s a companion for your spiritual journey.",
    image: "/img/bhaktipath-app.png",
    aiHint: "digital spirituality",
    slug: "/blog/bhaktipath-digital-devotion",
  },
];

export default function BlogPage() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From the Orb</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
              Insights, ideas, and updates from the team at Orbiveda.
            </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="bg-card border text-left transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover"
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
