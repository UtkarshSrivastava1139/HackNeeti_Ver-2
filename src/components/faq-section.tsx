"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Example FAQs - replace with actual FAQ content
const faqs = [
  {
    id: "faq1",
    question: "Who can participate in HackNeeti?",
    answer: "HackNeeti is open to all undergraduate students from any college or university with a valid ID card. Both individuals and teams of up to 4 members are welcome to participate.",
  },
  {
    id: "faq2",
    question: "Is there a registration fee?",
    answer: "No, participation in HackNeeti is completely free of charge. We believe in providing equal opportunities for all students to showcase their talents.",
  },
  {
    id: "faq3",
    question: "Do I need to have a team to participate?",
    answer: "You can register either as an individual or as a team of up to 4 members. Individual participants will have the opportunity to form teams during the networking session at the beginning of the event.",
  },
  {
    id: "faq4",
    question: "What should I bring to the hackathon?",
    answer: "Participants should bring their own laptops, chargers, and any other hardware components they plan to use for their projects. Food, beverages, and workspace will be provided at the venue.",
  },
  {
    id: "faq5",
    question: "Will there be mentors available during the hackathon?",
    answer: "Yes, experienced mentors from various technical domains will be available throughout the event to guide participants and provide assistance with their projects.",
  },
  {
    id: "faq6",
    question: "How will the projects be evaluated?",
    answer: "Projects will be evaluated based on innovation, technical complexity, practicality, presentation, and relevance to the chosen track. A panel of judges from industry and academia will assess all submissions.",
  },
  {
    id: "faq7",
    question: "Is there a code of conduct for the event?",
    answer: "Yes, all participants are expected to follow the hackathon's code of conduct, which promotes a respectful, inclusive, and collaborative environment. The code of conduct will be shared with all registered participants.",
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="faq" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions about HackNeeti
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={faq.id}
                  className="glass-effect border border-primary/20 overflow-hidden rounded-lg"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-primary/10 transition-colors">
                    <span className="text-left font-semibold text-primary text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-lg text-foreground/80">
              Still have questions? Feel free to{" "}
              <a
                href="#contact"
                className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors"
              >
                contact us
              </a>
              {" "}and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
