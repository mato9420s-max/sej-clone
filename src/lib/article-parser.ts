import { JSDOM } from 'jsdom';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function parseArticleContent(htmlContent: string) {
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;
  
  // 1. Generate TOC and add IDs to headings
  const toc: TocItem[] = [];
  const headings = doc.querySelectorAll('h2, h3');
  
  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.setAttribute('id', id);
    toc.push({
      id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.replace('H', ''), 10)
    });
  });

  // Removed Ad injection logic as requested.

  return {
    parsedContent: doc.body.innerHTML,
    toc
  };
}
