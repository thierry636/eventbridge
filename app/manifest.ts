import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: "fr",
    start_url: "/",
    display: "browser",
    background_color: "#16142B",
    theme_color: "#16142B",
    icons: [{ src: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
