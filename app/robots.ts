import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://my-portfolio-l173.onrender.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/sentry-example-page"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
