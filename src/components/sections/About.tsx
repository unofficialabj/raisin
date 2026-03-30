import { CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const highlights = [
  {
    title: "Experienced team",
    body: "Senior engineers and designers with years of shipping production-grade software.",
  },
  {
    title: "Client-focused",
    body: "Transparent communication, iterative delivery, and outcomes tied to your goals.",
  },
  {
    title: "Scalable solutions",
    body: "Architecture built for growth—performance, security, and maintainability from day one.",
  },
  {
    title: "End-to-end partnership",
    body: "From discovery and UX to DevOps and training—we stay with you beyond launch.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            About us
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building technology that moves businesses forward
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Raisin Technologies is a full-service IT partner helping organizations modernize their
            digital presence. We blend product thinking with robust engineering to launch experiences
            users love—and teams can sustain.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <AnimateIn>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Mission</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Empower teams with reliable, elegant technology—reducing complexity so you can focus
                on growth, customers, and innovation.
              </p>
              <p className="mt-2 text-muted leading-relaxed">
                We build maintainable systems and communicate with clarity so your roadmap stays
                achievable as you scale.
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">Vision</h3>
              <p className="mt-3 text-muted leading-relaxed">
                To be the partner of choice for organizations that want ambitious digital products
                delivered with clarity, speed, and integrity.
              </p>
              <p className="mt-2 text-muted leading-relaxed">
                We see a future where every engagement leaves your team stronger, more capable, and
                ready for what comes next.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <AnimateIn key={h.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden />
                  <h4 className="mt-4 font-semibold text-foreground">{h.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
