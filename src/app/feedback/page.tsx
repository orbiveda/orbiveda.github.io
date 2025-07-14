"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, Instagram } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

const feedbackFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function FeedbackPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof feedbackFormSchema>) {
    try {
      await addDoc(collection(db, "feedback"), values);
      toast({
        title: "Feedback Sent!",
        description: "Thank you for your feedback. We appreciate your insights.",
      });
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Error",
        description: "There was an error sending your feedback. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="feedback" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center pt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
            Have a question or want to share some feedback? Send us a message.
            </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
                <Card className="bg-card border-border/50 p-6">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            Contact Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-6 text-lg">
                        <div className="flex items-center gap-4">
                            <Mail className="text-primary w-6 h-6"/>
                            <a href="mailto:orbiveda@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">orbiveda@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4">
                           <Instagram className="text-primary w-6 h-6"/>
                            <a href="https://instagram.com/orbiveda" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">@orbiveda</a>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-3">
                 <Card className="bg-card border-border/50 p-6 md:p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                <Input className="bg-background" placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input className="bg-background" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                <Textarea className="bg-background" placeholder="Share your feedback with us..." rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                            Send Feedback <Send className="ml-2 w-4 h-4"/>
                        </Button>
                        </form>
                    </Form>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
