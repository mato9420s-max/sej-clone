'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
  TrendingDown,
  Activity,
  Mail
} from 'lucide-react';
import { MegaSidebar } from '@/components/layout/MegaSidebar';
import { SubscriptionForm } from '@/components/SubscriptionForm';

// Mock data for the Homepage
const FEATURED_POST = {
  id: 'featured-1',
  title: 'What Is Search Engine Optimization (SEO) and Why It Matters in 2026',
  excerpt: 'Organic search still brings in 53% of all website traffic. In 2026, SEO is the strategic process of making your website easy for search engines to find, understand, and recommend to users.',
  slug: 'seo-starter-guide-2026',
  category: 'SEO',
  author: 'Editorial Team',
  publishedAt: '2026-04-06',
  readingTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800'
};

const LATEST_NEWS = [
  {
    id: "news-aeo-seo-geo",
    title: "AEO vs. SEO vs. GEO: The Ultimate 2026 Guide to Dominating AI Search Results",
    slug: "aeo-seo-geo-guide-2026",
    category: "SEO",
    publishedAt: "2m ago",
    image: "/images/aeo-seo-geo.jpg",
    alt: "Comprehensive visual guide comparing AEO (Answer Engine Optimization), SEO (Search Engine Optimization), and GEO (Generative Engine Optimization) strategies for 2026 digital marketing"
  },
  {
    id: "news-align-ai",
    title: "How to Align Your Content with Google’s AI Algorithms in 2026",
    slug: "align-content-ai-2026",
    category: "SEO",
    publishedAt: "5m ago",
    image: "/images/align-content-ai.jpg",
    alt: "Strategic guide showing how to optimize website content to align with Google AI algorithms and improve visibility in 2026"
  },
  {
    id: "news-no-keywords",
    title: "Why SEO in 2026 Is No Longer About Winning the Keywords",
    slug: "seo-2026-no-keywords",
    category: "SEO",
    publishedAt: "10m ago",
    image: "/images/seo-no-keywords.jpg",
    alt: "Modern SEO strategy visual explaining how keyword-focused tactics have evolved, emphasizing entity recognition, topical authority, and AI-driven search optimization in 2026"
  },
  {
    id: "news-rank-higher",
    title: "How to Rank Higher on Google in 2026: The Ultimate Guide to SEO and AI Visibility",
    slug: "rank-higher-google-2026",
    category: "SEO",
    publishedAt: "30m ago",
    image: "/images/rank-higher-2026.jpg",
    alt: "Comprehensive 2026 SEO roadmap illustrating strategies for achieving higher Google rankings through AI-optimized content, technical excellence, and user experience optimization"
  },
  {
    id: "news-traffic-down",
    title: "Why Your Organic Traffic Is Down (And How to Fix It FAST)",
    slug: "traffic-down-fix-fast",
    category: "SEO",
    publishedAt: "1h ago",
    image: "/images/organic-traffic-down.jpg",
    alt: "Diagnostic guide revealing causes of declining organic traffic and proven solutions to recover rankings and restore search engine visibility quickly"
  },
];

const CATEGORIES = [
  { name: 'SEO', slug: 'seo' },
  { name: 'PPC', slug: 'paid-media' },
  { name: 'Content', slug: 'content-marketing' },
  { name: 'Social', slug: 'social-media' },
  { name: 'AI', slug: 'ai' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black tracking-tighter uppercase italic text-gray-900">
              SEORANKER<span className="text-[#FF6B00]">AI</span>
            </h1>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/category/seo" className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all">SEO</Link>
              <Link href="/category/paid-media" className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all">Paid Media</Link>
              <Link href="/category/content-marketing" className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all">Content</Link>
              <Link href="/category/news" className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all">News</Link>
            </div>
          </div>
          <button className="bg-[#FF6B00] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#E65A00] transition-colors shadow-lg shadow-orange-500/20">
            Subscribe
          </button>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1 space-y-16">
            
            {/* HERO SECTION - FEATURED POST */}
            <section className="group relative">
              <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden rounded-2xl bg-gray-100 mb-6 border border-gray-100 shadow-xl">
                <img 
                  src={FEATURED_POST.image} 
                  alt={FEATURED_POST.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                  <span className="inline-block bg-[#FF6B00] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-4 w-fit rounded">
                    {FEATURED_POST.category}
                  </span>
                  <Link href={`/${FEATURED_POST.category.toLowerCase().replace(/ /g, '-')}/${FEATURED_POST.slug}`}>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight hover:text-[#FF6B00] transition-colors">
                      {FEATURED_POST.title}
                    </h2>
                  </Link>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {FEATURED_POST.excerpt}
              </p>
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-400 font-medium">
                <span className="text-gray-900 font-bold">{FEATURED_POST.author}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(FEATURED_POST.publishedAt).toLocaleDateString()}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {FEATURED_POST.readingTime}
                </div>
              </div>
            </section>

            {/* LATEST NEWS GRID */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#FF6B00]" />
                  <h2 className="text-2xl font-black uppercase tracking-tighter italic">Latest Search News</h2>
                </div>
                <Link href="/category/news" className="text-[#FF6B00] text-sm font-bold flex items-center gap-1 group uppercase tracking-widest">
                  See All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {LATEST_NEWS.map((news) => (
                  <article key={news.id} className="group flex flex-col">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-100">
                      <img
                        src={news.image}
                        alt={news.alt || news.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-[#FF6B00] tracking-widest mb-2 block">
                      {news.category}
                    </span>
                    <Link href={`/${news.category.toLowerCase().replace(/ /g, '-')}/${news.slug}`}>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#FF6B00] transition-colors mb-2">
                        {news.title}
                      </h3>
                    </Link>
                    <div className="mt-auto text-xs text-gray-400 font-medium">
                      {news.publishedAt}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* CATEGORY EXPLORER */}
            <section className="bg-gray-900 rounded-3xl p-8 lg:p-16 text-white overflow-hidden border border-gray-800 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-3 italic">Explore by Category</h2>
                  <p className="text-gray-400 text-sm">Discover content tailored to your interests</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`/category/${cat.slug}`}
                      className="group relative"
                    >
                      <div className="relative flex items-center justify-center aspect-square bg-gray-800 rounded-2xl border border-gray-700 hover:border-[#FF6B00] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-2">
                        {/* Category name */}
                        <h3 className="font-black uppercase tracking-wider text-base md:text-lg text-white text-center px-4">
                          {cat.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <MegaSidebar />

        </div>
      </main>

      {/* SUBSCRIPTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 lg:p-20 text-white overflow-hidden border border-gray-800 relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Mail className="w-12 h-12 text-[#FF6B00]" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 italic">
              SEO Insights in Your Inbox
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Stay ahead of the curve with our weekly newsletter featuring the latest SEO trends, algorithm updates, and expert insights.
            </p>

            <SubscriptionForm />

            <p className="text-xs text-gray-400 mt-6">
              ✓ No spam • ✓ Unsubscribe anytime • ✓ Your email is safe with us
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 bg-gray-950 text-white py-20 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic mb-6">
              SEARCH<span className="text-[#FF6B00]">ENGINE</span>JOURNAL
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Helping digital marketers succeed in the ever-changing search landscape since 2003. We provide the latest news, analysis, and best practices.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-6 text-[#FF6B00]">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-6 text-[#FF6B00]">Network</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/category/news" className="hover:text-white transition-colors">Newsletters</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-20 pt-10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 SEARCH ENGINE JOURNAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
