"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import emailjs from '@emailjs/browser';

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555096411!2d-122.50764017948502!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

export function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    if (!form.current) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID as string,
        }
      );

      setSuccess(true);
      form.current.reset();
    } catch (err) {
      setError(true);
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Tell us about your goals—we&apos;ll respond within one business day.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <AnimateIn>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {success && (
                <p className="mt-4 text-center text-sm text-green-600" role="status">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {error && (
                <p className="mt-4 text-center text-sm text-red-600" role="status">
                  Failed to send message. Please try again or contact us directly.
                </p>
              )}
            </form>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground">Company details</h3>
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <a href="mailto:hello@raisintech.com" className="hover:text-primary">
                      hello@raisintech.com
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <a href="tel:+15551234567" className="hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span>
                      100 Tech Park Blvd, Suite 200
                      <br />
                      San Francisco, CA 94105
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Raisin Technologies office location"
                  src={MAP_EMBED}
                  className="h-64 w-full grayscale-[20%] transition hover:grayscale-0 sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
