"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

const prizes = [
  {
    id: "prize1",
    position: "1st",
    title: "First Prize",
    amount: "TBD",
    icon: FaTrophy,
    color: "hsl(45, 94%, 60%)",
    // extras: ["Internship Opportunities", "Cloud Credits"]
    extras: ["Details coming soon!"]
  },
  {
    id: "prize2",
    position: "2nd",
    title: "Second Prize",
    amount: "TBD",
    icon: FaMedal,
    color: "hsl(0, 0%, 80%)",
    // extras: ["Mentorship Program", "Developer Tools License"]
    extras: ["Details coming soon!"]
  },
  {
    id: "prize3",
    position: "3rd",
    title: "Third Prize",
    amount: "TBD",
    icon: FaAward,
    color: "hsl(30, 80%, 40%)",
    // extras: ["Swag Kit", "Online Courses"]
    extras: ["Details coming soon!"]
  },
];

export function PrizesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="prizes" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Prizes
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Amazing rewards await the winning teams!
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-6 lg:gap-10 mt-8">
          {/* Second Prize (Left in desktop, second in mobile) */}
          <PrizeCard 
            key={prizes[1].id}
            prize={prizes[1]}
            index={0}
            height="h-full md:h-[400px]"
            isInView={isInView}
            className="order-2 md:order-1"
          />

          {/* First Prize (Center in desktop, first in mobile) */}
          <PrizeCard
            key={prizes[0].id}
            prize={prizes[0]}
            index={1}
            height="h-full md:h-[450px]"
            isInView={isInView}
            className="order-1 md:order-2"
          />
          
          {/* Third Prize (Right in desktop, third in mobile) */}
          <PrizeCard
            key={prizes[2].id}
            prize={prizes[2]}
            index={2}
            height="h-full md:h-[350px]"
            isInView={isInView}
            className="order-3"
          />
        </div>

        {/* Special prizes and track prizes */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Special Category Prizes</h3>
          <p className="text-lg text-foreground/80 mb-8">
            Track-wise prizes and special recognition awards will be announced soon!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="glass-effect rounded-lg p-4 border border-primary/30">
              <p className="font-semibold text-primary">Best UI/UX Design</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-primary/30">
              <p className="font-semibold text-primary">Most Innovative Solution</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-primary/30">
              <p className="font-semibold text-primary">Best Use of AI</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-primary/30">
              <p className="font-semibold text-primary">Best Sustainable Solution</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-primary/30">
              <p className="font-semibold text-primary">Best Hardware Hack</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border border-primary/30">
              <p className="font-semibold text-primary">Best Freshman Team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface PrizeCardProps {
  prize: {
    id: string;
    position: string;
    title: string;
    amount: string;
    icon: React.ElementType;
    color: string;
    extras: string[];
  };
  index: number;
  height: string;
  isInView: boolean;
  className?: string;
}

function PrizeCard({ prize, index, height, isInView, className }: PrizeCardProps) {
  const Icon = prize.icon;
  const delayMultiplier = index;

  return (
    <motion.div
      className={`prize-card ${height} w-full md:w-80 flex flex-col items-center justify-start p-6 md:p-8 ${className}`}
      style={{
        boxShadow: `0 10px 30px ${prize.color}20`,
        borderColor: `${prize.color}40`,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: 0.3 + (delayMultiplier * 0.15),
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{
          backgroundColor: `${prize.color}20`,
          border: `2px solid ${prize.color}`,
        }}
      >
        <Icon size={40} color={prize.color} />
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{
          delay: 0.6 + (delayMultiplier * 0.15),
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="bg-gradient-to-b from-primary/30 to-transparent rounded-full w-16 h-16 flex items-center justify-center mb-4"
      >
        <span className="text-3xl font-bold text-primary">{prize.position}</span>
      </motion.div>

      <h3 className="text-2xl font-bold text-primary mb-2">{prize.title}</h3>
      <p className="text-3xl font-bold mb-6">{prize.amount}</p>

      <div className="mt-auto w-full">
        <div className="h-px w-full bg-primary/20 mb-4" />
        <h4 className="text-lg font-semibold mb-2 text-primary/90">Includes:</h4>
        <ul className="space-y-2">
          {prize.extras.map((extra, i) => (
            <motion.li
              key={`${prize.id}-extra-${i}`}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.8 + (i * 0.1) + (delayMultiplier * 0.15) }}
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2" />
              <span className="text-foreground/80">{extra}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}