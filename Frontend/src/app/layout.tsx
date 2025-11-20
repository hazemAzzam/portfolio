import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/Footer";
import { structuredData } from "@/lib/structured-data";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hazem Azzam - Frontend Developer Portfolio",
  description:
    "Passionate frontend developer with 5+ years of experience creating modern, responsive web applications. Specializing in React, TypeScript, and modern CSS frameworks.",
  keywords: [
    "frontend developer",
    "react",
    "typescript",
    "next.js",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Hazem Azzam" }],
  creator: "Hazem Azzam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hazemAzzam.com",
    title: "Hazem Azzam - Frontend Developer Portfolio",
    description:
      "Passionate frontend developer with 5+ years of experience creating modern, responsive web applications.",
    siteName: "Hazem Azzam Portfolio",
    images: [
      {
        url: "https://hazemAzzam.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hazem Azzam - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazem Azzam - Frontend Developer Portfolio",
    description:
      "Passionate frontend developer with 5+ years of experience creating modern, responsive web applications.",
    images: ["https://hazemAzzam.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
