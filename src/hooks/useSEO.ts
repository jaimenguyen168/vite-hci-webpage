import { useEffect } from "react";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
}: SEOConfig) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Open Graph meta tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical || window.location.href },
    ];

    if (ogImage) {
      ogTags.push({ property: "og:image", content: ogImage });
    }

    ogTags.forEach((tag) => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", tag.content);
    });

    // Twitter Card meta tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];

    if (ogImage) {
      twitterTags.push({ name: "twitter:image", content: ogImage });
    }

    twitterTags.forEach((tag) => {
      let twitterMeta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement("meta");
        twitterMeta.setAttribute("name", tag.name);
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute("content", tag.content);
    });

    // Cleanup function (optional)
    return () => {
      console.log("Cleaning up SEO meta tags");
    };
  }, [title, description, keywords, canonical, ogImage]);
};
