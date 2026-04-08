import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Clock, 
  Bookmark, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface SidebarPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  timeAgo: string;
}

const MOCK_TRENDING: SidebarPost[] = [
  { id: '1', title: 'Google confirms March 2026 Core Update rollout', slug: 'google-march-update', category: 'SEO', timeAgo: '2h ago' },
  { id: '2', title: 'Why AI Content is outperforming Human Content in 2026', slug: 'ai-content-outperforming', category: 'Content Marketing', timeAgo: '4h ago' },
  { id: '3', title: '15 Schema Markup tips for eCommerce stores', slug: 'schema-tips-ecommerce', category: 'Technical SEO', timeAgo: '6h ago' },
];

export function MegaSidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8 sticky top-24 self-start">
      {/* Trending Topics section */}
      <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#FF6B00]" />
          <h2 className="font-bold text-xl uppercase tracking-tighter italic">Trending Topics</h2>
        </div>
        <div className="space-y-6">
          {MOCK_TRENDING.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <span className="text-[10px] font-bold uppercase text-[#FF6B00] tracking-widest block mb-1">
                {post.category}
              </span>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#FF6B00] leading-snug transition-colors">
                <Link href={`/${post.category.toLowerCase().replace(/ /g, '-')}/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{post.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
        <Link href="/category/news" className="w-full mt-8 py-2 px-4 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group uppercase tracking-widest">
          View All Trending
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </aside>
  );
}
