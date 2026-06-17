"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const chars = [
      "0", "1", "0", "1", "2", "7", "9", "4",
      "{", "}", "<>", "/>", "//", "=>", "===", "!=",
      "#", "&", "*", "@", "$", "%", "+", "=",
      "async", "await", "const", "return", "import",
      "fetch", "map()", "push", "deploy", "build",
      "git", "npm", "run", "dev", "API", "POST",
      "GET", "200", "404", "null", "true", "false",
      "if", "for", "let", "src", "data", "res",
      "0xFF", "key", "log", "test", "init", "new",
    ];

    interface Col {
      x: number;
      y: number;
      speed: number;
      char: string;
      size: number;
      blue: boolean;
    }

    let columns: Col[] = [];
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = [];
      const gap = 32;
      const count = Math.floor(w / gap);
      for (let i = 0; i < count; i++) {
        columns.push({
          x: i * gap + ((i * 13) % 30),
          y: (i * 197) % h,
          speed: 0.4 + (i % 4) * 0.2,
          char: chars[i % chars.length],
          size: 14 + (i % 4) * 4,
          blue: i % 3 === 0,
        });
      }
    }

    let tick = 0;

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx!.clearRect(0, 0, w, h);
      tick++;

      for (const col of columns) {
        col.y += col.speed;
        if (col.y > h + 40) {
          col.y = -40;
          col.char = chars[Math.floor(Math.random() * chars.length)];
        }

        ctx!.font = `600 ${col.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx!.fillStyle = col.blue
          ? "rgba(59, 130, 246, 0.25)"
          : "rgba(255, 255, 255, 0.1)";
        ctx!.fillText(col.char, col.x, col.y);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1]"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
        <div
          className="aurora-1 absolute h-[800px] w-[800px] rounded-full"
          style={{ top: "-10%", left: "-15%", background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
        />
        <div
          className="aurora-2 absolute h-[700px] w-[700px] rounded-full"
          style={{ top: "10%", right: "-15%", background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }}
        />
        <div
          className="aurora-3 absolute h-[600px] w-[600px] rounded-full"
          style={{ top: "45%", left: "-10%", background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
        />
        <div
          className="aurora-4 absolute h-[650px] w-[650px] rounded-full"
          style={{ top: "65%", right: "-12%", background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }}
        />
      </div>
    </>
  );
}
