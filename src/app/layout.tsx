import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raisintech.com"),
  title: {
    default: "Raisin Technologies | Innovating Digital Solutions for the Future",
    template: "%s | Raisin Technologies",
  },
  description:
    "Raisin Technologies delivers web development, mobile apps, IT consulting, digital marketing, media production, and training—built for scale and clarity.",
  keywords: [
    "IT company",
    "web development",
    "mobile apps",
    "IT consulting",
    "digital marketing",
    "Raisin Technologies",
  ],
  openGraph: {
    title: "Raisin Technologies | Innovating Digital Solutions for the Future",
    description:
      "Partner with Raisin Technologies for modern digital products, strategy, and ongoing support.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
