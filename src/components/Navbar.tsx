"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useActiveSection, type SectionId } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground transition hover:text-primary"
          onClick={() => setOpen(false)}
        >
          Raisin<span className="text-primary"> Technologies</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === id ? "bg-primary/10 text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active === id ? "bg-primary/10 text-primary" : "text-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
