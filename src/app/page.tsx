import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { experience, education, skills } from "@/data/resume";
import { ThemeToggle } from "@/components/ThemeToggle";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card-hover overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm transition-all sm:p-8">
      <div className="mb-6 flex flex-wrap items-start gap-5">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-elevated)] text-2xl sm:h-16 sm:w-16"
          aria-hidden
        >
          {p.imagePlaceholder}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text)] sm:text-2xl">
            {p.title}
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{p.tagline}</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)]">
            {p.period}
            {p.role && ` · ${p.role}`}
          </p>
        </div>
      </div>

      <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
        {p.description}
      </p>

      <ul className="mb-6 space-y-2 text-sm text-[var(--text)]">
        {p.highlights.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {p.whatItIsNot && (
        <p className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm italic text-[var(--text-muted)]">
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
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              {link.label}
              <span aria-hidden>→</span>
            </a>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {p.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--bg-elevated)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="text-lg font-semibold text-[var(--text)]">
            Raad AlShaikh Hasan
          </a>
          <div className="flex items-center gap-4">
            <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="#experience"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Education
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Contact
            </a>
          </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <section className="mb-24 flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-14">
          <div className="shrink-0">
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
              <Image
                src="/raad.png"
                alt="Raad AlShaikh Hasan"
                width={200}
                height={200}
                className="h-44 w-44 object-cover sm:h-52 sm:w-52"
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Raad AlShaikh Hasan
            </h1>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Madison, WI
            </p>
            <p className="mt-5 max-w-xl text-[var(--text-muted)] leading-relaxed">
              Hi, I&apos;m Raad. This page is a bit of my story so far: where I study, what I&apos;ve done, and some things I&apos;ve worked on. Glad you&apos;re here.
            </p>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={`${job.org}-${job.period}`}
                className="card-hover rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {job.title} · {job.org}
                    </h3>
                    <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                      {job.location} · {job.period}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--accent)] shrink-0">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Build
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
              Projects
            </h2>
          </div>
          <div className="space-y-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-20 mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Background
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={`${edu.school}-${edu.period}`}
                className="card-hover rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {edu.degree}
                </h3>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                  {edu.school}
                  {edu.detail && ` · ${edu.detail}`}
                  {edu.location && ` · ${edu.location}`}
                  {" · "}
                  {edu.period}
                </p>
                {edu.highlights && edu.highlights.length > 0 && (
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    {edu.highlights.join(" · ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Tools
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text)] sm:text-3xl">
              Skills
            </h2>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-[var(--text)]">
                    {category}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    {list.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="mt-28 scroll-mt-20 border-t border-[var(--border)] pt-14"
        >
          <p className="text-lg font-medium text-[var(--text)]">Get in touch</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Madison, WI · Open to feedback from builders and product people.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/raad-hassan-160b3220a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:alshaikhhasa@wisc.edu"
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
            >
              Email
            </a>
            <a
              href="tel:+16083357032"
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
            >
              Phone
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Resume (PDF)
            </a>
          </div>
          <p className="mt-8 text-xs text-[var(--text-muted)]">
            #Founder · #BuildInPublic · #TechForGood
          </p>
        </footer>
      </main>
    </div>
  );
}
