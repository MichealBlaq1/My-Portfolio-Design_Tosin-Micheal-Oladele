import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ResumeButton } from "@/components/site-ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tosin Micheal Oladele — Product Management | Business Analytics" },
      { name: "description", content: "Building better products through insight and strategy. Portfolio of Product Manager Tosin Micheal Oladele." },
      { property: "og:title", content: "Tosin Micheal Oladele — Product Manager" },
      { property: "og:description", content: "Building better products through insight and strategy." },
    ],
  }),
  component: Index,
});

function ProductGraphic() {
  return (
    <svg viewBox="0 0 420 380" className="w-full max-w-md" role="img" aria-label="Illustration: user needs flow through discovery and requirements into a product, informed by data">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="var(--border)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="420" height="380" rx="16" fill="url(#grid)" />
      {/* bar chart */}
      {[60, 95, 75, 130, 110, 160].map((h, i) => (
        <rect key={i} x={250 + i * 24} y={330 - h} width="14" height={h} rx="3" fill="var(--teal)" opacity={0.25 + i * 0.12} />
      ))}
      {/* flow path */}
      <path className="draw" d="M60 300 C 110 300, 110 200, 170 200 S 230 100, 300 90" fill="none" stroke="var(--primary)" strokeWidth="2.5" />
      {[
        { x: 60, y: 300, l: "User needs" },
        { x: 170, y: 200, l: "Requirements" },
        { x: 300, y: 90, l: "Product" },
      ].map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r="12" fill="var(--background)" stroke="var(--primary)" strokeWidth="2.5" />
          <circle cx={n.x} cy={n.y} r="4.5" fill="var(--teal)" />
          <text x={n.x} y={n.y - 22} textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--primary)" fontFamily="Manrope">{n.l}</text>
        </g>
      ))}
      <text x="250" y="355" fontSize="11" fill="var(--muted-foreground)" fontFamily="Manrope" letterSpacing="2">INSIGHT</text>
    </svg>
  );
}

function Index() {
  return (
    <section className="container-x grid items-center gap-12 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
      <div className="fade-up">
        <p className="eyebrow">Product Management | Business Analytics</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Building Better Products Through <em className="text-accent-foreground">Insight</em> and Strategy.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          I turn user needs into clear product requirements and bring an analytical mindset to solving business problems.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/portfolio" className="btn btn-primary">
            Explore My Work <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/about" className="btn btn-outline">About Me</Link>
          <ResumeButton variant="outline" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Resume opens in Google Drive in a new tab.</p>
      </div>
      <div className="flex justify-center fade-up" style={{ animationDelay: "0.15s" }}>
        <ProductGraphic />
      </div>
    </section>
  );
}
