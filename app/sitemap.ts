// app/sitemap.ts
import { MetadataRoute } from 'next';

const BASE_URL = 'https://netvaz.com';

// List all your routes here
const routes = [
  // Home
  { path: '', priority: 1.0, changefreq: 'daily' as const },
  
  // VPS Pages
  { path: '/vps', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/vps/pakistan', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/vps/usa', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/vps/uk', priority: 0.9, changefreq: 'weekly' as const },
  
  // Server Pages
  { path: '/servers', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/servers/pakistan', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/servers/usa', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/servers/uk', priority: 0.9, changefreq: 'weekly' as const },
  
  // Colocation Pages
  { path: '/colocation', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/colocation/pakistan', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/colocation/usa', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/colocation/uk', priority: 0.9, changefreq: 'weekly' as const },
  
  // Company Pages
  { path: '/about', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/blog', priority: 0.8, changefreq: 'daily' as const },
  { path: '/careers', priority: 0.5, changefreq: 'weekly' as const },
  { path: '/partners', priority: 0.5, changefreq: 'monthly' as const },
  { path: '/affiliate', priority: 0.5, changefreq: 'monthly' as const },
  
  // Support Pages
  { path: '/support', priority: 0.7, changefreq: 'weekly' as const },
  { path: '/support/knowledge-base', priority: 0.7, changefreq: 'weekly' as const },
  { path: '/support/documentation', priority: 0.7, changefreq: 'weekly' as const },
  { path: '/support/api', priority: 0.7, changefreq: 'weekly' as const },
  
  // Legal Pages
  { path: '/terms', priority: 0.3, changefreq: 'yearly' as const },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' as const },
  { path: '/cookies', priority: 0.3, changefreq: 'yearly' as const },
  { path: '/sla', priority: 0.3, changefreq: 'yearly' as const },
  { path: '/gdpr', priority: 0.3, changefreq: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];
  
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastmod: today,
    changefreq: route.changefreq,
    priority: route.priority,
  }));
}