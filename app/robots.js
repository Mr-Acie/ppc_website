const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pamperedcompanioncare.org";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/mighty-elders/admin"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
