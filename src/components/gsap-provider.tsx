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
      .fromTo(
        ".hero-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        ".hero h1",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".hero-guarantee",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(
        ".hero-stats",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );

    // --- Testimonials: staggered slide-in ---
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 80%",
          once: true,
        },
      }
    );

    // --- Service cards: slide-in from alternating sides ---
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, i) => {
      const fromLeft = i % 2 === 0;
      gsap.fromTo(
        card,
        { opacity: 0, x: fromLeft ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    // --- Step cards: scale-up ---
    gsap.fromTo(
      ".step-card",
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 80%",
          once: true,
        },
      }
    );

    // --- Booking section: fade + scale ---
    gsap.fromTo(
      ".booking-section",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".booking-section",
          start: "top 85%",
          once: true,
        },
      }
    );

    // --- Section headers: fade-in ---
    document.querySelectorAll(".section-header").forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
