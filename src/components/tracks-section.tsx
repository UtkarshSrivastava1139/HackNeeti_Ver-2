"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FiCode,
  FiDatabase,
  FiShield,
  FiCpu,
  FiGlobe,
  FiZap
} from "react-icons/fi";

const tracks = [
  {
    title: "AI & ML",
    description: "Leverage artificial intelligence and machine learning to build intelligent systems that solve real-world problems.",
    icon: FiCode,
    color: "hsl(260, 72%, 60%)",
  },
  {
    title: "Web 3.0 & Blockchain",
    description: "Explore decentralized technologies, blockchain, and Web 3.0 to create secure and transparent solutions.",
    icon: FiDatabase,
    color: "hsl(200, 72%, 50%)",
  },
  {
    title: "Cyber Security & Digital Forensics",
    description: "Develop innovative solutions to protect digital assets and investigate cyber threats effectively.",
    icon: FiShield,
    color: "hsl(340, 72%, 50%)",
  },
  {
    title: "Hardware & IoT (RFID Based Solutions)",
    description: "Design hardware and IoT solutions using RFID and other technologies to enhance connectivity and automation.",
    icon: FiCpu,
    color: "hsl(120, 50%, 50%)",
  },
  {
    title: "Sustainable Future",
    description: "Create eco-friendly and sustainable solutions to address environmental challenges and promote green technology.",
    icon: FiGlobe,
    color: "hsl(40, 72%, 50%)",
  },
  {
    title: "Open Innovation",
    description: "Bring your unique ideas to life with any technology stack and solve problems creatively and collaboratively.",
    icon: FiZap,
    color: "hsl(300, 70%, 50%)",
  }
];

export function TracksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="tracks" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Tracks & Themes
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose from these exciting tracks and build innovative solutions to real-world problems
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${track.color}30`
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="track-card h-full border-primary/20 overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${track.color}20`, color: track.color }}
                  >
                    <track.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{track.title}</h3>
                  <p className="text-foreground/80">{track.description}</p>

                  <div className="mt-4 flex justify-end">
                    <motion.div
                      className="h-1 rounded-full"
                      style={{
                        backgroundColor: track.color,
                        width: "30%"
                      }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
