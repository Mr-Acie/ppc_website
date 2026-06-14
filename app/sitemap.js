const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pamperedcompanioncare.org";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/book", priority: 0.95, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/workshops", priority: 0.8, changeFrequency: "monthly" },
    { path: "/courses", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mighty-elders", priority: 0.6, changeFrequency: "monthly" },
    { path: "/mighty-elders/for-families", priority: 0.5, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
