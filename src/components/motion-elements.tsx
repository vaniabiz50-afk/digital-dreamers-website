"use client";

import { motion } from "framer-motion";

/* --- Button with hover scale + lift --- */
export function MotionButton({
  href,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <motion.a
      href={href}
      className={className}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}

/* --- Card with hover lift + glow --- */
export function MotionCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 40px rgba(91, 163, 230, 0.12)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* --- Pulsing status dot --- */
export function PulsingDot() {
  return (
    <motion.span
      className="hero-badge-dot"
      animate={{
        scale: [1, 1.6, 1],
        opacity: [1, 0.4, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* --- Nav button with hover --- */
export function MotionNavButton({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}

/* --- Stat counter with entrance --- */
export function MotionStat({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="hero-stat"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
