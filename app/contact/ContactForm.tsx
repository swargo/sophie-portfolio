"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Container } from "@/components/Container";
import { Link } from "@/components/Link";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [loadedAt, setLoadedAt] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoadedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, loadedAt }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(data.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <Container>
      <div className={styles.pageWrapper}>
        <div className={styles.pageHeader}>
          <h1>Get in touch</h1>
          <p>
            Tell me about your project and I'll get back to you within one
            business day.
          </p>
        </div>
        <div className={styles.formCard}>
          {status === "success" ? (
            <div className={styles.successCard}>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll be in touch soon.</p>
              <Link href="/" label="Back to home" />
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.honeypotWrapper} aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  className={styles.input}
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "error" && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}

              <button className={styles.submitButton} type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
};
