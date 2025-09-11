/**
 * ContentAnalyzer - Automated Content Structure Extraction
 * 
 * Analyzes markdown content to extract structured information
 * for enhanced schema generation and AI understanding.
 */

export class ContentAnalyzer {
  
  /**
   * Extract steps from content for HowTo schema
   */
  static extractSteps(content) {
    const steps = [];
    const stepRegex = /^#{2,4}\s*(?:Step\s*\d+[:.]?\s*)?(.+)$/gim;
    const matches = content.match(stepRegex);
    
    if (matches) {
      matches.forEach((match, index) => {
        const stepTitle = match.replace(/^#{2,4}\s*(?:Step\s*\d+[:.]?\s*)?/, '').trim();
        steps.push({
          name: stepTitle,
          description: this.extractStepDescription(content, match),
          position: index + 1
        });
      });
    }
    
    // Also look for numbered lists
    const numberedListRegex = /^\d+\.\s+(.+)$/gim;
    const numberedMatches = content.match(numberedListRegex);
    
    if (numberedMatches && steps.length === 0) {
      numberedMatches.forEach((match, index) => {
        const stepText = match.replace(/^\d+\.\s+/, '').trim();
        steps.push({
          name: stepText.length > 50 ? stepText.substring(0, 50) + '...' : stepText,
          description: stepText,
          position: index + 1
        });
      });
    }
    
    return steps;
  }
  
  /**
   * Extract description for a specific step
   */
  static extractStepDescription(content, stepHeading) {
    const stepIndex = content.indexOf(stepHeading);
    if (stepIndex === -1) return '';
    
    const remainingContent = content.substring(stepIndex + stepHeading.length);
    const nextHeadingMatch = remainingContent.match(/^#{2,4}\s/m);
    
    const description = nextHeadingMatch 
      ? remainingContent.substring(0, nextHeadingMatch.index)
      : remainingContent.substring(0, 200);
    
    return description.trim().replace(/\n+/g, ' ').substring(0, 150);
  }
  
  /**
   * Extract materials/tools mentioned in content
   */
  static extractMaterials(content) {
    const materials = new Set();
    
    // Look for specific patterns
    const patterns = [
      /(?:you(?:'ll)?\s+need|materials?|supplies?|tools?)[:.]?\s*([^.!?]*)/gi,
      /(?:using|with|include|such as)[:.]?\s*([^.!?]*)/gi
    ];
    
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          const items = match
            .replace(/(?:you(?:'ll)?\s+need|materials?|supplies?|tools?|using|with|include|such as)[:.]?\s*/gi, '')
            .split(/[,;&]/)
            .map(item => item.trim())
            .filter(item => item.length > 2 && item.length < 50);
          
          items.forEach(item => materials.add(item));
        });
      }
    });
    
    return Array.from(materials);
  }
  
  /**
   * Extract benefits mentioned in content
   */
  static extractBenefits(content) {
    const benefits = new Set();
    
    const benefitPatterns = [
      /(?:benefits?|advantages?|helps?|improves?|reduces?)[:.]?\s*([^.!?]*)/gi,
      /(?:you(?:'ll)?|will|can)(?:\s+be\s+able\s+to|\s+)(?:achieve|get|have|experience|enjoy)[:.]?\s*([^.!?]*)/gi
    ];
    
    benefitPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          const benefit = match
            .replace(/(?:benefits?|advantages?|helps?|improves?|reduces?|you(?:'ll)?|will|can|achieve|get|have|experience|enjoy)[:.]?\s*/gi, '')
            .trim();
          
          if (benefit.length > 10 && benefit.length < 100) {
            benefits.add(benefit);
          }
        });
      }
    });
    
    return Array.from(benefits);
  }
  
  /**
   * Extract FAQ items from content
   */
  static extractFAQs(content) {
    const faqs = [];
    
    // Look for Q&A patterns
    const qaPairs = content.match(/(?:Q:|Question:|### Q:)(.*?)(?:A:|Answer:|### A:)(.*?)(?=(?:Q:|Question:|### Q:)|$)/gis);
    
    if (qaPairs) {
      qaPairs.forEach(pair => {
        const questionMatch = pair.match(/(?:Q:|Question:|### Q:)(.*?)(?:A:|Answer:|### A:)/is);
        const answerMatch = pair.match(/(?:A:|Answer:|### A:)(.*?)$/is);
        
        if (questionMatch && answerMatch) {
          faqs.push({
            question: questionMatch[1].trim(),
            answer: answerMatch[1].trim()
          });
        }
      });
    }
    
    // Also look for headers that end with question marks
    const questionHeaders = content.match(/^#{2,4}\s+([^#\n]*\?)\s*$/gim);
    if (questionHeaders) {
      questionHeaders.forEach(header => {
        const question = header.replace(/^#{2,4}\s+/, '').trim();
        const answer = this.extractStepDescription(content, header);
        
        if (answer) {
          faqs.push({ question, answer });
        }
      });
    }
    
    return faqs;
  }
  
  /**
   * Extract reading time from content
   */
  static estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `PT${minutes}M`;
  }
  
  /**
   * Extract word count
   */
  static getWordCount(content) {
    return content.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  /**
   * Determine content difficulty based on vocabulary and structure
   */
  static analyzeDifficulty(content) {
    const complexWords = content.match(/\b\w{8,}\b/g) || [];
    const complexWordsRatio = complexWords.length / content.split(/\s+/).length;
    
    const hasSteps = this.extractSteps(content).length > 0;
    const hasList = content.includes('- ') || content.includes('* ');
    
    if (complexWordsRatio > 0.15 || (!hasSteps && !hasList)) {
      return 'advanced';
    } else if (complexWordsRatio > 0.08 || hasSteps) {
      return 'intermediate';
    }
    
    return 'beginner';
  }
  
  /**
   * Extract all images from markdown content
   */
  static extractImages(content) {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const images = [];
    let match;
    
    while ((match = imageRegex.exec(content)) !== null) {
      images.push({
        alt: match[1],
        src: match[2]
      });
    }
    
    return images.map(img => img.src);
  }
  
  /**
   * Extract prerequisites from content
   */
  static extractPrerequisites(content) {
    const prerequisites = [];
    
    const prereqPatterns = [
      /(?:before\s+you\s+start|prerequisites?|requirements?|you(?:'ll)?\s+need\s+to\s+(?:have|know|understand))[:.]?\s*([^.!?]*)/gi,
      /(?:first|initially|to\s+begin)[:.]?\s*([^.!?]*)/gi
    ];
    
    prereqPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          const prereq = match
            .replace(/(?:before\s+you\s+start|prerequisites?|requirements?|you(?:'ll)?\s+need\s+to\s+(?:have|know|understand)|first|initially|to\s+begin)[:.]?\s*/gi, '')
            .trim();
          
          if (prereq.length > 5 && prereq.length < 100) {
            prerequisites.push(prereq);
          }
        });
      }
    });
    
    return prerequisites;
  }
  
  /**
   * Comprehensive content analysis
   */
  static analyze(content, metadata = {}) {
    return {
      steps: this.extractSteps(content),
      materials: this.extractMaterials(content),
      benefits: this.extractBenefits(content),
      faqs: this.extractFAQs(content),
      images: this.extractImages(content),
      prerequisites: this.extractPrerequisites(content),
      readingTime: this.estimateReadingTime(content),
      wordCount: this.getWordCount(content),
      difficulty: this.analyzeDifficulty(content),
      title: metadata.title || 'Minimalist Living Guide',
      description: metadata.description || this.generateDescription(content),
      keywords: metadata.tags || this.extractKeywords(content)
    };
  }
  
  /**
   * Generate description from content if not provided
   */
  static generateDescription(content) {
    const firstParagraph = content
      .replace(/^#{1,6}\s+.*$/gm, '') // Remove headers
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .trim()
      .split('\n\n')[0];
    
    return firstParagraph.length > 160 
      ? firstParagraph.substring(0, 157) + '...'
      : firstParagraph;
  }
  
  /**
   * Extract keywords from content
   */
  static extractKeywords(content) {
    const commonMinimalismWords = [
      'minimalism', 'minimalist', 'simple', 'simplicity', 'declutter', 
      'organize', 'intentional', 'mindful', 'sustainable', 'digital',
      'home', 'lifestyle', 'productivity'
    ];
    
    const words = content.toLowerCase().split(/\s+/);
    const keywords = commonMinimalismWords.filter(keyword => 
      words.some(word => word.includes(keyword))
    );
    
    return keywords.length > 0 ? keywords : ['minimalism', 'lifestyle'];
  }
}

export default ContentAnalyzer;
