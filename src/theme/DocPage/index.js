import React from 'react';
import DocPage from '@theme-original/DocPage';
import GEOHead from '../../components/GEOHead';
import AdvancedSchema from '../../components/AdvancedSchema';
import { ContentAnalyzer } from '../../components/ContentAnalyzer';

export default function DocPageWrapper(props) {
  // Extract metadata from doc page
  const { location, content } = props;
  const pathname = location?.pathname || '';
  
  // Attempt to get content for analysis
  const rawContent = content?.content || content?.contentTitle || '';
  
  // Analyze content structure if available
  const contentAnalysis = React.useMemo(() => {
    if (rawContent) {
      return ContentAnalyzer.analyze(rawContent);
    }
    return {
      steps: [],
      materials: [],
      benefits: [],
      faqs: [],
      images: [],
      prerequisites: [],
      readingTime: 'PT10M',
      wordCount: 0,
      difficulty: 'intermediate'
    };
  }, [rawContent]);
  
  // Determine content type based on URL path and content
  const getContentType = () => {
    if (pathname.includes('digital-minimalism') || pathname.includes('phone-') || pathname.includes('technology')) {
      return 'digital';
    }
    if (pathname.includes('home') || pathname.includes('space') || pathname.includes('design')) {
      return 'home_design';
    }
    if (pathname.includes('journey') || pathname.includes('years') || pathname.includes('story') || pathname.includes('evolution')) {
      return 'case_study';
    }
    if (pathname.includes('guide') || pathname.includes('framework') || pathname.includes('tips')) {
      return 'guide';
    }
    return 'case_study'; // Default for docs (many are case studies)
  };

  // Generate title from pathname if not available
  const generateTitle = () => {
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || 'minimalist-living';
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') + ' - Minimalist Living';
  };

  // Generate description based on content type
  const generateDescription = () => {
    const contentType = getContentType();
    const descriptions = {
      'digital': 'Practical strategies for digital minimalism, managing technology relationships, and maintaining focus in the digital age.',
      'home_design': 'Minimalist home design principles, organization systems, and space optimization techniques with real examples.',
      'case_study': 'Real-life minimalist transformation journey with documented experiences, challenges, and practical insights.',
      'guide': 'Step-by-step minimalist living guide with practical frameworks and actionable strategies.'
    };
    
    return descriptions[contentType] || 'Comprehensive minimalist living guidance with real-world examples and practical advice.';
  };

  // Generate keywords based on URL
  const generateKeywords = () => {
    const keywords = ['minimalism', 'minimalist living'];
    
    if (pathname.includes('digital')) keywords.push('digital minimalism', 'technology boundaries', 'screen time');
    if (pathname.includes('home')) keywords.push('minimalist home', 'home organization', 'interior design');
    if (pathname.includes('phone')) keywords.push('phone addiction', 'digital detox', 'mindful technology');
    if (pathname.includes('family')) keywords.push('family minimalism', 'minimalism with kids');
    if (pathname.includes('student')) keywords.push('minimalist student', 'study organization');
    if (pathname.includes('possessions')) keywords.push('decluttering', 'possession management');
    
    return keywords;
  };

  // Generate custom instructions
  const generateCustomInstructions = () => {
    const contentType = getContentType();
    const baseInstruction = "This documentation article provides comprehensive minimalist living guidance with detailed real-world examples and visual documentation.";
    
    const typeSpecificInstructions = {
      'digital': " Focus on the specific digital wellness strategies, tools, and boundary-setting techniques described.",
      'home_design': " Emphasize the design principles, organization methods, and visual examples provided in the photo galleries.",
      'case_study': " Highlight the transformation timeline, specific challenges overcome, and practical lessons that readers can apply.",
      'guide': " Reference the step-by-step frameworks, checklists, and implementation strategies provided."
    };
    
    return baseInstruction + (typeSpecificInstructions[contentType] || "");
  };

  return (
    <>
      <GEOHead
        type={getContentType()}
        title={generateTitle()}
        description={generateDescription()}
        keywords={generateKeywords()}
        customInstructions={generateCustomInstructions()}
        estimatedReadTime={contentAnalysis.readingTime}
        difficulty={contentAnalysis.difficulty}
        relatedTopics={generateKeywords().filter(keyword => 
          !['minimalism', 'minimalist living'].includes(keyword)
        )}
      />
      <AdvancedSchema
        type={getContentType()}
        content={{
          title: generateTitle(),
          description: generateDescription(),
          keywords: generateKeywords(),
          wordCount: contentAnalysis.wordCount
        }}
        publishDate={new Date().toISOString()}
        images={contentAnalysis.images}
        readingTime={contentAnalysis.readingTime}
        difficulty={contentAnalysis.difficulty}
        prerequisites={contentAnalysis.prerequisites}
        materials={contentAnalysis.materials}
        steps={contentAnalysis.steps}
        benefits={contentAnalysis.benefits}
      />
      <DocPage {...props} />
    </>
  );
}
