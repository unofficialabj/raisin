import { Quote } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const items = [
  {
    name: "Sarah Chen",
    role: "VP of Product, Northwind Labs",
    quote:
      "Raisin Technologies shipped our platform refresh on time with exceptional attention to UX and performance. Communication was clear at every milestone.",
  },
  {
    name: "Marcus Webb",
    role: "Founder, Brightline Retail",
    quote:
      "From discovery to launch, the team felt like an extension of ours. They challenged assumptions in the right ways and delivered a scalable foundation.",
  },
  {
    name: "Elena Ruiz",
    role: "COO, Helix Clinics",
    quote:
      "Security and compliance were non-negotiable for us. Raisin delivered a mobile experience our staff and patients actually enjoy using.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What clients say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Long-term relationships built on trust, craft, and measurable impact.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 80}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <Quote className="h-8 w-8 text-primary/80" aria-hidden />
                <p className="mt-4 flex-1 text-muted leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
