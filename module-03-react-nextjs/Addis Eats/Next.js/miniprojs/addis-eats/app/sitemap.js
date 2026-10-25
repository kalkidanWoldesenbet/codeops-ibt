
import { dishes } from "@/data/dishes";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-production-domain.com";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/menu`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...dishes.map((dish) => ({
      url: `${siteUrl}/menu/${dish.id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];
}
