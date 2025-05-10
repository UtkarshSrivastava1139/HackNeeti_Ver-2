"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";

// Example sponsors - replace with actual sponsors when available
const sponsorCategories = [
  {
    id: "platinum",
    title: "Platform Partner",
    sponsors: [
      {
        id: "sponsor1",
        name: "Devfolio",
        logo: "/images/devfolio.svg",
        url: "https://devfolio.co/",
      }
    ]
  },
  {
    id: "gold",
    title: "Partners",
    sponsors: [
      {
        id: "sponsor2",
        name: "GeeksforGeeks",
        logo: "/images/gfg.jpeg", // Placeholder, replace with actual logo
        url: "#",
      },
      {
        id: "sponsor3",
        name: "ETH India",
        logo: "/images/eth.png", // Placeholder, replace with actual logo
        url: "#",
      }
    ]
  }
  // Silver sponsors hidden for now
  /*
  {
    id: "silver",
    title: "Silver Sponsors",
    sponsors: [
      {
        id: "sponsor4",
        name: "Example Silver Sponsor",
        logo: "/images/logo.svg", // Placeholder, replace with actual logo
        url: "#",
      },
      {
        id: "sponsor5",
        name: "Example Silver Sponsor",
        logo: "/images/logo.svg", // Placeholder, replace with actual logo
        url: "#",
      },
      {
        id: "sponsor6",
        name: "Example Silver Sponsor",
        logo: "/images/logo.svg", // Placeholder, replace with actual logo
        url: "#",
      }
    ]
  }
  */
];

export function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="sponsors" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Our Sponsors
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're thankful to our generous sponsors who make HackNeeti possible
          </motion.p>
        </div>

        <div className="space-y-16">
          {sponsorCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + (catIndex * 0.2),
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary text-center">
                {category.title}
              </h3>

              <div className={`grid grid-cols-1 ${
                category.id === 'platinum'
                  ? 'md:grid-cols-1'
                  : category.id === 'gold'
                    ? 'md:grid-cols-2'
                    : 'md:grid-cols-3'
              } gap-6`}>
                {category.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + (catIndex * 0.2) + (index * 0.1),
                      type: "spring",
                      stiffness: 100,
                      damping: 12
                    }}
                    className={`${
                      category.id === 'platinum' ? 'w-full max-w-xl mx-auto' : ''
                    }`}
                  >
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className={`glass-effect h-48 flex items-center justify-center p-6 border-primary/20 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(226,135,67,0.4)] ${
                        category.id === 'platinum' ? 'max-w-xl mx-auto' : ''
                      }`}>
                        <div className="relative h-full w-full">
                          <div className={`absolute inset-0 ${
                            sponsor.name === "Devfolio" || sponsor.name === "GeeksforGeeks" || sponsor.name === "ETH India" ? "bg-white rounded-xl flex items-center justify-center p-4" : ""
                          }`}>
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              fill
                              className={`object-contain py-4 px-6 ${
                                sponsor.name === "Devfolio" || sponsor.name === "GeeksforGeeks" || sponsor.name === "ETH India" ? "!relative !h-full !w-auto" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Become a Sponsor</h3>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-4">
            Support the next generation of innovators and showcase your brand to talented students and tech enthusiasts!
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
            Contact us at <a href="mailto:hackneeti@gmail.com" className="text-primary hover:underline font-medium">hackneeti@gmail.com</a> for sponsorship opportunities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
          >
            Contact for Sponsorship
          </a>
        </motion.div>
      </div>
    </section>
  );
}
