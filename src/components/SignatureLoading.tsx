"use client";

import { useEffect, useState } from "react";

export function SignatureLoading() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 2800);
    return () => clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const doneTimer = setTimeout(() => setPhase("done"), 500);
    return () => clearTimeout(doneTimer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`signature-loading fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--bg)] p-4 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] ${phase === "exit" ? "signature-loading--exit" : ""}`}
      aria-hidden="true"
    >
      <div className="signature-reveal w-full max-w-[min(100%,28rem)] px-2 text-center sm:max-w-[min(100%,42rem)] sm:px-4">
        <span
          className="block text-2xl text-[var(--text)] sm:inline-block sm:text-4xl sm:whitespace-nowrap md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-signature)" }}
        >
          Raad AlShaikh Hasan
        </span>
      </div>
    </div>
  );
}
