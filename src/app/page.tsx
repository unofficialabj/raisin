import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raisin Technologies",
    url: "https://raisintech.com",
    description: "Innovating digital solutions for the future.",
    email: "hello@raisintech.com",
    telephone: "+1-555-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Tech Park Blvd, Suite 200",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
