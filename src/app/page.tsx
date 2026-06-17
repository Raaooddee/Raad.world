import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { experience, education, skills } from "@/data/resume";
import {
  ScrollReveal,
  BlurReveal,
  ScaleReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
    </div>
  );
}

function shortPeriod(period: string) {
  return period
    .replace("January", "Jan")
    .replace("February", "Feb")
    .replace("March", "Mar")
    .replace("April", "Apr")
    .replace("August", "Aug")
    .replace("September", "Sep")
    .replace("October", "Oct")
    .replace("November", "Nov")
    .replace("December", "Dec");
}

function ProjectCard({ p }: { p: Project }) {
  const projectUrl = p.links[0]?.href;

  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-500 hover:border-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--glow)]">
      {/* Image / Video / Emoji area */}
      {p.image ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden border-b border-[var(--border)]"
        >
          <div className="flex items-center gap-2 bg-[var(--bg-elevated)] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-[var(--bg)]/60 px-3 py-1 font-mono text-[10px] text-[var(--text-subtle)]">
              {projectUrl?.replace(/^https?:\/\//, "") || ""}
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={p.image}
              alt={`${p.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </a>
      ) : p.video ? (
        <a
          href={p.video}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video overflow-hidden border-b border-[var(--border)]"
        >
          {/* Graph-node dot grid background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.06] via-[var(--bg-card)] to-[var(--accent-2)]/[0.06]" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--accent) 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Decorative graph edges */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            preserveAspectRatio="none"
          >
            <line x1="10%" y1="20%" x2="35%" y2="45%" stroke="var(--accent)" strokeWidth="1" />
            <line x1="35%" y1="45%" x2="60%" y2="30%" stroke="var(--accent)" strokeWidth="1" />
            <line x1="60%" y1="30%" x2="85%" y2="55%" stroke="var(--accent)" strokeWidth="1" />
            <line x1="85%" y1="55%" x2="70%" y2="80%" stroke="var(--accent-2)" strokeWidth="1" />
            <line x1="35%" y1="45%" x2="25%" y2="75%" stroke="var(--accent-2)" strokeWidth="1" />
            <line x1="60%" y1="30%" x2="45%" y2="70%" stroke="var(--accent)" strokeWidth="1" />
          </svg>
          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--text)]/10 bg-[var(--bg-card)]/80 shadow-2xl shadow-[var(--glow)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-8 w-8 fill-current text-[var(--accent)]"
              >
                <polygon points="6,3 20,12 6,21" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--text-muted)]">
              Watch Demo
            </span>
          </div>
        </a>
      ) : (
        <div className="flex aspect-[2.5/1] items-center justify-center border-b border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/[0.06] to-[var(--accent-2)]/[0.06]">
          <span className="text-7xl opacity-70 transition-transform duration-500 group-hover:scale-110">
            {p.imagePlaceholder}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="mb-5">
          <h3 className="text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{p.tagline}</p>
          <p className="mt-1 text-xs text-[var(--text-subtle)]">
            {p.period}
            {p.role && ` · ${p.role}`}
          </p>
        </div>

        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
          {p.description}
        </p>

        <ul className="mb-6 space-y-3 text-sm">
          {p.highlights.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 shrink-0 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                &#x2726;
              </span>
              <span className="text-[var(--text-muted)]">{item}</span>
            </li>
          ))}
        </ul>

        {p.whatItIsNot && (
          <p className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm italic text-[var(--text-subtle)]">
            What it&apos;s not: {p.whatItIsNot}
          </p>
        )}

        {p.links.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-3">
            {p.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/20 transition-all hover:shadow-xl hover:shadow-[var(--accent)]/30"
              >
                {link.label}
                <span className="transition-transform group-hover/link:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {p.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingNav />
      <HeroSection />

      <main className="relative z-[2] mx-auto max-w-5xl px-4 sm:px-8">
        {/* ── About ──────────────────────────────────── */}
        <section id="about" className="scroll-mt-24 py-24 sm:py-40">
          <ScrollReveal>
            <SectionHeading label="About" title="About Me" />
          </ScrollReveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-5">
            <BlurReveal className="sm:col-span-3">
              <div className="space-y-5 leading-relaxed text-[var(--text-muted)]">
                <p>
                  I&apos;m Raad. CS and Data Science at UW&ndash;Madison,
                  math minor, originally from Amman, Jordan. I like building
                  things that actually help people, whether that&apos;s an
                  AI platform for a government ministry or a simple site that
                  helps you find a charity to donate to.
                </p>
                <p>
                  Huge Arsenal fan. Watching the Premier League is easily my
                  favorite thing to do. I also play tennis and basketball
                  whenever I get the chance, and I DJ on the side for fun.
                </p>
              </div>
            </BlurReveal>

            <ScrollReveal
              className="sm:col-span-2"
              delay={0.2}
              direction="right"
            >
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-subtle)]">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)]">
                      Madison, WI
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-subtle)]">
                      Originally from
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)]">
                      Amman, Jordan
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-subtle)]">
                      Graduation
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)]">
                      May 2028
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-subtle)]">
                      Focus
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--text)]">
                      AI &middot; Full-Stack &middot; Data &middot; Product
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/20 transition-shadow hover:shadow-xl hover:shadow-[var(--accent)]/30"
                    >
                      View Resume &uarr;
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────── */}
        <section id="experience" className="scroll-mt-24 py-24 sm:py-40">
          <ScrollReveal>
            <SectionHeading label="Work" title="Experience" />
          </ScrollReveal>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-[15px] bottom-4 top-2 w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--accent-2)]/20 to-transparent sm:left-[168px]" />

            <div className="space-y-0">
              {experience.map((job, idx) => (
                <ScrollReveal
                  key={`${job.org}-${job.period}`}
                  delay={idx * 0.05}
                  direction="right"
                >
                  <div className="relative flex gap-5 pb-14 last:pb-0 sm:gap-6">
                    {/* Date column */}
                    <div className="hidden w-[150px] shrink-0 pt-2 text-right sm:block">
                      <p className="text-xs font-semibold leading-relaxed text-[var(--text-muted)]">
                        {shortPeriod(job.period)}
                      </p>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative z-10 mt-2 shrink-0">
                      <div className="h-[13px] w-[13px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_12px_rgba(59,130,246,0.3)] sm:h-[15px] sm:w-[15px]" />
                    </div>

                    {/* Card */}
                    <div className="min-w-0 flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:border-[var(--accent)]/20 hover:shadow-lg hover:shadow-[var(--glow)] sm:p-7">
                      <div className="flex items-start gap-4">
                        {/* Company logo */}
                        {job.logo ? (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                            <Image
                              src={job.logo}
                              alt=""
                              width={44}
                              height={44}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-2)]/15 text-sm font-bold text-[var(--accent)]">
                            {job.org.charAt(0)}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-bold text-[var(--text)] sm:text-lg">
                            {job.title}
                          </h3>
                          <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                            {job.org}
                          </p>
                          <p className="mt-0.5 text-xs text-[var(--text-subtle)]">
                            {job.location}
                            <span className="sm:hidden">
                              {" "}
                              &middot; {shortPeriod(job.period)}
                            </span>
                          </p>
                        </div>
                      </div>

                      <ul className="mt-5 space-y-2.5 text-sm text-[var(--text-muted)]">
                        {job.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────── */}
        <section id="projects" className="scroll-mt-24 py-24 sm:py-40">
          <ScrollReveal>
            <SectionHeading label="Build" title="Projects" />
          </ScrollReveal>

          <div className="mt-16 space-y-12">
            {projects.map((p, idx) => (
              <BlurReveal key={p.id} delay={idx * 0.1}>
                <ProjectCard p={p} />
              </BlurReveal>
            ))}
          </div>
        </section>

        {/* ── Education ──────────────────────────────── */}
        <section id="education" className="scroll-mt-24 py-24 sm:py-40">
          <ScrollReveal>
            <SectionHeading label="Background" title="Education" />
          </ScrollReveal>

          <StaggerContainer className="mt-16 space-y-6" staggerDelay={0.12}>
            {education.map((edu) => (
              <StaggerItem key={`${edu.school}-${edu.period}`}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[var(--accent)]/20 hover:shadow-lg hover:shadow-[var(--glow)] sm:p-8">
                  <div className="flex items-start gap-4">
                    {edu.logo ? (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                        <Image
                          src={edu.logo}
                          alt=""
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-2)]/15 text-sm font-bold text-[var(--accent)]">
                        {edu.school.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text)]">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {edu.school}
                        {edu.detail && ` · ${edu.detail}`}
                        {edu.location && ` · ${edu.location}`}
                        {" · "}
                        {edu.period}
                      </p>
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {edu.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-2)]/10 px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)]"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ── Skills ─────────────────────────────────── */}
        <section id="skills" className="scroll-mt-24 py-24 sm:py-40">
          <ScrollReveal>
            <SectionHeading label="Stack" title="Skills & Tools" />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {Object.entries(skills).map(([category, list], idx) => (
              <ScaleReveal key={category} delay={idx * 0.08}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[var(--accent)]/20 sm:p-7">
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {list.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-sm hover:shadow-[var(--glow)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </section>

        {/* ── Contact ────────────────────────────────── */}
        <footer
          id="contact"
          className="scroll-mt-24 border-t border-[var(--border)] py-24 sm:py-40"
        >
          <BlurReveal>
            <div className="text-center">
              <p className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
                Connect
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)] sm:text-6xl">
                Let&apos;s Work Together
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[var(--text-muted)]">
                Madison, WI &middot; Always open to new opportunities and
                conversations with builders.
              </p>
            </div>
          </BlurReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/raad-hassan-160b3220a"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-7 py-3.5 text-sm font-semibold text-[var(--text)] transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-lg hover:shadow-[var(--glow)]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:alshaikhhasa@wisc.edu"
                className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-7 py-3.5 text-sm font-semibold text-[var(--text)] transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-lg hover:shadow-[var(--glow)]"
              >
                Email
              </a>
              <a
                href="tel:+16083357032"
                className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-7 py-3.5 text-sm font-semibold text-[var(--text)] transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-lg hover:shadow-[var(--glow)]"
              >
                Phone
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-shadow hover:shadow-xl hover:shadow-[var(--accent)]/35"
              >
                Resume&nbsp;&uarr;
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-24 text-center text-xs text-[var(--text-subtle)]">
            &copy; 2026 Raad AlShaikh Hasan
          </div>
        </footer>
      </main>
    </div>
  );
}
