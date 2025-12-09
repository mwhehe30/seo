import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://seo-ten-sand.vercel.app/sitemap.xml',
    host: 'https://seo-ten-sand.vercel.app',
  };
}
