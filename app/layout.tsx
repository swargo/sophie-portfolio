import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { BackgroundDecorations } from "@/components/BackgroundDecorations";
import { Toast } from "@/components/Toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sophie Wargo — Web Developer",
  description:
    "Custom websites built for small businesses. Clean, fast, and accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <Toast message="Currently under construction. Don't mind the broken links! App examples coming soon." />
        <BackgroundDecorations />
        <SiteHeader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
