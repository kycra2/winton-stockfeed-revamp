import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: object;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-og.jpg',
  ogType = 'website',
  schema
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta description
    updateMeta('description', description);
    
    // Update keywords if provided
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // Update Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    
    // Update Twitter tags
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Add schema markup
    if (schema) {
      // Remove existing page-specific schema
      const existingSchema = document.querySelector('script[data-schema="page"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'page');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup function
    return () => {
      const pageSchema = document.querySelector('script[data-schema="page"]');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema]);

  return null;
};

export default SEOHead;

// Reusable schema generators
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Winton Stock Feed",
  "description": "New Zealand's largest independent importer and specialist distributor of molasses and stock feed since 1988",
  "url": "https://wintonstockfeed.co.nz",
  "telephone": "+64 3 236 6089",
  "email": "office@wintonstockfeed.co.nz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "139 Florence Road",
    "addressLocality": "Winton",
    "postalCode": "9782",
    "addressCountry": "NZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -46.1460,
    "longitude": 168.3310
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "$$",
  "image": "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-fleet.jpg",
  "sameAs": [
    "https://www.facebook.com/wintonstockfeed"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  }
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image || "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-og.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Winton Stock Feed"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Winton Stock Feed"
  },
  "category": product.category || "Animal Feed",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "NZD",
    "seller": {
      "@type": "Organization",
      "name": "Winton Stock Feed"
    }
  }
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Winton Stock Feed",
  "url": "https://wintonstockfeed.co.nz",
  "logo": "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-logo.png",
  "description": "New Zealand's largest independent importer and specialist distributor of molasses and stock feed since 1988",
  "foundingDate": "1988",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+64-3-236-6089",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "NZ"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "139 Florence Road",
    "addressLocality": "Winton",
    "postalCode": "9782",
    "addressCountry": "NZ"
  }
});
