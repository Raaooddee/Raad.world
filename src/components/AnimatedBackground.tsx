"use client";

const particles = Array.from({ length: 25 }, (_, i) => ({
  x: (i * 47 + 13) % 97,
  y: (i * 31 + 7) % 97,
  size: 2 + (i % 3),
  dur: 18 + (i % 6) * 4,
  delay: (i % 10) * 2.5,
  opacity: 0.35 + (i % 4) * 0.1,
}));

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {/* Big aurora blobs */}
      <div
        className="aurora-1 absolute h-[800px] w-[800px] rounded-full"
        style={{
          top: "-10%",
          left: "-15%",
          background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-2 absolute h-[700px] w-[700px] rounded-full"
        style={{
          top: "10%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-3 absolute h-[600px] w-[600px] rounded-full"
        style={{
          top: "45%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-4 absolute h-[650px] w-[650px] rounded-full"
        style={{
          top: "65%",
          right: "-12%",
          background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-1 absolute h-[500px] w-[500px] rounded-full"
        style={{
          top: "85%",
          left: "20%",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? "#3b82f6" : "#06b6d4",
            opacity: p.opacity,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
