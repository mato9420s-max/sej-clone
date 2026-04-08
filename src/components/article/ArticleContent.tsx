'use client';

import React, { useEffect, useRef } from 'react';
import { List } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleContentProps {
  content: string;
  toc: TocItem[];
}

export function ArticleContent({ content, toc }: ArticleContentProps) {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (articleRef.current) {
      const links = articleRef.current.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank');
        links[i].setAttribute('rel', 'noopener noreferrer');
      }
    }
  }, [content]);

  return (
    <div className="flex flex-col gap-12">
      {/* Table of Contents Box (Organized Numbered List) */}
      {toc.length > 0 && (
        <nav className="bg-gray-50 border border-gray-100 rounded-[28px] p-8 lg:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-6">
            <List className="w-5 h-5 text-gray-900" />
            <h2 className="font-extrabold text-xl uppercase tracking-tight italic text-gray-900">Inside This Guide</h2>
          </div>
          <div className="flex flex-col gap-4">
            {toc.map((item, index) => (
              <div 
                key={item.id} 
                className={`group flex items-start gap-4 ${item.level > 2 ? 'pl-10' : ''}`}
              >
                <span className="text-gray-300 group-hover:text-[#FF6B00] font-black text-sm mt-0.5 transition-colors min-w-[24px]">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <a 
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-[#FF6B00] transition-colors font-bold text-sm uppercase tracking-tight leading-tight pt-0.5"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </nav>
      )}

      {/* Main Article Body (SEJ Typography) */}
      <article 
        ref={articleRef}
        suppressHydrationWarning={true}
        className="prose prose-lg max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-gray-900 prose-headings:uppercase prose-headings:italic prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base prose-p:mb-8 prose-a:text-gray-900 prose-a:no-underline hover:prose-a:text-[#FF6B00] hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-bold prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-3 prose-li:text-gray-700 prose-li:text-base prose-table:border prose-table:border-gray-200 prose-table:rounded-xl prose-table:overflow-hidden prose-thead:bg-gray-50 prose-th:px-6 prose-th:py-4 prose-th:text-xs prose-th:font-extrabold prose-th:uppercase prose-th:tracking-widest prose-th:text-gray-900 prose-th:border-b prose-th:border-gray-200 prose-td:px-6 prose-td:py-4 prose-td:text-sm prose-td:text-gray-600 prose-td:border-b prose-td:border-gray-100 last:prose-td:border-0"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
