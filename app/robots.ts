import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Robots d'IA et moteurs de recherche explicitement autorisés.
 * Certains (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended…) n'indexent que s'ils
 * sont nommés ou couverts par « * » : on les liste pour lever toute ambiguïté.
 */
const AI_AND_SEARCH_BOTS = [
  // OpenAI (ChatGPT)
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic (Claude)
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Search + Gemini)
  "Googlebot",
  "Google-Extended",
  "GoogleOther",
  // Microsoft (Bing + Copilot)
  "Bingbot",
  // Apple (Siri, Apple Intelligence)
  "Applebot",
  "Applebot-Extended",
  // Meta, Amazon, Mistral, DuckDuckGo, You.com, Cohere, Common Crawl
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "Amazonbot",
  "MistralAI-User",
  "DuckDuckBot",
  "DuckAssistBot",
  "YouBot",
  "cohere-ai",
  "CCBot",
  // Autres moteurs
  "Qwantbot",
  "YandexBot",
  "Baiduspider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_AND_SEARCH_BOTS, allow: ["/", "/llms.txt", "/llms-full.txt"], disallow: "/api/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
