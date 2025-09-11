import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import GEOHead from '../../components/GEOHead';
import AdvancedSchema from '../../components/AdvancedSchema';
import { ContentAnalyzer } from '../../components/ContentAnalyzer';

export default function BlogPostPageWrapper(props) {
  // Extract metadata from blog post
  const { content } = props;
  const { metadata, contentTitle } = content;
  const { 
    title, 
    description, 
    tags = [], 
    permalink,
    readingTime,
    date 
  } = metadata;

  // Get the raw content for analysis
  const rawContent = content.contentTitle || '';
  
  // Analyze content structure
  const contentAnalysis = React.useMemo(() => {
    if (rawContent) {
      return ContentAnalyzer.analyze(rawContent, { title, description, tags: tags.map(t => t.label) });
    }
    return {
      steps: [],
      materials: [],
      benefits: [],
      faqs: [],
      images: [],
      prerequisites: [],
      readingTime: readingTime ? `PT${Math.ceil(readingTime)}M` : 'PT5M',
      wordCount: 0,
      difficulty: 'beginner'
    };
  }, [rawContent, title, description, tags]);

  // Determine content type based on tags and content
  const getContentType = () => {
    const tagNames = tags.map(tag => tag.label.toLowerCase());
    
    if (tagNames.some(tag => tag.includes('digital') || tag.includes('technology'))) {
      return 'digital';
    }
    if (tagNames.some(tag => tag.includes('guide') || tag.includes('tutorial'))) {
      return 'guide';
    }
    if (tagNames.some(tag => tag.includes('home') || tag.includes('space') || tag.includes('design'))) {
      return 'home_design';
    }
    if (tagNames.some(tag => tag.includes('journey') || tag.includes('story') || tag.includes('experience'))) {
      return 'case_study';
    }
    return 'guide'; // Default for blog posts
  };

  // Determine difficulty level
  const getDifficulty = () => {
    const tagNames = tags.map(tag => tag.label.toLowerCase());
    if (tagNames.includes('beginner') || tagNames.includes('getting-started')) {
      return 'beginner';
    }
    if (tagNames.includes('advanced')) {
      return 'advanced';
    }
    return 'beginner'; // Default for blog posts
  };

  // Generate AI instructions based on content type
  const generateCustomInstructions = () => {
    const contentType = getContentType();
    const baseInstruction = "This blog post provides practical minimalism guidance with step-by-step instructions and real-world examples.";
    
    const typeSpecificInstructions = {
      'digital': " Focus on digital wellness strategies, screen time management, and technology boundaries.",
      'guide': " Emphasize the actionable steps, practical frameworks, and implementation methods provided.",
      'home_design': " Highlight the design principles, organization systems, and visual examples shown.",
      'case_study': " Reference the personal journey, transformation process, and lessons learned."
    };
    
    return baseInstruction + (typeSpecificInstructions[contentType] || "");
  };

  return (
    <>
      <GEOHead
        type={getContentType()}
        title={title}
        description={description || `Learn about ${title.toLowerCase()} with practical tips and real-world guidance for minimalist living.`}
        keywords={tags.map(tag => tag.label)}
        customInstructions={generateCustomInstructions()}
        estimatedReadTime={contentAnalysis.readingTime}
        difficulty={contentAnalysis.difficulty}
        relatedTopics={tags.map(tag => tag.label).filter(tag => 
          ['minimalism', 'lifestyle', 'productivity', 'home', 'digital'].some(keyword => 
            tag.toLowerCase().includes(keyword)
          )
        )}
      />
      <AdvancedSchema
        type={getContentType()}
        content={{
          title,
          description: description || `Learn about ${title.toLowerCase()} with practical tips and real-world guidance for minimalist living.`,
          keywords: tags.map(tag => tag.label),
          wordCount: contentAnalysis.wordCount
        }}
        publishDate={date}
        modifiedDate={date}
        images={contentAnalysis.images}
        readingTime={contentAnalysis.readingTime}
        difficulty={contentAnalysis.difficulty}
        prerequisites={contentAnalysis.prerequisites}
        materials={contentAnalysis.materials}
        steps={contentAnalysis.steps}
        benefits={contentAnalysis.benefits}
      />
      <BlogPostPage {...props} />
    </>
  );
}
