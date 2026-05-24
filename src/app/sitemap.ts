import { MetadataRoute } from 'next';
import ritualsData from "@/data/rituals.json";
import { i18n } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://universefrekuensi.com';
  
  // Base routes
  const routes = ['', '/rituals'].flatMap((route) => {
    return i18n.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }));
  });

  // Dynamic Ritual Routes
  const ritualRoutes = ritualsData.flatMap((ritual) => {
    return i18n.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/rituals/${ritual.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  });

  return [...routes, ...ritualRoutes];
}
