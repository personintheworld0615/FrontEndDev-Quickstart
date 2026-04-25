"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Fade in content
    gsap.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-oat relative overflow-hidden">
      {/* Decorative Background Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[80vw] h-[80vw] border border-charcoal rounded-full" />
      </motion.div>

      <div className="hero-content opacity-0 translate-y-12 z-10 text-center max-w-2xl">
        <header className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral mb-4">
            System Initialized
          </p>
          <h1 className="text-6xl md:text-8xl font-newsreader italic text-charcoal leading-tight text-balance">
            Design Engineering <br /> Quickstart
          </h1>
        </header>

        <section className="space-y-8">
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-newsreader">
            A high-fidelity foundation for building world-class digital instruments. 
            Pruned to elite skills, powered by GSAP, Framer Motion, and Tailwind v4.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4">
            <button className="px-8 py-3 bg-charcoal text-oat rounded-full font-mono text-sm hover:scale-105 active:scale-95 transition-transform">
              Explore Documentation
            </button>
            <button className="px-8 py-3 border border-charcoal text-charcoal rounded-full font-mono text-sm hover:bg-charcoal/5 transition-colors">
              View Components
            </button>
          </div>
        </section>
      </div>

      <footer className="absolute bottom-8 left-8 right-8 flex justify-between items-end font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
        <div>© 2026 AntiGravity</div>
        <div className="flex gap-4">
          <span>Next.js 15</span>
          <span>Tailwind v4</span>
          <span>GSAP 3</span>
        </div>
      </footer>
    </main>
  );
}
