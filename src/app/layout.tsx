import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Dreamers — AI-Powered Business Automation",
  description:
    "We design and implement AI-powered automation systems that process workflows, capture leads, and send real-time notifications — so you can focus on growing your business.",
  openGraph: {
    title: "Digital Dreamers — AI-Powered Business Automation",
    description:
      "AI-powered automation systems that save time, capture more leads, and scale your operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
