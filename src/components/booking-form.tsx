"use client";

import { useState } from "react";

type Step = "info" | "book";

export function BookingForm() {
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("book");
  };

  return (
    <div className="booking-form-wrap">
      {/* Step tabs */}
      <div className="booking-tabs">
        <button
          className={`booking-tab ${step === "info" ? "active" : ""}`}
          onClick={() => setStep("info")}
        >
          <span className="booking-tab-num">1</span>
          Info
        </button>
        <button
          className={`booking-tab ${step === "book" ? "active" : ""}`}
          onClick={() =>
            form.firstName && form.email ? setStep("book") : undefined
          }
        >
          <span className="booking-tab-num">2</span>
          Book
        </button>
      </div>

      {step === "info" && (
        <form className="booking-fields" onSubmit={handleNext}>
          <div className="booking-label">About You</div>
          <div className="booking-row">
            <div className="booking-field">
              <label htmlFor="firstName">First Name *</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
              />
            </div>
            <div className="booking-field">
              <label htmlFor="lastName">Last Name *</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="booking-field">
            <label htmlFor="company">Company Name</label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Inc."
            />
          </div>
          <div className="booking-field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>
          <div className="booking-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <button type="submit" className="btn btn-primary booking-next-btn">
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      )}

      {step === "book" && (
        <div className="booking-calendar">
          <div className="booking-label">Pick a Time</div>
          <iframe
            src={`https://links.salesfunnels.io/widget/booking/lQAckjUX4wGvMGmKHo9R?firstName=${encodeURIComponent(form.firstName)}&lastName=${encodeURIComponent(form.lastName)}&email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}&company=${encodeURIComponent(form.company)}`}
            className="booking-iframe"
            title="Book a call"
          />
        </div>
      )}
    </div>
  );
}
