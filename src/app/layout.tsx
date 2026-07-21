import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://buckswise.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "BucksWise",
    template: "%s | BucksWise",
  },

  description:
    "BucksWise is an AI-powered personal finance platform that helps you budget smarter, track spending, analyze expenses, and achieve your financial goals.",

  keywords: [
    "finance",
    "budget",
    "expense tracker",
    "AI finance",
    "personal finance",
    "money management",
    "financial dashboard",
    "investment",
    "budget planner",
    "fintech",
  ],

  authors: [
    {
      name: "BucksWise Team",
    },
  ],

  creator: "BucksWise",

  publisher: "BucksWise",

  category: "Finance",

  applicationName: "BucksWise",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BucksWise",
    description:
      "AI-powered personal finance platform to budget, save, invest, and make smarter financial decisions.",
    siteName: "BucksWise",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BucksWise Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BucksWise",
    description:
      "AI-powered personal finance platform for smarter money management.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <ScrollProgress />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}