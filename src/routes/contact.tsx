import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { LinkedInButton, PageIntro, ResumeButton } from "@/components/site-ui";
import { EMAIL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tosin Micheal Oladele" },
      { name: "description", content: "Get in touch with Tosin Micheal Oladele via LinkedIn or email." },
      { property: "og:title", content: "Contact Tosin Micheal Oladele" },
      { property: "og:description", content: "Get in touch via LinkedIn or email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s talk about building better products.">
        Open to product management opportunities and conversations. The best way to reach me is LinkedIn or email.
      </PageIntro>
      <section className="container-x">
        <div className="rounded-xl bg-primary p-8 text-primary-foreground md:p-12">
          <p className="text-sm opacity-75">Email</p>
          <a href={`mailto:${EMAIL}`} className="mt-1 inline-flex items-center gap-3 font-display text-2xl break-all hover:opacity-80 md:text-4xl">
            <Mail className="h-6 w-6 shrink-0" aria-hidden /> {EMAIL}
          </a>
          <div className="mt-8 flex flex-wrap gap-3 [&_.btn]:border-primary-foreground [&_.btn]:text-primary-foreground [&_.btn:hover]:bg-primary-foreground [&_.btn:hover]:text-primary">
            <LinkedInButton />
            <ResumeButton variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
