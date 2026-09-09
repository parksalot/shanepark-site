import type { MetadataRoute } from "next";
import { INDUSTRIES, INSIGHTS, SERVICES, SITE } from "@/lib/content";

/**
 * Insight posts are deliberately absent until they are written — listing a
 * planned URL in the sitemap invites Google to crawl a page that isn't there.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/method", priority: 0.8 },
    { path: "/for-agencies", priority: 0.7 },
    { path: "/teardown", priority: 0.9 },
    { path: "/about", priority: 0.5 },
    { path: "/insights", priority: 0.6 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...staticPaths.map(({ path, priority }) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      priority,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...INDUSTRIES.map((industry) => ({
      url: `${SITE.url}/industries/${industry.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...INSIGHTS.filter((insight) => insight.published).map((insight) => ({
      url: `${SITE.url}/insights/${insight.slug}`,
      lastModified: new Date(insight.published!.date),
      priority: 0.7,
    })),
  ];
}
