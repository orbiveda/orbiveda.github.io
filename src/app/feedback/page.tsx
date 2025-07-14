import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Innovate Corp",
    role: "CEO",
    testimonial: "Orbiveda's approach to technology is a breath of fresh air. Their products have fundamentally changed how our team collaborates and innovates.",
    avatar: "https://placehold.co/40x40.png",
    fallback: "IC"
  },
  {
    name: "Future Thinkers",
    role: "Founder",
    testimonial: "The Spiritual OS is unlike anything I've ever used. It's a powerful tool for focus and personal growth in a digitally cluttered world.",
    avatar: "https://placehold.co/40x40.png",
    fallback: "FT"
  },
  {
    name: "Visionary Ventures",
    role: "Lead Designer",
    testimonial: "The elegance and intuitive design of Orbiveda's Vision Devices are unparalleled. They are truly designing the future of human-computer interaction.",
    avatar: "https://placehold.co/40x40.png",
    fallback: "VV"
  }
];

export default function FeedbackPage() {
  return (
    <section id="feedback" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 text-center">
        <div className="pt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Feedback From Our Partners</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-16">
            We are proud to partner with forward-thinking organizations and individuals.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <Card key={item.name} className="bg-background border border-border/50 text-left flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="text-foreground/80 italic">"{item.testimonial}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={item.avatar} alt={item.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="text-sm text-foreground/60">{item.role}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
