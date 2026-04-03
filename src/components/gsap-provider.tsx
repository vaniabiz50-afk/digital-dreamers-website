"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // --- Hero: staggered fade-in ---
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .from(".hero-badge", { opacity: 0, y: 30, duration: 0.6 })
      .from(".hero h1", { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
      .from(".hero-sub", { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
      .from(".hero-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".hero-stats", { opacity: 0, y: 20, duration: 0.6 }, "-=0.2");

    // --- Scroll-triggered sections ---
    const scrollAnimations = [
      { target: ".testimonial-card", trigger: ".testimonials-grid", stagger: 0.15, y: 60 },
      { target: ".step-card", trigger: ".steps-grid", stagger: 0.12, y: 40 },
    ];

    scrollAnimations.forEach(({ target, trigger, stagger, y }) => {
      gsap.from(target, {
        opacity: 0,
        y,
        duration: 0.7,
        stagger,
        ease: "power2.out",
        scrollTrigger: { trigger, start: "top 80%", once: true },
      });
    });

    // --- Service cards ---
    document.querySelectorAll(".service-card").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%", once: true },
      });
    });

    // --- Section headers ---
    document.querySelectorAll(".section-header").forEach((header) => {
      gsap.from(header, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: header, start: "top 85%", once: true },
      });
    });

    // --- About, booking, CTA ---
    [".about-section", ".booking-section", ".cta-banner"].forEach((sel) => {
      gsap.from(sel, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sel, start: "top 85%", once: true },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
