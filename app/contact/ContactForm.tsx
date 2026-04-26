"use client";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Container } from "@/components/Container";
import { theme } from "@/components/Theme";
import { Link } from "@/components/Link";

const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${theme.space[8]} 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.space[8]};
  h1 {
    font-size: 36px;
    margin: 0 0 ${theme.space[3]} 0;
  }
  p {
    font-size: ${theme.fontSize.lg};
    color: #555;
    margin: 0;
    line-height: 1.5;
  }
`;

const FormCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: ${theme.space[7]};
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[5]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[1]};
`;

const Label = styled.label`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.semiBold};
`;

const inputStyles = `
  padding: ${theme.space[3]} ${theme.space[4]};
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  font-size: ${theme.fontSize.md};
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  background-color: white;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  :focus {
    border-color: ${theme.color.tertiary};
    box-shadow: 0 0 0 3px ${theme.color.primary};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  min-height: 140px;
  resize: vertical;
  line-height: 1.5;
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  background-color: ${theme.color.bk};
  color: ${theme.color.wh};
  border: 1px solid ${theme.color.bk};
  border-radius: 4px;
  padding: 8.5px 18px;
  font-family: ${theme.font.primary.fontFamily};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.md};
  line-height: 21px;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  :hover:not(:disabled) {
    background-color: ${theme.color.darkAccent};
    border-color: ${theme.color.darkAccent};
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  font-size: ${theme.fontSize.md};
  color: #c0392b;
  margin: 0;
`;

const SuccessCard = styled.div`
  text-align: center;
  padding: ${theme.space[8]} ${theme.space[6]};
  h3 {
    font-size: ${theme.fontSize.xxl};
    margin: 0 0 ${theme.space[3]} 0;
  }
  p {
    font-size: ${theme.fontSize.lg};
    color: #555;
    margin: 0;
  }
`;

const HoneypotWrapper = styled.div`
  position: absolute;
  left: -9999px;
  opacity: 0;
`;

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
      <PageWrapper>
        <PageHeader>
          <h1>Get in touch</h1>
          <p>
            Tell me about your project and I'll get back to you within one
            business day.
          </p>
        </PageHeader>
        <FormCard>
          {status === "success" ? (
            <SuccessCard>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll be in touch soon.</p>
              <Link href="/" label="Back to home" />
            </SuccessCard>
          ) : (
            <Form onSubmit={handleSubmit}>
              <HoneypotWrapper aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </HoneypotWrapper>

              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              {status === "error" && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              )}

              <SubmitButton type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send message"}
              </SubmitButton>
            </Form>
          )}
        </FormCard>
      </PageWrapper>
    </Container>
  );
};
