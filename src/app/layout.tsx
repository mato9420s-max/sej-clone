import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeoRankerAI - AI-Powered SEO & Content Optimization Platform",
  description: "SeoRankerAI helps you rank higher on Google with AI-driven SEO optimization, content strategy, and search analytics. Optimize for Google, ChatGPT, and AI search engines.",
  metadataBase: new URL("https://seorankerai.com"),
  alternates: { canonical: "https://seorankerai.com/" },
  openGraph: {
    title: "SeoRankerAI - AI-Powered SEO Platform",
    description: "Rank higher on Google with AI-driven SEO optimization and content strategy",
    url: "https://seorankerai.com/",
    siteName: "SeoRankerAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeoRankerAI - AI-Powered SEO Platform",
    description: "Optimize your content for Google and AI search engines",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
