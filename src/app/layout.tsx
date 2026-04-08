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
  keywords: [
    "SEO",
    "AI SEO",
    "content optimization",
    "search engine optimization",
    "Google ranking",
    "AI search",
    "AEO",
    "GEO",
  ],
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
  openGraph: {
    title: "SeoRankerAI - AI-Powered SEO Platform",
    description: "Rank higher on Google with AI-driven SEO optimization and content strategy",
    url: "https://seorankerai.com/",
    siteName: "SeoRankerAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeoRankerAI - AI-Powered SEO Platform",
    description: "Optimize your content for Google and AI search engines",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SeoRankerAI",
    url: "https://seorankerai.com",
    description: "AI-Powered SEO & Content Optimization Platform",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://seorankerai.com/search?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
