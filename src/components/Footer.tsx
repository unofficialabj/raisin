import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const social = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "mailto:hello@raisintech.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Raisin<span className="text-primary"> Technologies</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Innovating digital solutions for the future. We partner with ambitious teams to build
              scalable, beautiful products.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Quick links</p>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Connect</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {social.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted transition hover:border-primary hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} Raisin Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
