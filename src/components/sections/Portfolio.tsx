import { AnimateIn } from "@/components/AnimateIn";

const projects = [
  {
    title: "Nexus Commerce Platform",
    category: "Web",
    description: "Headless storefront with real-time inventory and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pulse Health App",
    category: "Mobile",
    description: "Patient-first mobile experience with secure messaging and appointment scheduling.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Atlas Analytics Dashboard",
    category: "Web",
    description: "Executive dashboards with role-based access and exportable insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Vertex Learning LMS",
    category: "EdTech",
    description: "Modular LMS with cohort tracking, assessments, and video delivery at scale.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Meridian Brand Launch",
    category: "Marketing",
    description: "Integrated campaign site, content system, and performance marketing setup.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Skyline Drone Media",
    category: "Media",
    description: "Aerial photography and video pipeline for real estate and events.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3ae44790bf1e?auto=format&fit=crop&w=900&q=80",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            A snapshot of recent work—each engagement tailored to industry, audience, and growth
            stage.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 50}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition group-hover:opacity-90" />
                  <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground transition group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
