import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const sitemapXml: string = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
  <url>
    <loc>https://constantineapp.vercel.app</loc>
    <lastmod>2026-07-21T13:27:25.265Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
