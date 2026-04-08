import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { parseArticleContent } from "@/lib/article-parser";
import { ArticleContent } from "@/components/article/ArticleContent";
import { MegaSidebar } from "@/components/layout/MegaSidebar";
import {
  Calendar,
  User,
  Tag,
  Share2,
  MessageCircle,
  Clock,
  TrendingUp
} from "lucide-react";

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

async function getPost(slug: string) {
  const posts: Record<string, any> = {
    "aeo-seo-geo-guide-2026": {

      title: "AEO vs. SEO vs. GEO: The Ultimate 2026 Guide to Dominating AI Search Results",
      featureImage: {
        src: "/images/aeo-seo-geo.jpg",
        alt: "Comprehensive visual guide comparing AEO, SEO, and GEO strategies for 2026 digital marketing"
      },
      content: `<div class="bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 mb-12"><h3 class="text-gray-900 font-extrabold uppercase tracking-widest mb-6 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs font-black italic">!</span>Key Takeaways</h3><ul class="space-y-4"><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>Search has evolved from "Blue Links" to "Direct Answers":</strong> In 2026, users expect AI to synthesize and deliver one perfect answer instantly.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>The Trinity of Visibility:</strong> Integrate traditional SEO, AEO, and GEO to rank #1 globally.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>Trust is the New Currency:</strong> Search engines prioritize E-E-A-T over simple keyword matching.</span></li></ul></div><p>The digital landscape has fundamentally shifted. In 2026, nearly 30% of marketers report a decline in traditional organic traffic because AI systems handle search.</p><h2>1. What is SEO in 2026?</h2><p>SEO is the strategic process of improving website visibility in organic search results by matching user intent and optimizing technical performance.</p><h2>2. The Rise of AEO: Being the "Chosen One"</h2><p>Answer Engine Optimization is the art of structuring content so AI assistants can easily extract and present answers.</p><h2>3. GEO: The Future of Contextual SEO</h2><p>Generative Engine Optimization focuses on context and personalization using real-time data.</p>`,
      publishedAt: "2026-04-06",
      author: { name: "Editorial Team", avatar: null },
      category: "SEO",
      readingTime: "10 min read"
    },
    "align-content-ai-2026": {
      title: "How to Align Your Content with Google's AI Algorithms in 2026",
      featureImage: {
        src: "/images/align-content-ai.jpg",
        alt: "Strategic guide for optimizing content to align with Google AI algorithms"
      },
      content: `<div class="bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 mb-12"><h3 class="text-gray-900 font-extrabold uppercase tracking-widest mb-6 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs font-black italic">!</span>Key Takeaways</h3><ul class="space-y-4"><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>The Maturity Shift:</strong> Google transitioned to a proactive system preventing low-quality content from ranking.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>Discover is a Priority:</strong> The February 2026 Discover update emphasizes original expertise.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>AI Efficiency:</strong> Google's TurboQuant reduces AI memory usage by 6x.</span></li></ul></div><p>In 2026, Google moved away from sudden algorithm updates. Instead, it uses an intelligence-driven system rewarding genuine expertise and long-term authority.</p><h2>What Actually Changed?</h2><p>Content should be written for humans and solving problems, not for keywords.</p><h2>The February 2026 Discover Update</h2><p>This update showed that Google treats Discover as a major traffic source requiring its own strategy.</p>`,
      publishedAt: "2026-04-06",
      author: { name: "Editorial Team", avatar: null },
      category: "SEO",
      readingTime: "10 min read"
    },
    "seo-2026-no-keywords": {
      title: "Why SEO in 2026 Is No Longer About Winning the Keywords",
      featureImage: {
        src: "/images/seo-no-keywords.jpg",
        alt: "Modern SEO strategy emphasizing entity recognition and topical authority"
      },
      content: `<div class="bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 mb-12"><h3 class="text-gray-900 font-extrabold uppercase tracking-widest mb-6 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs font-black italic">!</span>Key Takeaways</h3><ul class="space-y-4"><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>Keywords are signals, not the foundation:</strong> Search engines prioritize credibility and user intent.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>AI Citations are the new "Page 1":</strong> With zero-click searches exceeding 60%, appearing in AI Overviews is critical.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span><strong>SEO is a reputation system:</strong> Rankings are earned through E-E-A-T and strong brand signals.</span></li></ul></div><p>AI SEO in 2026 is about optimizing for AI-powered engines like Google AI Overviews, ChatGPT, and Perplexity.</p><h2>The New Reality</h2><p>Search engines now evaluate whether your business is real and if you truly solve the user's problem.</p><h2>How AI Search Engines "Read" Content</h2><p>AI systems look for Entities - concepts that show you know the topic deeply.</p>`,
      publishedAt: "2026-04-06",
      author: { name: "Editorial Team", avatar: null },
      category: "SEO",
      readingTime: "10 min read"
    },
    "rank-higher-google-2026": {
      title: "How to Rank Higher on Google in 2026: The Ultimate Guide to SEO and AI Visibility",
      featureImage: {
        src: "/images/rank-higher-2026.jpg",
        alt: "SEO roadmap for achieving higher rankings through AI-optimized content"
      },
      content: `<div class="bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 mb-12"><h3 class="text-gray-900 font-extrabold uppercase tracking-widest mb-6 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs font-black italic">!</span>Key Takeaways</h3><ul class="space-y-4"><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span>Traditional SEO remains important but is now the minimum requirement.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span>Focus on E-E-A-T and building topical authority across your content.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span>Structure content so AI can easily extract and cite your information.</span></li></ul></div><p>To rank higher in 2026, you must master three areas: Technical SEO, AI Citation Presence, and Conversion Optimization.</p><h2>The 3 Pillars of Success</h2><p>1. Traditional Search Visibility - Technical health and speed<br/>2. AI Citation Presence - Format for easy extraction<br/>3. Conversion-Focused Strategy - Turn rare clicks into revenue</p>`,
      publishedAt: "2026-04-06",
      author: { name: "Editorial Team", avatar: null },
      category: "SEO",
      readingTime: "10 min read"
    },
    "traffic-down-fix-fast": {
      title: "Why Your Organic Traffic Is Down (And How to Fix It FAST)",
      featureImage: {
        src: "/images/organic-traffic-down.jpg",
        alt: "Diagnostic guide for recovering declining organic traffic"
      },
      content: `<div class="bg-gray-50 border border-gray-100 rounded-[32px] p-8 lg:p-10 mb-12"><h3 class="text-gray-900 font-extrabold uppercase tracking-widest mb-6 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs font-black italic">!</span>Key Takeaways</h3><ul class="space-y-4"><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span>Identify whether traffic dropped due to algorithm updates or site issues.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span>Check for thin content and strengthen trust signals immediately.</span></li><li class="flex gap-3 text-gray-700 leading-relaxed"><span class="text-[#FF6B00] font-bold mt-1">•</span><span>Recovery from algorithmic drops takes weeks or months - be patient.</span></li></ul></div><p>If your organic traffic suddenly dropped, don't panic. Follow a systematic diagnosis to identify the root cause.</p><h2>Steps to Recover</h2><p>1. Check for official updates in Google Search Console<br/>2. Segment your traffic by source<br/>3. Audit for thin content<br/>4. Strengthen trust signals<br/>5. Give it time to recover</p>`,
      publishedAt: "2026-04-06",
      author: { name: "Editorial Team", avatar: null },
      category: "SEO",
      readingTime: "10 min read"
    }
  };

  return posts[slug] || null;
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) notFound();

  const { parsedContent, toc } = parseArticleContent(post.content);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 group">
            <Share2 className="w-3.5 h-3.5" /> Back
          </Link>
          <span className="hidden md:block text-[11px] font-bold text-gray-400 uppercase tracking-widest truncate max-w-xs">{post.title}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold">{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 max-w-4xl space-y-16">
            <header className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-bold uppercase tracking-[2px] border border-[#FF6B00]/20">
                  {post.category}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-[2px] border border-gray-200 dark:border-gray-700 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="w-20 h-20 flex-shrink-0 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[28px] flex items-center justify-center shadow-sm">
                  <Tag className="w-8 h-8 text-[#FF6B00]" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white uppercase">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-5 pt-1">
                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      By: <span className="text-gray-900 dark:text-white">{post.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-3 gap-4">
              <div className="h-px bg-gradient-to-r from-[#FF6B00]/60 to-zinc-200 dark:to-gray-700" />
              <div className="h-px bg-zinc-200 dark:bg-gray-700" />
              <div className="h-px bg-zinc-200 dark:bg-gray-700" />
            </div>

            {post.featureImage && (
              <div className="relative w-full h-96 rounded-[28px] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                <img
                  src={post.featureImage.src}
                  alt={post.featureImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <ArticleContent content={parsedContent} toc={toc} />

            <section className="space-y-6 border-t border-zinc-100 dark:border-gray-800 pt-16">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-widest italic">More SEO Intelligence</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Mastering the Marketplace: Etsy Guide", slug: "ranking-on-etsy-guide", category: "SEO" },
                  { title: "Google confirms March 2026 Core Update rollout", slug: "google-march-update", category: "SEO" },
                  { title: "Why AI Content is outperforming Human Content in 2026", slug: "ai-content-outperforming", category: "Content Marketing" }
                ].map((a) => (
                  <Link key={a.slug} href={`/seo/${a.slug}`} className="p-5 bg-zinc-50 dark:bg-gray-800 border border-zinc-100 dark:border-gray-700 rounded-[20px] hover:border-[#FF6B00]/50 hover:-translate-y-0.5 transition-all group space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform border border-zinc-100 dark:border-gray-600">
                      <TrendingUp className="w-5 h-5 text-[#FF6B00]" />
                    </div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-tight leading-snug group-hover:text-[#FF6B00] transition-colors line-clamp-2">{a.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <MegaSidebar />
        </div>
      </div>
    </main>
  );
}
