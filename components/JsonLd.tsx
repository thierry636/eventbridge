import { BOOKING_URL } from "@/lib/booking";
import { FAQ } from "@/lib/faq";
import { APP_URL, AUDIENCES, KEYWORDS, LAST_UPDATED, PILLARS, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

/** Données structurées schema.org (Organization, WebSite, WebPage, SoftwareApplication, FAQPage). */
export function JsonLd() {
  const org = `${SITE_URL}/#organization`;
  const site = `${SITE_URL}/#website`;
  const app = `${SITE_URL}/#software`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/favicon.svg`,
        description: SITE_DESCRIPTION,
        areaServed: { "@type": "Country", name: "France" },
        contactPoint: { "@type": "ContactPoint", contactType: "sales", url: BOOKING_URL, availableLanguage: "fr" },
      },
      {
        "@type": "WebSite",
        "@id": site,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "fr-FR",
        publisher: { "@id": org },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "fr-FR",
        isPartOf: { "@id": site },
        about: { "@id": app },
        dateModified: LAST_UPDATED,
        primaryImageOfPage: `${SITE_URL}/opengraph-image`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": app,
        name: SITE_NAME,
        url: APP_URL,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Gestion de données touristiques",
        operatingSystem: "Web",
        description: SITE_DESCRIPTION,
        inLanguage: "fr-FR",
        keywords: KEYWORDS.join(", "),
        featureList: PILLARS.map((p) => `${p.name} : ${p.text}`),
        audience: AUDIENCES.map((a) => ({ "@type": "BusinessAudience", audienceType: a.name })),
        publisher: { "@id": org },
        offers: {
          "@type": "Offer",
          name: "Test gratuit sur vos sources",
          price: "0",
          priceCurrency: "EUR",
          url: `${SITE_URL}/#test-gratuit`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
