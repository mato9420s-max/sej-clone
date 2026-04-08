import React from 'react';
import Link from 'next/link';
import { MegaSidebar } from '@/components/layout/MegaSidebar';
import { Activity, Calendar, Tag } from 'lucide-react';

export default function NewsPage() {
  const posts = [
    { id: '0', title: 'The Complete Guide to Ranking on Etsy: From Algorithm Fundamentals to Advanced Traffic Techniques', slug: 'ranking-on-etsy-guide', category: 'SEO', publishedAt: '2026-04-05', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=400' },
    { id: '1', title: 'Google confirms March 2026 Core Update rollout', slug: 'google-march-update', category: 'SEO', publishedAt: '2026-03-05', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Activity className="w-12 h-12 text-[#FF6B00] mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            Search Engine News
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Breaking news and in-depth analysis of the latest updates in SEO, Paid Media, and Digital Marketing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              {posts.map((post) => (
                <article key={post.id} className="group flex flex-col">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6 border border-gray-100 shadow-sm">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-[#FF6B00] tracking-[0.2em] mb-3 block">
                    {post.category}
                  </span>
                  <Link href={`/${post.category.toLowerCase().replace(/ /g, '-')}/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-tight mb-4">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <MegaSidebar />
        </div>
      </div>
    </main>
  );
}
