"use client";

import { useEffect } from "react";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Trigger hero entrance animation
    document.documentElement.classList.add("hero-loaded");

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
