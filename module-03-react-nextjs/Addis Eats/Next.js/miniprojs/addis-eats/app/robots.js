
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-production-domain.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/cart",
        "/checkout",
        "/orders",
        "/staff",
        "/sign-in",
        "/api/",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
