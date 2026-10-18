import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ResumeButton } from "@/components/site-ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tosin Micheal Oladele" },
      { name: "description", content: "Product Manager bridging user needs, product strategy, and business analytics." },
      { property: "og:title", content: "About Tosin Micheal Oladele" },
      { property: "og:description", content: "Product Manager bridging user needs, product strategy, and business analytics." },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "User needs", d: "Start from the problem people actually have." },
  { t: "Product strategy", d: "Prioritise what delivers real value first." },
  { t: "Data-informed decisions", d: "Use evidence to shape and test direction." },
];

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Turning complex problems into simple, impactful solutions." />
      <section className="container-x grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            I’m Tosin Micheal Oladele, a Product Manager passionate about transforming complex problems into simple,
            impactful solutions. I bridge user needs, product strategy, and business analytics to shape products that
            solve real-world problems and deliver measurable value.
          </p>
          <p>
            By combining user-centred thinking with data-driven insights, I identify opportunities, inform strategic
            decisions, and drive product success and business growth.
          </p>
          <div className="pt-2">
            <ResumeButton />
            <p className="mt-3 text-xs text-muted-foreground">Opens in Google Drive, where you can view or download it.</p>
          </div>
        </div>
        <ol className="space-y-4">
          {pillars.map((p, i) => (
            <li key={p.t} className="lift rounded-lg border bg-card p-5">
              <span className="font-display text-2xl text-teal">0{i + 1}</span>
              <p className="mt-1 font-semibold text-primary">{p.t}</p>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
