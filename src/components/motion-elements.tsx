/* --- Button with hover scale + lift (CSS only) --- */
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
    <a href={href} className={`${className ?? ""} motion-btn`} target={target} rel={rel}>
      {children}
    </a>
  );
}

/* --- Card with hover lift + glow (CSS only) --- */
export function MotionCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className ?? ""} motion-card`}>
      {children}
    </div>
  );
}

/* --- Pulsing status dot (CSS only) --- */
export function PulsingDot() {
  return <span className="hero-badge-dot" />;
}

/* --- Nav button with hover (CSS only) --- */
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
    <a href={href} className={`${className ?? ""} motion-btn`}>
      {children}
    </a>
  );
}

/* --- Stat counter (CSS only) --- */
export function MotionStat({ children }: { children: React.ReactNode }) {
  return (
    <div className="hero-stat motion-stat">
      {children}
    </div>
  );
}
