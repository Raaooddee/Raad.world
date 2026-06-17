"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "CS Student",
  "Builder",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 sm:px-8">
      {/* Aurora glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59,130,246,0.1) 0%, transparent 100%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(6,182,212,0.07) 0%, transparent 100%),
            radial-gradient(ellipse 70% 40% at 50% 90%, rgba(59,130,246,0.05) 0%, transparent 100%)
          `,
        }}
      />

      {/* Hero blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="animate-blob absolute -left-[20%] top-[15%] h-[600px] w-[600px] rounded-full bg-[rgba(59,130,246,0.08)] blur-[160px]" />
        <div className="animate-blob-delay-2 absolute -right-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[rgba(6,182,212,0.07)] blur-[160px]" />
      </div>

      {/* Radial vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, var(--bg) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:gap-16 lg:gap-20">
          {/* Left — text */}
          <div className="flex-1 text-center sm:text-left">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--text-subtle)]"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="mt-3 text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-[8rem] lg:leading-[0.9]"
            >
              <span className="animated-gradient-text">Raad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-base sm:tracking-[0.25em]"
            >
              AlShaikh Hasan
            </motion.p>

            {/* Gradient line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease }}
              className="mx-auto mt-5 h-[2px] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] sm:mx-0"
            />

            {/* Cycling roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex h-8 items-center justify-center gap-2 sm:justify-start"
            >
              <span className="text-[var(--text-subtle)]">&gt;</span>
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 25, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -25, opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.35, ease }}
                    className="block text-lg font-semibold leading-8 text-[var(--accent)] sm:text-xl"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-[var(--accent)]"
              >
                _
              </motion.span>
            </motion.div>

            {/* Info */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15, ease }}
              className="mt-4 text-sm leading-relaxed text-[var(--text-subtle)] sm:text-base"
            >
              CS, Data Science &amp; Math @ UW&#8209;Madison
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.35, ease }}
              className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start"
            >
              <a
                href="#projects"
                className="group rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-shadow hover:shadow-xl hover:shadow-[var(--accent)]/35"
              >
                View Projects
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--bg-card)]/50 px-8 py-4 text-sm font-semibold text-[var(--text)] backdrop-blur-sm transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
              >
                Resume&nbsp;&uarr;
              </a>
            </motion.div>
          </div>

          {/* Right — photo with spinning ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="shrink-0"
          >
            <div className="relative">
              {/* Spinning gradient ring */}
              <div
                className="animate-spin-slow absolute -inset-[3px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #06b6d4, #3b82f6, #06b6d4, #3b82f6)",
                }}
              />
              {/* Glow behind */}
              <div className="absolute -inset-3 rounded-full bg-[var(--accent)]/20 blur-xl" />
              {/* Photo */}
              <Image
                src="/raad.png"
                alt="Raad AlShaikh Hasan"
                width={200}
                height={200}
                className="relative h-36 w-36 rounded-full border-[3px] border-[var(--bg)] object-cover sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-subtle)]">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-[var(--text-subtle)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
