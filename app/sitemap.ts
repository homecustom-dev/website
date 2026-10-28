import type { MetadataRoute } from "next";

const baseUrl = "https://www.homecustom.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/produk",
    "/tentang-kami",
    "/portofolio",
    "/karier",
    "/kontak",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}