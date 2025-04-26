"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Example speakers - replace with actual speakers when available
const speakers = [
  {
    id: "speaker1",
    name: "Dr. Anand Kumar",
    role: "AI Research Scientist",
    company: "Tech Innovations",
    image: "/images/hackneeti.png", // Placeholder, replace with actual image
    bio: "Dr. Kumar is a leading AI researcher with over 10 years of experience in developing cutting-edge AI solutions for real-world problems.",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      website: "https://example.com/"
    }
  },
  {
    id: "speaker2",
    name: "Priya Sharma",
    role: "Blockchain Expert",
    company: "Web3 Solutions",
    image: "/images/hackneeti.png", // Placeholder, replace with actual image
    bio: "Priya is a blockchain specialist who has been working on decentralized technologies since 2016, with a focus on smart contracts and DeFi.",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    }
  },
  {
    id: "speaker3",
    name: "Rahul Verma",
    role: "Cybersecurity Specialist",
    company: "SecureNet",
    image: "/images/hackneeti.png", // Placeholder, replace with actual image
    bio: "Rahul has helped secure numerous high-profile applications and networks, specializing in penetration testing and vulnerability assessment.",
    socials: {
      linkedin: "https://linkedin.com/",
      website: "https://example.com/"
    }
  },
  {
    id: "speaker4",
    name: "Neha Gupta",
    role: "IoT Solutions Architect",
    company: "Smart Systems",
    image: "/images/hackneeti.png", // Placeholder, replace with actual image
    bio: "Neha designs and implements IoT architectures for smart cities and industrial applications, with expertise in RFID and sensor networks.",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    }
  },
];

export function SpeakersSection() {
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
    <section id="speakers" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Speakers & Mentors
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from industry experts who will guide and inspire you throughout the hackathon
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(206, 185, 118, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="glass-effect h-full border-primary/20 overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden cursor-pointer">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="glass-effect w-80 border-primary/20">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-semibold">{speaker.name}</h4>
                          <p className="text-sm text-foreground/70">{speaker.bio}</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <h3 className="text-xl font-bold text-primary">{speaker.name}</h3>
                  <p className="text-foreground/80 mb-1">{speaker.role}</p>
                  <p className="text-foreground/60 text-sm mb-4">{speaker.company}</p>

                  <div className="flex space-x-3 mt-auto">
                    {speaker.socials.linkedin && (
                      <a
                        href={speaker.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                    )}

                    {speaker.socials.twitter && (
                      <a
                        href={speaker.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <FaTwitter size={16} />
                      </a>
                    )}

                    {speaker.socials.website && (
                      <a
                        href={speaker.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <FaGlobe size={16} />
                      </a>
                    )}
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
