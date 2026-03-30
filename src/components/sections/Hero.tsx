import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-8">
        <div>
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              IT & Digital Excellence
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Raisin Technologies
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
              Innovating Digital Solutions for the Future
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We design and deliver modern web platforms, mobile apps, and
              cloud-ready systems— combining strategy, engineering, and creative
              media so your business scales with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover">
                Get Started
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn
          delay={120}
          className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="animate-float relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Abstract technology and global connectivity"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
              <p className="text-sm font-medium text-white">Trusted delivery</p>
              <p className="mt-1 text-xs text-white/80">
                Agile teams, secure practices, and measurable outcomes.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
