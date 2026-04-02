"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineHero() {
  return (
    <div className="spline-hero-wrap">
      <Suspense fallback={null}>
        <Spline scene="https://prod.spline.design/mMdRWEy7n17kQG3f/scene.splinecode" />
      </Suspense>
      {/* Gradient fade at bottom so Spline blends into the page */}
      <div className="spline-fade" />
    </div>
  );
}
