"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            About HackNeeti
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center items-center">
            <div className="rounded-lg overflow-hidden glass-effect border border-primary/30 p-8 flex items-center justify-center shadow-lg" style={{ maxWidth: "500px", height: "300px" }}>
              <Image
                src="/images/logo.svg"
                alt="HackNeeti Logo"
                width={400}
                height={200}
                className="h-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <p className="text-lg mb-6">
              HackNeeti is the first-ever flagship hackathon hosted by the IEEE JSSATEN Student Branch. This single-day, 8-hour event will bring together top student innovators, developers, and tech enthusiasts to build cutting-edge solutions for real-world problems.
            </p>
            <p className="text-lg">
              With a focus on domains like AI/ML, Web 3.0, Cybersecurity, Hardware, and IoT (RFID-based systems), HackNeeti is a platform for participants to learn, build, and innovate under expert mentorship and competitive pressure.
            </p>
          </motion.div>
        </motion.div>

        <div className="diamond-divider">
          <div className="diamond"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-effect border-primary/20 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/jssaten-logo.png"
                    alt="IEEE JSSUN Logo"
                    width={80}
                    height={30}
                    className="h-auto"
                  />
                  <h3 className="text-xl font-bold ml-4">About JSS Academy of Technical Education, Noida</h3>
                </div>
                <p className="text-foreground/80">
                Established in 1998 by JSS Mahavidyapeetha, JSS Academy of Technical Education Noida (JSSATEN) is a premier institution located in the heart of Noida, Uttar Pradesh. With over 4000 students and 250+ experienced faculty members, it is renowned for its excellence in discipline, teaching, training, and placements, fostering an environment of academic and professional growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>
       

          <motion.div variants={itemVariants}>
            <Card className="glass-effect border-primary/20 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/logo-ieee-jssaten.png"
                    alt="IEEE JSSATEN Logo"
                    width={150}
                    height={30}
                    className="h-auto"
                  />
                  <h3 className="text-xl font-bold ml-4">About IEEE JSSATE NOIDA Student Branch</h3>
            
                </div>
                <p className="text-foreground/80">
                  The IEEE JSSATEN Student Branch is a dynamic and active part of the global IEEE community, established at JSS Academy of Technical Education, Noida. It serves as a platform for students to explore, innovate, and contribute to the advancement of technology through various technical, professional, and community-oriented activities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          </motion.div>
      </div>
    </section>
  );
}