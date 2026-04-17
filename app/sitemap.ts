import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";

const baseUrl = "https://greenexpert.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/cover.png`],
    },
    {
      url: `${baseUrl}/notre-processus`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [s.heroImage],
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projets/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
    images: [p.heroImage, ...p.gallery.map((g) => g.src)],
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
