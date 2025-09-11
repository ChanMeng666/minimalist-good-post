import React from 'react';
import Head from '@docusaurus/Head';

/**
 * AdvancedSchema - Enhanced Structured Data Component
 * 
 * Generates sophisticated JSON-LD schemas for different content types
 * to improve AI understanding and search engine visibility.
 */
const AdvancedSchema = ({ 
  type, 
  content, 
  author = 'Chan Meng',
  publishDate,
  modifiedDate,
  images = [],
  readingTime,
  difficulty,
  prerequisites = [],
  tools = [],
  materials = [],
  steps = [],
  benefits = [],
  relatedArticles = []
}) => {
  
  const baseUrl = 'https://minimalist-good-post.vercel.app';
  
  /**
   * Generate comprehensive Article schema
   */
  const generateArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.description,
    "image": images.map(img => `${baseUrl}${img}`),
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://github.com/ChanMeng666",
      "sameAs": [
        "https://www.linkedin.com/in/chanmeng666/",
        "https://github.com/ChanMeng666"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Minimalist Living",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/img/minimalist-good-post-black.svg`
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : baseUrl
    },
    "articleSection": "Minimalist Living",
    "wordCount": content.wordCount,
    "timeRequired": readingTime,
    "keywords": content.keywords?.join(', '),
    "about": {
      "@type": "Thing",
      "name": "Minimalist Lifestyle",
      "description": "Intentional living through simplification"
    },
    "mentions": benefits.map(benefit => ({
      "@type": "Thing",
      "name": benefit
    })),
    "isAccessibleForFree": true,
    "inLanguage": "en-US"
  });

  /**
   * Generate detailed HowTo schema for guides
   */
  const generateHowToSchema = () => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": content.title,
    "description": content.description,
    "image": images.map(img => `${baseUrl}${img}`),
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://github.com/ChanMeng666"
    },
    "datePublished": publishDate,
    "totalTime": readingTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "image": step.image ? `${baseUrl}${step.image}` : undefined
    })),
    "supply": materials.map(material => ({
      "@type": "HowToSupply",
      "name": material
    })),
    "tool": tools.map(tool => ({
      "@type": "HowToTool",
      "name": tool
    })),
    "yield": "Simplified, minimalist lifestyle",
    "prepTime": "PT0M",
    "performTime": readingTime,
    "about": {
      "@type": "Thing",
      "name": "Minimalist Living Techniques"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": difficulty === 'beginner' ? 'Minimalism beginners' : 'Experienced minimalists'
    }
  });

  /**
   * Generate Course schema for comprehensive guides
   */
  const generateCourseSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": content.title,
    "description": content.description,
    "provider": {
      "@type": "Organization",
      "name": "Minimalist Living",
      "url": baseUrl
    },
    "instructor": {
      "@type": "Person",
      "name": author
    },
    "coursePrerequisites": prerequisites.join(', '),
    "educationalLevel": difficulty,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Article",
    "timeRequired": readingTime,
    "about": {
      "@type": "Thing",
      "name": "Minimalist Living Skills"
    }
  });

  /**
   * Generate FAQ schema for common questions
   */
  const generateFAQSchema = (faqs = []) => ({
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

  /**
   * Generate BreadcrumbList schema for navigation
   */
  const generateBreadcrumbSchema = () => {
    const pathSegments = typeof window !== 'undefined' 
      ? window.location.pathname.split('/').filter(Boolean)
      : [];
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    };
  };

  /**
   * Generate WebSite schema for homepage
   */
  const generateWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Minimalist Living",
    "description": "Comprehensive platform for minimalist lifestyle guidance and inspiration",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://github.com/ChanMeng666"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Minimalist Living",
      "url": baseUrl
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "genre": ["Lifestyle", "Minimalism", "Self-improvement"],
    "keywords": "minimalism, minimalist living, intentional living, simple life, decluttering, digital minimalism",
    "about": {
      "@type": "Thing",
      "name": "Minimalist Lifestyle Education"
    }
  });

  /**
   * Generate Collection schema for article series
   */
  const generateCollectionSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Collection",
    "name": `${content.title} - Minimalist Living Series`,
    "description": "Comprehensive minimalist living guidance series",
    "hasPart": relatedArticles.map(article => ({
      "@type": "Article",
      "name": article.title,
      "url": `${baseUrl}${article.url}`
    })),
    "about": {
      "@type": "Thing",
      "name": "Minimalist Living Education"
    }
  });

  // Determine which schemas to generate based on content type
  const getSchemas = () => {
    const schemas = [];
    
    // Always include breadcrumb
    schemas.push(generateBreadcrumbSchema());
    
    switch (type) {
      case 'home':
        schemas.push(generateWebSiteSchema());
        break;
        
      case 'guide':
        schemas.push(generateHowToSchema());
        if (prerequisites.length > 0 || difficulty !== 'beginner') {
          schemas.push(generateCourseSchema());
        }
        break;
        
      case 'case_study':
        schemas.push(generateArticleSchema());
        if (relatedArticles.length > 0) {
          schemas.push(generateCollectionSchema());
        }
        break;
        
      default:
        schemas.push(generateArticleSchema());
    }
    
    return schemas;
  };

  return (
    <Head>
      {getSchemas().map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      ))}
    </Head>
  );
};

export default AdvancedSchema;
