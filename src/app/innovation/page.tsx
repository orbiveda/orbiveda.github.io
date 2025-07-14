"use client";

import { motion } from "framer-motion";
import { BrainCircuit, HeartHandshake, Zap } from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "Conscious AI",
    description: "We're moving beyond simple algorithms to create AI that understands context, emotion, and ethical nuances, fostering a deeper partnership between humans and machines.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centric Design",
    description: "Our technology is built around the human experience. We prioritize well-being, mindfulness, and genuine connection over metrics and engagement."
  },
  {
    icon: Zap,
    title: "Purpose-Driven Innovation",
    description: "Every product we create is designed to solve a meaningful problem and empower individuals to live more balanced, purposeful, and connected lives."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

export default function InnovationPage() {
  return (
    <section id="innovation" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center pt-20 max-w-4xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Where Technology Meets Purpose
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Orbiveda, innovation isn't just about creating new things. It's about creating a new way of being. We are pioneering the intersection of advanced technology and profound human wisdom to build a future that is both intelligent and enlightened.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card/50 border border-border/50 rounded-lg p-8 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent/90">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
