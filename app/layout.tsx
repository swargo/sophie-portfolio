import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { BackgroundDecorations } from "@/components/BackgroundDecorations";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Sophie Wargo — Web Developer",
  description: "Custom websites built for small businesses. Clean, fast, and accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <BackgroundDecorations />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
