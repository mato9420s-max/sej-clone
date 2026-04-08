import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MegaSidebar } from '@/components/layout/MegaSidebar';
import { Tag, Calendar, Clock, ArrowRight } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Mock function to simulate DB fetch for category posts
async function getCategoryData(slug: string) {
  const categories: Record<string, any> = {
    'seo': {
      name: 'SEO',
      description: 'The latest news, guides, and best practices for Search Engine Optimization.',
      posts: [
        { id: '1', title: 'The Complete Guide to Ranking on Etsy: From Algorithm Fundamentals to Advanced Traffic Techniques', slug: 'ranking-on-etsy-guide', category: 'SEO', publishedAt: '2026-04-05', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=400' },
        { id: '2', title: 'Google confirms March 2026 Core Update rollout', slug: 'google-march-update', category: 'SEO', publishedAt: '2026-03-05', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
      ]
    },
    'paid-media': {
      name: 'Paid Media',
      description: 'Insights and strategies for PPC, Social Ads, and Display advertising.',
      posts: []
    },
    'content-marketing': {
      name: 'Content Marketing',
      description: 'How to create content that ranks and converts in the age of AI.',
      posts: [
        { id: '4', title: 'Why AI Content is outperforming Human Content in 2026', slug: 'ai-content-outperforming', category: 'Content Marketing', publishedAt: '2026-03-28', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400' },
      ]
    }
  };

  return categories[slug.toLowerCase()] || null;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const data = await getCategoryData(slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-4">
            <Tag className="w-4 h-4" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            {data.name}
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            {data.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {data.posts.map((post: any) => (
                <article key={post.id} className="group border-b border-gray-100 pb-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <Link href={`/${post.category.toLowerCase().replace(/ /g, '-')}/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-tight mb-4">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
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
