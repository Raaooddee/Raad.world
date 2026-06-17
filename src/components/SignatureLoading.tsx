"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const TARGET = "RAAD";
const LOCK_DELAY = 320;
const INITIAL_DELAY = 400;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function SignatureLoading() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const [display, setDisplay] = useState<string[]>(() =>
    Array(TARGET.length).fill(""),
  );
  const [locked, setLocked] = useState(0);
  const [showSub, setShowSub] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevLocked = useRef(0);

  useEffect(() => {
    if (phase !== "loading") return;

    const id = setInterval(() => {
      setDisplay((prev) =>
        prev.map((_, i) => (i < locked ? TARGET[i] : randomChar())),
      );
    }, 45);

    return () => clearInterval(id);
  }, [phase, locked]);

  useEffect(() => {
    if (phase !== "loading") return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < TARGET.length; i++) {
      timers.push(
        setTimeout(() => {
          prevLocked.current = i;
          setLocked(i + 1);
        }, INITIAL_DELAY + i * LOCK_DELAY),
      );
    }

    timers.push(
      setTimeout(
        () => setShowSub(true),
        INITIAL_DELAY + TARGET.length * LOCK_DELAY + 250,
      ),
    );

    timers.push(
      setTimeout(
        () => setPhase("exit"),
        INITIAL_DELAY + TARGET.length * LOCK_DELAY + 1000,
      ),
    );

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") return;

    const id = setInterval(() => {
      setProgress((p) => Math.min(100, p + 2 + Math.random() * 4));
    }, 50);

    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => setPhase("done"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
      animate={
        phase === "exit" ? { opacity: 0, scale: 0.97, y: -15 } : {}
      }
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Counter top-right */}
      <div className="absolute right-6 top-6 font-mono text-[11px] tabular-nums tracking-wider text-[var(--text-subtle)] sm:right-10 sm:top-10">
        {String(Math.min(100, Math.floor(progress))).padStart(3, "0")}
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center">
        {/* Scramble letters */}
        <div className="flex" aria-hidden>
          {display.map((char, i) => {
            const isLocked = i < locked;
            const justLocked = isLocked && i === locked - 1;

            return (
              <motion.span
                key={i}
                className={`inline-block w-[0.7em] text-center text-5xl font-bold sm:text-7xl lg:text-8xl ${
                  isLocked ? "text-[var(--text)]" : "text-[var(--text-subtle)]/40"
                }`}
                animate={
                  justLocked
                    ? {
                        scale: [1.2, 1],
                        color: [
                          "var(--accent)",
                          "var(--text)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {char || " "}
              </motion.span>
            );
          })}
        </div>

        {/* Gradient line */}
        <motion.div
          className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{
            duration: 1.6,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--text-subtle)] sm:text-[11px]"
          initial={{ opacity: 0, y: 6 }}
          animate={showSub ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          ALSHAIKH HASAN
        </motion.p>
      </div>
    </motion.div>
  );
}
