import Image from "next/image";
import { GsapProvider } from "@/components/gsap-provider";
import { SplineHero } from "@/components/spline-hero";
import { GlobeScene } from "@/components/globe-scene";
import { BookingForm } from "@/components/booking-form";
import {
  MotionButton,
  MotionCard,
  MotionNavButton,
  MotionStat,
  PulsingDot,
} from "@/components/motion-elements";

export default function HomePage() {
  return (
    <GsapProvider>
      {/* Ambient Background Glows */}
      <div className="page-bg">
        <div className="glow-orb glow-purple" />
        <div className="glow-orb glow-blue" />
        <div className="glow-orb glow-pink" />
        <div className="glow-orb glow-teal" />
        <div className="glow-orb glow-purple-mid" />
      </div>

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Page Content */}
      <div className="page-content">
        {/* Navbar */}
        <nav className="navbar">
          <div className="container navbar-inner">
            <a href="/" className="navbar-logo">
              <Image src="/images/dd-logo.webp" alt="Digital Dreamers" width={48} height={48} className="navbar-logo-img" priority sizes="48px" />
              Digital Dreamers
            </a>
            <div className="navbar-right">
              <a href="#services" className="nav-link">Services</a>
              <a href="#results" className="nav-link">Results</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#about" className="nav-link">About</a>
              <MotionNavButton href="#book" className="btn btn-nav" >
                Get Started
              </MotionNavButton>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          {/* Spline 3D background */}
          <SplineHero />

          <div className="hero-bg">
            <div className="hero-glow" />
            <div className="hero-glow-2" />
          </div>

          <div className="hero-badge">
            <PulsingDot />
            For businesses making $20K+/month
          </div>

          <h1>
            Your competitors
            <br />
            are using AI.
            <br />
            <span className="gradient-text">It&apos;s time to start too.</span>
          </h1>

          <p className="hero-sub">
            In a free 30-minute call, we&apos;ll map your top 2 time killers,
            show you exactly how to automate them, and hand you a custom AI
            roadmap, even if we never work together.
          </p>

          <div className="hero-cta">
            <MotionButton href="https://links.salesfunnels.io/widget/booking/lQAckjUX4wGvMGmKHo9R" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book Your Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MotionButton>
          </div>

          <div className="hero-stats">
            <MotionStat>
              <div className="hero-stat-value">100+</div>
              <div className="hero-stat-label">Workflows created</div>
            </MotionStat>
            <div className="hero-stat-divider" />
            <MotionStat>
              <div className="hero-stat-value">10,000+</div>
              <div className="hero-stat-label">Hours saved monthly</div>
            </MotionStat>
            <div className="hero-stat-divider" />
            <MotionStat>
              <div className="hero-stat-value">3x</div>
              <div className="hero-stat-label">Average ROI</div>
            </MotionStat>
          </div>
        </section>

        <div className="section-divider" />

        {/* Testimonials */}
        <section className="section" id="results">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Real Results</div>
              <h2>What our clients are saying</h2>
              <p>
                We designed and implemented AI-powered automation systems that
                now automatically process workflows and send real-time
                notifications.
              </p>
            </div>

            <div className="testimonials-grid">
              <MotionCard className="testimonial-card glass-card">
                <p className="testimonial-quote">
                  &ldquo;Digital Dreamers built us an automation system that saves
                  <strong> over 20 hours of work a month</strong>. What used to
                  take our team an entire day now runs on autopilot.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">JK</div>
                  <div>
                    <div className="testimonial-name">Jordan K.</div>
                    <div className="testimonial-role">Psychotherapy Clinic Owner</div>
                  </div>
                </div>
              </MotionCard>

              <MotionCard className="testimonial-card glass-card">
                <p className="testimonial-quote">
                  &ldquo;From cold lead to booked call, the entire flow is
                  automated now. Our <strong>close rate went up 40%</strong>{" "}
                  because we respond in minutes, not hours.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">NB</div>
                  <div>
                    <div className="testimonial-name">Nathan B.</div>
                    <div className="testimonial-role">Roofing Company, CEO</div>
                  </div>
                </div>
              </MotionCard>

              <MotionCard className="testimonial-card glass-card">
                <p className="testimonial-quote">
                  &ldquo;I was skeptical about AI automation, but they made it
                  simple. We <strong>closed $75K in new revenue</strong> in the
                  first quarter using their lead pipeline system.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">SM</div>
                  <div>
                    <div className="testimonial-name">Sarah M.</div>
                    <div className="testimonial-role">Marketing Agency Founder</div>
                  </div>
                </div>
              </MotionCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* What We Automate */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <div className="section-label">What We Automate</div>
              <h2>We build AI systems that run your business</h2>
              <p>
                Modular, scalable automation built with tools you can
                understand and maintain.
              </p>
            </div>

            <div className="services-grid">
              <MotionCard className="service-card glass-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Lead Capture &amp; Follow-Up</h3>
                <p>
                  Automatically capture leads from ads, forms, and social then
                  follow up via email and SMS within minutes, not hours.
                </p>
              </MotionCard>

              <MotionCard className="service-card glass-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10M6 20V4M18 20v-4" />
                  </svg>
                </div>
                <h3>CRM &amp; Pipeline Automation</h3>
                <p>
                  Deals move through your pipeline automatically. No more manual
                  status updates, missed follow-ups, or data entry.
                </p>
              </MotionCard>

              <MotionCard className="service-card glass-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3>AI Chatbots &amp; Assistants</h3>
                <p>
                  24/7 customer support and lead qualification powered by AI
                  that sounds human and knows your business.
                </p>
              </MotionCard>

              <MotionCard className="service-card glass-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3>Workflow Automation</h3>
                <p>
                  Connect your tools like CRM, calendar, invoicing, and email so
                  data flows between them without anyone lifting a finger.
                </p>
              </MotionCard>

              <MotionCard className="service-card glass-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <h3>Landing Pages &amp; Funnels</h3>
                <p>
                  High-converting pages wired to your CRM and ad campaigns.
                  Every click tracked, every lead captured.
                </p>
              </MotionCard>

              <MotionCard className="service-card glass-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <h3>Email &amp; SMS Sequences</h3>
                <p>
                  Nurture campaigns that run themselves with personalized messages
                  at the right time, driving conversions on autopilot.
                </p>
              </MotionCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* How It Works */}
        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-header">
              <div className="section-label">How It Works</div>
              <h2>Three steps to autopilot</h2>
              <p>
                Simple. Transparent. No jargon, no mystery.
              </p>
            </div>

            <div className="steps-grid">
              <MotionCard className="step-card glass-card">
                <div className="step-number">1</div>
                <h3>Free Audit Call</h3>
                <p>
                  We learn your business, map your processes, and identify the
                  top 2 things costing you the most time and money.
                </p>
              </MotionCard>

              <MotionCard className="step-card glass-card">
                <div className="step-number">2</div>
                <h3>We Build It</h3>
                <p>
                  We design and implement your custom AI automation system,
                  tested and refined until it works flawlessly.
                </p>
              </MotionCard>

              <MotionCard className="step-card glass-card">
                <div className="step-number">3</div>
                <h3>Launch &amp; Train</h3>
                <p>
                  We go live together, train your team on everything, and make
                  sure you can run it without us.
                </p>
              </MotionCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* About Section */}
        <section className="section about-section" id="about">
          <div className="container">
            {/* Top: intro text */}
            <div className="about-intro">
              <div className="section-label">About</div>
              <h2>Digital Dreamers</h2>
              <p>
                At Digital Dreamers, your technology should be your greatest
                accelerator, not a hidden constraint on your growth. We partner
                with growth-focused entrepreneurs to strip away the noise of
                manual operations and replace it with AI-powered precision.
              </p>
            </div>

            {/* Image + 3 text blocks side by side */}
            <div className="about-layout">
              <div className="about-image-wrap">
                <Image
                  src="/images/humanoid-desk.webp"
                  alt="AI-powered automation"
                  width={800}
                  height={600}
                  className="about-image"
                  loading="lazy"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="about-copy">
                <h3>Clarity Over Complexity</h3>
                <p>
                  We don&apos;t believe in bloated tech stacks or automation for
                  the sake of automation. We design lean, high-impact systems with
                  intelligent funnels and automated follow-up engines that
                  integrate seamlessly into your existing workflow.
                </p>

                <h3>We Architect. We Manage. You Scale.</h3>
                <p>
                  You never have to worry about the &ldquo;tech&rdquo; becoming a
                  burden. We don&apos;t just hand you a system and walk away. We
                  provide ongoing strategic support to ensure your automation
                  stays sharp, updated, and high-performing.
                </p>

                <h3>Total Peace of Mind.</h3>
                <p>
                  We take the heavy lifting off your shoulders so you can focus on
                  leading, while we ensure your marketing, sales, and follow-ups
                  work around the clock.
                </p>
              </div>
            </div>

            {/* Full-width focus card + closing */}
            <div className="about-bottom">
              <div className="about-focus-grid">
                <div className="about-focus-item glass-card">
                  <div className="about-focus-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4>Eliminate the Manual</h4>
                  <p>Reclaim your time from repetitive tasks and let AI handle the busywork so you can focus on strategy.</p>
                </div>
                <div className="about-focus-item glass-card">
                  <div className="about-focus-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4>Master Speed-to-Lead</h4>
                  <p>Ensure no prospect waits for a response. Instant follow-ups mean higher conversions and more closed deals.</p>
                </div>
                <div className="about-focus-item glass-card">
                  <div className="about-focus-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4>Architectural Excellence</h4>
                  <p>Build systems you understand, own, and can scale with total confidence. No black boxes, no lock-in.</p>
                </div>
              </div>
              <p className="about-closing">
                Digital Dreamers exists for leaders who are ready to operate at
                the next level. The busywork ends here.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA with Globe */}
        <section className="cta-banner">
          <GlobeScene />
          <div className="container cta-content">
            <h2>Ready to automate?</h2>
            <p>
              Book a free 30-minute audit. We&apos;ll map out exactly where AI
              automation can save you time and money. You keep the roadmap
              either way.
            </p>
            <MotionButton href="#book" className="btn btn-primary">
              Book Your Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MotionButton>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section booking-section" id="book">
          <GlobeScene />
          <div className="container booking-layout">
            <div className="booking-copy">
              <div className="section-label">Get a Free 30-Minute Business Audit</div>
              <h2>Ready to automate?</h2>
              <p>
                Walk away with a custom AI roadmap showing your top 2 time
                killers and exactly how to automate them, even if we never
                work together.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-logo">
              <Image src="/images/dd-logo.webp" alt="Digital Dreamers" width={42} height={42} className="footer-logo-img" loading="lazy" sizes="42px" />
              Digital Dreamers
            </div>
            <div className="footer-links">
              <a href="mailto:contact@digitaldreamersai.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" opacity="0" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2l10 7 10-7zm0 2l-10 7L2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/vania-ludwig-0154a05b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/vanialudwig/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <div className="footer-copy">&copy; 2026 Digital Dreamers. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </GsapProvider>
  );
}
