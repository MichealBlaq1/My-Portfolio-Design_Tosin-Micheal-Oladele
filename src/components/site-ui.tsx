import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Download, Linkedin, Menu, X } from "lucide-react";
import { LINKEDIN_URL, RESUME_URL, FULL_NAME, FOCUS, EMAIL } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function ResumeButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "solid" ? "btn btn-primary" : "btn btn-outline"}
    >
      <Download className="h-4 w-4" aria-hidden /> Download Resume
    </a>
  );
}

export function LinkedInButton() {
  return (
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
      <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight text-primary">
          Tosin <span className="text-accent-foreground">Oladele</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link"
              activeProps={{ className: "nav-link nav-active" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
          </a>
        </nav>
        <button
          className="md:hidden p-2 text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg text-foreground"
                activeProps={{ className: "py-3 text-lg text-accent-foreground font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3 justify-center">
              <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">{FULL_NAME}</p>
          <p className="mt-1 text-sm opacity-75">{FOCUS}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <a className="footer-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="footer-link" href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="footer-link" href={`mailto:${EMAIL}`}>Email</a>
        </div>
        <p className="text-sm opacity-60">© {new Date().getFullYear()} {FULL_NAME}</p>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="container-x pt-20 pb-12 md:pt-28 fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary md:text-6xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function StatusBadge({ kind, children }: { kind: "done" | "progress" | "proposed"; children: ReactNode }) {
  const cls =
    kind === "done" ? "badge badge-done" : kind === "progress" ? "badge badge-progress" : "badge badge-proposed";
  return <span className={cls}>{children}</span>;
}
