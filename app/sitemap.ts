import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/slot", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/demo", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/info", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/stats", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/app", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/live", priority: 0.8, changeFrequency: "daily" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
