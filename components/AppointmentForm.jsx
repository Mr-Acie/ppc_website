"use client";

import { useState } from "react";

const APPOINTMENT_TYPES = [
  {
    id: "phone-consult",
    label: "Free 20-min phone consultation",
    description:
      "A no-pressure intro call to talk through what you need. Best place to start.",
    icon: "📞",
    badge: "Always Free",
  },
  {
    id: "in-home-tech",
    label: "In-home tech & AI session",
    description:
      "One-on-one technology and AI coaching at the senior's home — phones, computers, ChatGPT, voice assistants.",
    icon: "🏠",
  },
  {
    id: "workshop",
    label: "Workshop / community booking",
    description:
      "Book a fraud-prevention, smartphone, or AI workshop for a senior center, church, library, or community group.",
    icon: "🎤",
  },
];

const PREFERRED_TIMES = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 – 4 PM)",
  "Late afternoon (4 – 6 PM)",
  "I'm flexible",
];

export default function AppointmentForm({ variant = "full" }) {
  const [type, setType] = useState(APPOINTMENT_TYPES[0].id);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      appointmentType: data.get("appointmentType"),
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      preferredDay: String(data.get("preferredDay") || "").trim(),
      preferredTime: String(data.get("preferredTime") || "").trim(),
      notes: String(data.get("notes") || "").trim(),
      // Honeypot — bots fill hidden fields; humans don't.
      website: String(data.get("website") || ""),
    };

    if (payload.website) {
      // Silently succeed for bots.
      setStatus("success");
      return;
    }

    if (!payload.name || !payload.phone) {
      setErrorMessage("Please share your name and a phone number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Request failed");
      }
      setStatus("success");
      form.reset();
      setType(APPOINTMENT_TYPES[0].id);
    } catch (err) {
      console.error("Appointment submit failed", err);
      setStatus("error");
      setErrorMessage(
        "Something went wrong on our end. Please call (326) 467-3161 and we'll book it for you directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded border border-border-main bg-cream p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-semibold text-navy">
          Request received
        </h3>
        <p className="mt-3 leading-relaxed text-muted">
          Thank you. We&rsquo;ll call you back within{" "}
          <strong className="text-navy">one business day</strong> to confirm your
          appointment. If you&rsquo;d like to reach us sooner, call{" "}
          <a
            href="tel:3264673161"
            className="font-medium text-navy underline decoration-gold underline-offset-4"
          >
            (326) 467-3161
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Appointment request form"
    >
      {/* Appointment type picker */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
          What are you booking?
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {APPOINTMENT_TYPES.map((opt) => {
            const checked = type === opt.id;
            return (
              <label
                key={opt.id}
                className={`flex h-full cursor-pointer flex-col rounded border p-4 transition ${
                  checked
                    ? "border-gold bg-gold-light shadow-sm"
                    : "border-border-main bg-white hover:border-gold/60"
                }`}
              >
                <input
                  type="radio"
                  name="appointmentType"
                  value={opt.id}
                  checked={checked}
                  onChange={() => setType(opt.id)}
                  className="sr-only"
                />
                <span className="text-2xl" aria-hidden="true">
                  {opt.icon}
                </span>
                <span className="mt-2 block font-medium text-navy">
                  {opt.label}
                </span>
                {opt.badge && (
                  <span className="mt-1 inline-block w-fit rounded bg-green-50 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-green-700">
                    {opt.badge}
                  </span>
                )}
                <span className="mt-2 text-xs leading-relaxed text-muted">
                  {opt.description}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Identity */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          autoComplete="name"
          required
          placeholder="First and last name"
        />
        <Field
          label="Best phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="(937) 555-0123"
          hint="We'll call you back at this number."
        />
      </div>

      <Field
        label="Email (optional)"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
      />

      {/* Scheduling */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Preferred day"
          name="preferredDay"
          placeholder="e.g., next Tuesday, or any weekday"
        />
        <SelectField
          label="Preferred time"
          name="preferredTime"
          options={PREFERRED_TIMES}
          defaultValue="I'm flexible"
        />
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="appt-notes"
          className="mb-2 block text-sm font-medium text-navy"
        >
          Anything we should know? (optional)
        </label>
        <textarea
          id="appt-notes"
          name="notes"
          rows={variant === "compact" ? 3 : 4}
          placeholder="Senior's name, what you'd like help with, location, etc."
          className="w-full rounded border border-border-main bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
      </div>

      {/* Honeypot (hidden from users, visible to bots) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p
          className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded bg-gold px-8 py-3.5 text-base font-semibold text-white transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? "Sending request…"
            : "Request Appointment"}
        </button>
        <p className="text-xs text-muted">
          We&rsquo;ll call within one business day to confirm. No pressure, no
          obligation.
        </p>
      </div>
    </form>
  );
}

function Field({ label, name, hint, required, ...rest }) {
  const id = `appt-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      <input
        id={id}
        name={name}
        required={required}
        className="w-full rounded border border-border-main bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
        {...rest}
      />
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

function SelectField({ label, name, options, defaultValue }) {
  const id = `appt-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded border border-border-main bg-white px-4 py-3 text-base text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
