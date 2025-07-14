"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const story = {
  title: "Our Story: The Genesis of a Vision",
  content: "Founded on the principle that the next leap in technology must be a leap in consciousness, Orbiveda was born from a desire to reconcile the digital with the divine. Our journey began with a simple question: What if our devices could not only connect us to information, but also to ourselves and each other on a more meaningful level? This question drives our every innovation, as we explore the synthesis of advanced AI, beautiful design, and ancient wisdom to build a more enlightened world, one product at a time."
};

const timelineEvents = [
  {
    year: "2023",
    title: "The Spark of an Idea",
    description: "A small group of technologists and philosophers questioned the trajectory of modern tech and envisioned a more human-centric future."
  },
  {
    year: "2024",
    title: "Orbiveda is Born",
    description: "The company was founded with a clear mission: to blend cutting-edge innovation with timeless wisdom, creating technology that serves humanity."
  },
  {
    year: "2025",
    title: "Building the Foundation",
    description: "Development begins on our foundational products: TrueBond, BhaktiConnect, and the AI Timetable Planner, setting the stage for a new era of tech."
  },
  {
    year: "Future",
    title: "A New Paradigm",
    description: "We aim to launch our first suite of products, inviting the world to experience a more soulful, connected, and purposeful digital existence."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function AboutPage() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background text-foreground">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center pt-20 max-w-4xl mx-auto mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Fusing <span className="text-primary">Innovation</span> with Timeless <span className="text-accent/80">Wisdom</span>
            </h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our mission is to forge a new paradigm where technology is not just intelligent, but intuitive, soulful, and an extension of human potential.
            </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-12 items-center mb-24" variants={itemVariants}>
          <div className="flex justify-center order-1 md:order-2">
            <Image 
              src="https://placehold.co/600x600.png"
              alt="Abstract representation of technology and soul"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="abstract technology"
            />
          </div>
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                At Orbiveda, we believe technology should not only be intelligent but also intuitive and soulful. Our mission is to forge a new paradigm where cutting-edge innovation harmonizes with deep-seated spiritual wisdom, creating products that elevate human consciousness.
              </p>
            </div>
             <div>
              <h3 className="text-2xl font-semibold mb-2 text-accent">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                Our vision is a future where technology acts as a bridge to deeper self-understanding and universal connection. We are dedicated to crafting elegant, futuristic solutions that empower individuals on their journey of growth and discovery.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="text-center max-w-4xl mx-auto mb-24" variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-4 text-primary">{story.title}</h3>
            <p className="text-lg text-muted-foreground">
              {story.content}
            </p>
        </motion.div>
        
        <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12 text-accent">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className="mb-8 flex justify-between items-center w-full"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}></div>
                <div className="z-10 flex items-center order-2 bg-primary text-primary-foreground shadow-xl w-12 h-12 rounded-full justify-center text-lg font-bold">
                  {event.year}
                </div>
                <div className={`w-5/12 p-6 bg-card border rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 ${index % 2 === 0 ? 'order-3 text-left' : 'order-1 text-right'}`}>
                  <h4 className="font-bold text-xl mb-1 text-primary">{event.title}</h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
