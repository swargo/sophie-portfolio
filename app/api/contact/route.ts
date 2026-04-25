import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, honeypot, loadedAt } = body;

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (loadedAt && Date.now() - Number(loadedAt) < 2000) {
    return NextResponse.json(
      { error: "Form submitted too quickly." },
      { status: 400 },
    );
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (name.trim().length > 100) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (message.trim().length > 5000) {
    return NextResponse.json(
      { error: "Message is too long (5000 character limit)." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <contact@sophiewargo.com>",
    to: ["sophie.wargo@gmail.com"],
    replyTo: email.trim(),
    subject: `New message from ${name.trim()}`,
    html: `
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
    text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
