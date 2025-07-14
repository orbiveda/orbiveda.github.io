/*
 * © 2025 Orbiveda™. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const story = {
  title: "Our Story: The Genesis of a Vision",
  content: "Founded on the principle that the next leap in technology must be a leap in consciousness, Orbiveda was born from a desire to reconcile the digital with the divine. Our journey began with a simple question: What if our devices could not only connect us to information, but also to ourselves and each other on a more meaningful level? This question drives our every innovation, as we explore the synthesis of advanced AI, beautiful design, and ancient wisdom to build a more enlightened world, one product at a time."
};

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
    <section id="about" className="py-16 md:py-24">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center pt-10 md:pt-16 max-w-4xl mx-auto mb-16" variants={itemVariants}>
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
              alt="Orbiveda Vision"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="abstract spiritual"
            />
          </div>
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">About Orbiveda</h3>
              <p className="text-lg text-muted-foreground">
                Orbiveda is a next-generation technology company on a mission to blend innovation with purpose. Founded on the belief that cutting-edge advancements should empower humanity, we design solutions that not only transform lives but also nurture the soul.
              </p>
            </div>
             <div>
              <h3 className="text-2xl font-semibold mb-2 text-accent">Our Approach</h3>
              <p className="text-lg text-muted-foreground">
                At Orbiveda, we merge futuristic technologies like Artificial Intelligence and seamless digital experiences with timeless wisdom, creating tools that help people connect deeper—to themselves, their communities, and their world. With a focus on ethical innovation, our vision is to become a global leader in building technology ecosystems that promote mindfulness, growth, and progress.
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

      </motion.div>
    </section>
  );
}
