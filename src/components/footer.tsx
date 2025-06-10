"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background to-transparent"></div>

      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-effect rounded-xl p-8 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <Link href="#home" className="inline-block">
                <Image
                  src="/images/logo.svg"
                  alt="HackNeeti Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-foreground/70 text-sm">
                Where Strategy Meets Technology
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/hackneeti.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="https://linkedin.com/company/hackneeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://x.com/Hackneeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Timeline", "Tracks", "Prizes", "FAQ", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start space-x-2 text-sm">
                  <span className="text-primary">Email:</span>
                  <a
                    href="mailto:hackneeti@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    hackneeti@gmail.com
                  </a>
                </li>
      
                <li className="flex items-start space-x-2 text-sm">
                  <span className="text-primary">Address:</span>
                  <span>
                    JSS Academy of Technical Education,<br />
                    C-20/1, Sector 62, Noida, Uttar Pradesh 201301
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Organized By</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/logo-jssaten.png"
                    alt="IEEE JSSATEN Logo"
                    width={40}
                    height={20}
                    className="h-6 w-auto"
                  />
                  <span className="text-sm text-foreground/90">IEEE JSSATEN Student Branch</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/logo-jssun.png"
                    alt="IEEE JSSATEN Logo"
                    width={40}
                    height={20}
                    className="h-6 w-auto"
                  />
                  <span className="text-sm text-foreground/90">IEEE JSSUN Student Branch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-primary/20 my-8" />          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col space-y-2 md:order-1">
              <p className="text-foreground/70 text-sm mb-1">
                © {currentYear} HackNeeti. All Rights Reserved.
              </p>
              <p className="text-foreground/70 text-sm">
                Developed & Managed by{" "}
                <a href="https://www.utkarshsrivastava.me/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Utkarsh Srivastava
                </a>{" "}
                &{" "}
                <a href="https://www.linkedin.com/in/yash-gupta-a8765c/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Yash Gupta
                </a>
              </p>
            </div>

            <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
