import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-ui";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tools — Tosin Micheal Oladele" },
      { name: "description", content: "Product Management skills and tools, plus developing Business Analytics capabilities." },
      { property: "og:title", content: "Skills & Tools — Tosin Micheal Oladele" },
      { property: "og:description", content: "Product Management skills and developing Business Analytics capabilities." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Product Management",
    developing: false,
    skills: ["Product Strategy", "Product Discovery", "Requirements Analysis", "User Stories", "Acceptance Criteria", "MVP Prioritization", "User Journey Mapping", "Cross-Functional Collaboration"],
    tools: ["Jira", "Trello", "Notion", "Figma", "FigJam", "Miro"],
  },
  {
    title: "Business Analytics",
    developing: true,
    skills: ["Data Analysis", "Data Visualization", "Exploratory Data Analysis", "Business Insights", "Data-Driven Decision-Making"],
    tools: ["Microsoft Excel", "SQL", "Python", "Orange Data Mining"],
  },
];

function Skills() {
  return (
    <>
      <PageIntro eyebrow="Skills & Tools" title="Practical product skills, growing analytical depth.">
        Product Management is my core practice. Business Analytics is a capability I’m actively developing.
      </PageIntro>
      <section className="container-x grid gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className={`rounded-xl border p-8 ${g.developing ? "border-dashed bg-secondary" : "bg-card"}`}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-3xl text-primary">{g.title}</h2>
              {g.developing && <span className="badge badge-progress">Developing</span>}
            </div>
            <h3 className="eyebrow mt-8">Skills</h3>
            <ul className="mt-3 divide-y divide-border">
              {g.skills.map((s) => (
                <li key={s} className="py-2.5 text-foreground">{s}</li>
              ))}
            </ul>
            <h3 className="eyebrow mt-8">Tools</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.tools.map((t) => (
                <li key={t} className="rounded-full border px-3 py-1 text-sm text-primary transition-colors hover:border-teal">{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
