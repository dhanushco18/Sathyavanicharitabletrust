import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sathiyavanitrust.netlify.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/founder",
    "/mission",
    "/vision",
    "/programs",
    "/programs/education",
    "/programs/child-development",
    "/programs/community-outreach",
    "/programs/festival-support",
    "/programs/environment",
    "/impact",
    "/stories",
    "/events",
    "/get-involved",
    "/volunteer",
    "/sponsor",
    "/partnerships",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (route.startsWith("/programs")) {
      priority = 0.9;
      changeFrequency = "monthly";
    } else if (route === "/impact" || route === "/events" || route === "/stories") {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (route === "/get-involved" || route === "/volunteer" || route === "/contact") {
      priority = 0.8;
      changeFrequency = "monthly";
    } else if (route === "/privacy" || route === "/terms") {
      priority = 0.3;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
