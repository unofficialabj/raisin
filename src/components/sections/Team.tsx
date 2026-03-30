import { AnimateIn } from "@/components/AnimateIn";

const members = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jordan Kim",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Nair",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Okonkwo",
    role: "Lead Consultant",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];

export function Team() {
  return (
    <section id="team" className="border-b border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Team
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            People behind the work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            A multidisciplinary group united by curiosity, ownership, and respect for your time.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <AnimateIn key={m.name} delay={i * 70}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-background text-center transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">{m.role}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
