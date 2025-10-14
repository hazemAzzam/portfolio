import React from "react";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";
import type { Metadata } from "next";
import DashboardAuthWrapper from "./_components/DashboardAuthWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio Dashboard",
    default: "Portfolio Dashboard",
  },
  description:
    "Manage your portfolio projects, skills, and personal information",
  keywords: ["portfolio", "dashboard", "projects", "skills", "management"],
  authors: [{ name: "Portfolio Admin" }],
  creator: "Portfolio Dashboard",
  publisher: "Portfolio Dashboard",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/dashboard",
    title: "Portfolio Dashboard",
    description:
      "Manage your portfolio projects, skills, and personal information",
    siteName: "Portfolio Dashboard",
  },
  twitter: {
    card: "summary",
    title: "Portfolio Dashboard",
    description:
      "Manage your portfolio projects, skills, and personal information",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardAuthWrapper>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </DashboardAuthWrapper>
  );
}
