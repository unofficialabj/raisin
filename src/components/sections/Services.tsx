import {
  Camera,
  Code2,
  GraduationCap,
  Lightbulb,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const services = [
  {
    title: "Web Development",
    description:
      "Fast, accessible web apps and marketing sites with modern stacks and SEO-friendly structure.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feel experiences on iOS and Android—offline-ready, secure, and analytics-aware.",
    icon: Smartphone,
  },
  {
    title: "IT Consulting",
    description:
      "Architecture reviews, cloud strategy, and roadmaps that align technology with business KPIs.",
    icon: Lightbulb,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns, content, and conversion optimization across search and social.",
    icon: TrendingUp,
  },
  {
    title: "Photography & Videography",
    description:
      "Brand-aligned visuals for products, events, and campaigns—from storyboard to delivery.",
    icon: Camera,
  },
  {
    title: "IT Training",
    description:
      "Workshops and upskilling programs so your team adopts new tools with confidence.",
    icon: GraduationCap,
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What we deliver
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            A cohesive suite of services to take you from idea to launch—and keep improving after
            go-live.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
