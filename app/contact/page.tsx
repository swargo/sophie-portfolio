import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sophie Wargo",
  description: "Get in touch to start building your website.",
};

export default function ContactPage() {
  return <ContactForm />;
}
