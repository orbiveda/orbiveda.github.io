import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Tech Visionary",
        title: "CEO, Future Forward Inc.",
        avatar: "TV",
        quote: "Orbiveda is not just building products; they are shaping a new philosophy for technology. Their vision is exactly what the industry needs right now."
    },
    {
        name: "Spiritual Leader",
        title: "Mindfulness Institute",
        avatar: "SL",
        quote: "The seamless blend of ancient wisdom and modern innovation in Orbiveda's approach is profoundly inspiring. It's technology that serves the soul."
    },
    {
        name: "Early Adopter",
        title: "Beta Tester",
        avatar: "EA",
        quote: "Using their early prototypes feels like a glimpse into a more harmonious future. The focus on well-being and connection is palpable."
    }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-2 bg-accent/10 rounded-full mb-4 inline-block">
            <span className="text-accent font-semibold px-2">What Others Are Saying</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Voices of Our Community</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border/80 p-6 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="p-0 pb-6">
                        <p className="text-lg text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    </CardContent>
                    <CardHeader className="p-0 flex flex-row items-center gap-4 border-t border-border/50 pt-6">
                        <Avatar>
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
