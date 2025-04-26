"use client";

import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TracksSection } from "@/components/tracks-section";
import { SpeakersSection } from "@/components/speakers-section";
import { TimelineSection } from "@/components/timeline-section";
import { PrizesSection } from "@/components/prizes-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Function to handle when loading is complete
  const handleLoadingComplete = () => {
    setLoading(false);
    
    // Small delay before showing content to ensure animations work
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <main className={`min-h-screen relative transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/65 -z-10 pointer-events-none" />
        
        <Toaster richColors position="top-center" />
        <Navbar />
        
        {showContent ? (
          <>
            <HeroSection />
            
            {/* Content container with 80% width */}
            <div className="w-[80%] mx-auto">
              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <AboutSection />

              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <TracksSection />

              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <TimelineSection />

              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <PrizesSection />

              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <SponsorsSection />

              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <FAQSection />

              <div className="diamond-divider">
                <div className="diamond" />
              </div>

              <ContactSection />
            </div>
            
            <Footer />
          </>
        ) : (
          <div className="h-screen"></div> // Empty div as placeholder while loading
        )}
      </main>
    </>
  );
}