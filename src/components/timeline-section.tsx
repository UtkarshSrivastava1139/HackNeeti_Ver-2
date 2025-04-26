"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";

// Example timeline - replace with actual schedule when available
const timelineItems = [
  {
    id: "item1",
    time: "9:00 AM",
    title: "Registration & Check-in",
    description: "Arrive at the venue, check in, and get your participant kit",
  },
  {
    id: "item2",
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address, introduction to themes, and rules explanation",
  },
  {
    id: "item3",
    time: "11:00 AM",
    title: "Hacking Begins",
    description: "Form teams, brainstorm ideas, and start building your project",
  },
  {
    id: "item4",
    time: "1:00 PM",
    title: "Lunch Break",
    description: "Take a break and refuel with delicious food",
  },
  {
    id: "item5",
    time: "2:00 PM",
    title: "Mentor Sessions",
    description: "Get guidance and feedback from industry experts and mentors",
  },
  {
    id: "item6",
    time: "4:00 PM",
    title: "Project Submissions",
    description: "Submit your projects for evaluation",
  },
  {
    id: "item7",
    time: "4:30 PM",
    title: "Presentations",
    description: "Present your projects to judges and other participants",
  },
  {
    id: "item8",
    time: "6:00 PM",
    title: "Award Ceremony",
    description: "Winners announcement and prize distribution",
  },
];

export function TimelineSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="timeline" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Timeline
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A quick overview of what to expect during the hackathon
          </motion.p>
        </div>

        <div ref={targetRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-16 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: {
    id: string;
    time: string;
    title: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}

function TimelineItem({ item, index, isInView }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const itemInView = useInView(itemRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{
        duration: 0.8,
        delay: 0.1 * index,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      className="relative"
    >
      <div className="md:flex items-start">
        {/* Time */}
        <div className="md:w-32 mb-4 md:mb-0 md:text-right md:pr-8 font-semibold text-primary">
          {item.time}
        </div>

        {/* Circle indicator (only visible on md and above) */}
        <div className="absolute left-16 top-1.5 w-4 h-4 rounded-full bg-primary hidden md:block" style={{ transform: "translateX(-50%)" }} />

        {/* Content */}
        <div className="md:flex-1 md:pl-8">
          <Card className="timeline-item p-5 glass-effect border-primary/20">
            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
            <p className="text-foreground/80">{item.description}</p>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
