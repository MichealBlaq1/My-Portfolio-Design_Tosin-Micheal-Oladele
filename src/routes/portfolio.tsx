import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageIntro, StatusBadge } from "@/components/site-ui";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Tosin Micheal Oladele" },
      { name: "description", content: "Product Management case studies: Kowope, VitalMatch, Cycluno, plus a Business Analytics learning project." },
      { property: "og:title", content: "Portfolio — Tosin Micheal Oladele" },
      { property: "og:description", content: "Product Management case studies plus a completed customer churn modeling and retention analytics project." },

    ],
  }),
  component: Portfolio,
});

type Project = {
  name: string;
  tagline: string;
  problem: string;
  overview: string;
  role: string;
  contributions: string[];
  status: string;
  demo?: string;
};

const projects: Project[] = [
  {
    name: "Kowope",
    tagline: "Digital Ticketing for Transport Operations",
    problem: "Transport operations that rely on manual ticketing need a clearer, digital way to manage tickets.",
    overview: "A digital ticketing product for transport operations, with a working frontend demo.",
    role: "Product Manager",
    contributions: [
      "Defined product requirements",
      "Mapped user journeys",
      "Prioritised the MVP scope",
      "Coordinated cross-functional delivery",
    ],
    status: "MVP frontend demo available. Features beyond the demo are proposed or in ongoing implementation.",
    demo: "https://kowope-frontend.vercel.app/",
  },
  {
    name: "VitalMatch",
    tagline: "Blood Donor Matching Platform",
    problem: "Connecting people who need blood with suitable donors quickly.",
    overview: "A blood donor matching solution built as a buildathon project.",
    role: "Product Manager",
    contributions: [
      "Defined product requirements",
      "Prioritised features for the buildathon scope",
      "Collaborated with the team to shape the solution",
    ],
    status: "Buildathon solution demo available. Further features are proposed, not yet built.",
    demo: "https://vitalmatch-buildathon.vercel.app/",
  },
  {
    name: "Cycluno",
    tagline: "Software Testing and Quality Management",
    problem: "Teams need structured ways to manage software testing and quality.",
    overview: "A software testing and quality management product.",
    role: "Product contributor",
    contributions: [
      "Wrote product documentation",
      "Drafted user stories",
      "Defined workflows",
      "Collaborated with design and engineering teams",
    ],
    status: "Implementation ongoing. No public demo available.",
  },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow !text-muted-foreground">{label}</p>
      <div className="mt-1.5 text-foreground">{children}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <>
      <PageIntro eyebrow="Portfolio" title="Selected product work.">
        Case studies describe my contributions and each product’s current state. Statuses separate completed work from
        proposed and ongoing work.
      </PageIntro>

      <section className="container-x space-y-8" aria-label="Product Management projects">
        {projects.map((p, i) => (
          <article key={p.name} className="lift grid gap-8 rounded-xl border bg-card p-6 md:grid-cols-[1fr_2fr] md:p-10">
            <div>
              <span className="font-display text-5xl text-teal">0{i + 1}</span>
              <h2 className="mt-2 font-display text-3xl text-primary">{p.name}</h2>
              <p className="mt-1 text-muted-foreground">{p.tagline}</p>
              {p.demo ? (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6">
                  View demo <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground">No public demo</p>
              )}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Problem">{p.problem}</Field>
              <Field label="Product overview">{p.overview}</Field>
              <Field label="My role">{p.role}</Field>
              <Field label="Current status">
                <StatusBadge kind={p.demo ? "done" : "progress"}>{p.demo ? "Demo live" : "Ongoing"}</StatusBadge>
                <p className="mt-2 text-sm text-muted-foreground">{p.status}</p>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Key contributions">
                  <ul className="mt-1 grid gap-2 sm:grid-cols-2">
                    {p.contributions.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Field>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x mt-20" aria-labelledby="ba">
        <p className="eyebrow">Business Analytics</p>
        <article className="mt-4 rounded-xl border bg-card p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="ba" className="font-display text-3xl text-primary">
              Predictive Customer Churn Modeling & Retention Optimization
            </h2>
            <StatusBadge kind="done">Completed</StatusBadge>
          </div>
          <p className="mt-1 text-muted-foreground">
            Customer Analytics & Predictive Modeling · Python (Pandas, Scikit-learn, Statsmodels) · Microsoft Excel
          </p>
          <p className="mt-5 max-w-3xl text-foreground">
            Developed a logistic regression framework using the <strong>UCI Online Retail II dataset</strong> to
            identify customers at risk of churning and support data-driven retention strategies for BritishGifts
            Online.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Field label="Key contributions">
              <ul className="mt-1 grid gap-2">
                {[
                  "Cleaned transaction data and engineered customer-level RFM and tenure features.",
                  "Built a logistic regression model and assessed multicollinearity, statistical significance, and churn predictors.",
                  "Evaluated predictive performance and optimized classification thresholds to improve customer targeting and retention resource allocation.",
                ].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </Field>
            <div className="grid gap-6">
              <Field label="Key results">
                <p>
                  Achieved an <strong>ROC-AUC of approximately 0.79</strong> and <strong>recall of 76.74%</strong> at
                  the standard classification threshold.
                </p>
              </Field>
              <Field label="Skills">
                <ul className="mt-1 flex flex-wrap gap-2">
                  {[
                    "Predictive Modeling",
                    "Logistic Regression",
                    "RFM Analysis",
                    "Feature Engineering",
                    "Model Evaluation",
                    "Churn Risk Scoring",
                    "Retention Optimization",
                  ].map((s) => (
                    <li key={s} className="badge badge-proposed">{s}</li>
                  ))}
                </ul>
              </Field>
            </div>
          </div>
        </article>
      </section>

    </>
  );
}
