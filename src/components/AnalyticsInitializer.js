import { useEffect } from 'react';
import { AIAnalytics } from './AIAnalytics';

/**
 * AnalyticsInitializer - Global Analytics Setup
 * 
 * Initializes AI analytics tracking when the component mounts.
 * Should be included in the root layout or main app component.
 */
const AnalyticsInitializer = () => {
  useEffect(() => {
    // Initialize analytics only in browser environment
    if (typeof window !== 'undefined') {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        AIAnalytics.init();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // This component doesn't render anything
  return null;
};

export default AnalyticsInitializer;
