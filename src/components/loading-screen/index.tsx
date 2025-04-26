"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [showChessAnimation, setShowChessAnimation] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [startTransition, setStartTransition] = useState(false);
  const [typedText, setTypedText] = useState("");
  const text = "CHECKMATE";

  useEffect(() => {
    // Show chess animation for 2.5 seconds
    const chessTimer = setTimeout(() => {
      setShowChessAnimation(false);
      setShowLogo(true);
    }, 2500);

    // Start logo transition after 2 more seconds
    const transitionTimer = setTimeout(() => {
      setStartTransition(true);
    }, 4500);

    // Complete loading after transition delay
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    // Typewriter animation effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust speed of typing here

    return () => {
      clearTimeout(chessTimer);
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
      clearInterval(typingInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: startTransition ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      >
        {showChessAnimation && (
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* White King */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: -20, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="chess-piece">
                <path d="M12 3L12 5M12 5L12 7M12 5H10M12 5H14M8 21H16M9 17H15M9 17L8 21M9 17C9 15 11 14.5 12 13C13 14.5 15 15 15 17M15 17L16 21M10 10L12 7M12 7L14 10M14 10L13 12H11L10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            
            {/* Black Queen */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ 
                x: 20, 
                opacity: 1,
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 0.5,
                rotate: { duration: 0.3, delay: 0.5 }
              }}
              className="absolute"
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="chess-piece">
                <path d="M12 3C11.2 3 10.5 3.7 10.5 4.5C10.5 5.3 11.2 6 12 6C12.8 6 13.5 5.3 13.5 4.5C13.5 3.7 12.8 3 12 3ZM7.5 6C6.7 6 6 6.7 6 7.5C6 8.3 6.7 9 7.5 9C8.3 9 9 8.3 9 7.5C9 6.7 8.3 6 7.5 6ZM16.5 6C15.7 6 15 6.7 15 7.5C15 8.3 15.7 9 16.5 9C17.3 9 18 8.3 18 7.5C18 6.7 17.3 6 16.5 6ZM4.5 12C3.7 12 3 12.7 3 13.5C3 14.3 3.7 15 4.5 15C5.3 15 6 14.3 6 13.5C6 12.7 5.3 12 4.5 12ZM19.5 12C18.7 12 18 12.7 18 13.5C18 14.3 18.7 15 19.5 15C20.3 15 21 14.3 21 13.5C21 12.7 20.3 12 19.5 12ZM7.5 17L9 11L12 8L15 11L16.5 17H7.5ZM17.34 18L18 15L21 13.5L18 12L17.34 9L19.5 7.5L16.5 6L15 3L12 4.5L9 3L7.5 6L4.5 7.5L6.66 9L6 12L3 13.5L6 15L6.66 18L9 15H15L17.34 18ZM15 19H9L8 22H16L15 19Z" fill="white"/>
              </svg>
            </motion.div>
            
            {/* Checkmate text with typewriter effect - centered below chess pieces */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute bottom-[-0px] left-1/2 -translate-x-1/2 w-full text-center"
            >
              <div className="overflow-hidden">
                {typedText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-primary text-2xl font-bold inline-block"
                    initial={{ 
                      y: 50, 
                      opacity: 0,
                      rotateY: 90
                    }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      rotateY: 0
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
        
        {showLogo && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: startTransition ? 0.8 : 1, 
              opacity: 1,
              y: startTransition ? -50 : 0
            }}
            transition={{ 
              duration: 0.8,
              y: { duration: 0.8 }
            }}
            className="flex flex-col items-center"
          >
            <Image 
              src="/images/logo.svg"
              alt="HackNeeti Logo" 
              width={600}
              height={120}
              className="w-full max-w-2xl mx-auto"
              priority
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}