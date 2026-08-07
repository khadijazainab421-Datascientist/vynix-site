import { MetadataRoute } from "next";

const BASE_URL = "https://vynex.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",

    // Main Pages
    "/about",
    "/contact",

    // VPS Locations
    "/vps/usa",
    "/vps/uk",
    "/vps/pakistan",
    "/vps/australia",
    "/vps/canada",
    "/vps/dubai",
    "/vps/germany",
    "/vps/singapore",

    // VPS / VDS
    "/vps/windows",
    "/vps/linux",
    "/vps/cpanel",
    "/vps/gpu",

    // RDP
    "/rdp/windows-10",
    "/rdp/windows-server",
    "/rdp/usa",
    "/rdp/uk",
    "/rdp/pakistan",
    "/rdp/australia",
    "/rdp/canada",
    "/rdp/dubai",
    "/rdp/germany",
    "/rdp/singapore",

    // Applications
    "/apps/nodejs",
    "/apps/docker",
    "/apps/ubuntu",
    "/apps/debian",
    "/apps/almalinux",
    "/apps/database",
    "/apps/moodle",
    "/apps/odoo",
    "/apps/crm",
    "/apps/n8n",
    "/apps/ecommerce",
    "/apps/tiktok",
    "/apps/botting",
    "/apps/forex",
    "/apps/streaming",
    "/apps/bigbluebutton",

    // Email & Hosting
    "/email/business",
    "/email/google-workspace",
    "/email/microsoft-365",
    "/hosting/cpanel",
    "/hosting/cloud-panel",
    "/ssl",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}