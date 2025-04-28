"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calculateTimeLeft } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Set hackathon date (example date, replace with actual date)
const hackathonDate = new Date("2025-05-19T09:00:00");

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(hackathonDate));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when component mounts
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(hackathonDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fade-in animation variants with adjusted delays
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.2), // Reduced delay for animations
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Only start animations when on client
  if (!isClient) {
    return null; // Don't render until client-side
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden hero-gradient"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center items-center mb-4">
          {/* First logo comes from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Image
              src="/images/logo-jssaten.png"
              alt="IEEE JSSATEN Logo"
              width={200}
              height={80}
              className="h-auto"
            />
          </motion.div>
        </div>

        <motion.p
            className="text-xl md:text-xl text-primary mt-0 font-semibold tracking-wider "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Presents
          </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-without-tagline.svg"
            alt="HackNeeti Logo"
            width={600}
            height={120}
            className="w-full max-w-2xl mx-auto"
            priority
          />
          <motion.p
            className="text-xl md:text-2xl text-primary mt-0 font-semibold tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            WHERE STRATEGY MEETS TECHNOLOGY
          </motion.p>
        </motion.div>

        {/* Rest of the component remains the same */}
        <motion.div
          className="mx-auto max-w-4xl mb-8"
          custom={2}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([label, value], index) => (
              <div key={label} className="glass-effect p-3 md:p-6 rounded-lg">
                <motion.div
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 + index * 0.1 }}
                >
                  {value}
                </motion.div>
                <div className="text-sm md:text-base text-foreground/80 uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Button
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-lg rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => window.open("https://hackneeti.devfolio.co/", "_blank")}
          >
            Register with Devfolio
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-1 -translate-x-1/2 mx-auto flex justify-center"
        initial={{ opacity: 0, y: -20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0V40M12 40L2 30M12 40L22 30" stroke="hsl(45, 43%, 63%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}