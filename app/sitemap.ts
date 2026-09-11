import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/notre-processus", "/paysagiste-rabat", "/amenagement-espaces-verts", "/conseils/amenagement-espaces-verts"];
  return [
    ...pages.map((path) => ({ url: siteUrl(path), lastModified: new Date("2026-09-04"), images: [siteUrl("/cover.png")] })),
    ...services.map((service) => ({ url: siteUrl(`/services/${service.slug}`), lastModified: new Date("2026-09-04"), images: [siteUrl(service.heroImage)] })),
    ...projects.filter((project) => project.published).map((project) => ({ url: siteUrl(`/projets/${project.slug}`), images: [...new Set([project.heroImage, ...project.gallery.map((image) => image.src)])].map((image) => siteUrl(image)) })),
  ];
}
