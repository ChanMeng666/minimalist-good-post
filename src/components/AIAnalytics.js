/**
 * AIAnalytics - Generative Engine Optimization Analytics
 * 
 * Tracks and analyzes AI-driven traffic and referrals to measure
 * the effectiveness of GEO strategies.
 */

export class AIAnalytics {
  
  static STORAGE_KEY = 'minimalist_living_ai_analytics';
  static SESSION_KEY = 'minimalist_living_session';
  
  /**
   * Initialize analytics tracking
   */
  static init() {
    if (typeof window === 'undefined') return;
    
    this.detectAISource();
    this.trackPageView();
    this.setupScrollTracking();
    this.setupEngagementTracking();
  }
  
  /**
   * Detect if user came from AI source
   */
  static detectAISource() {
    if (typeof window === 'undefined') return null;
    
    const referrer = document.referrer.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    
    let aiSource = null;
    
    // Direct AI platform detection
    if (referrer.includes('chat.openai.com') || referrer.includes('chatgpt')) {
      aiSource = 'ChatGPT';
    } else if (referrer.includes('claude.ai') || referrer.includes('anthropic')) {
      aiSource = 'Claude';
    } else if (referrer.includes('bard.google.com') || referrer.includes('gemini')) {
      aiSource = 'Gemini';
    } else if (referrer.includes('perplexity.ai')) {
      aiSource = 'Perplexity';
    } else if (referrer.includes('you.com')) {
      aiSource = 'You.com';
    } else if (referrer.includes('bing.com/chat')) {
      aiSource = 'Bing Chat';
    }
    
    // URL parameter detection (for tracked links)
    if (urlParams.has('ai_source')) {
      aiSource = urlParams.get('ai_source');
    }
    
    // User agent detection for embedded browsers
    if (!aiSource) {
      if (userAgent.includes('gptbot') || userAgent.includes('openai')) {
        aiSource = 'OpenAI Bot';
      } else if (userAgent.includes('claude') || userAgent.includes('anthropic')) {
        aiSource = 'Claude Bot';
      } else if (userAgent.includes('googlebot-ai')) {
        aiSource = 'Google AI';
      }
    }
    
    if (aiSource) {
      this.trackAIReferral(aiSource);
    }
    
    return aiSource;
  }
  
  /**
   * Track AI referral event
   */
  static trackAIReferral(source) {
    const event = {
      type: 'ai_referral',
      source,
      timestamp: Date.now(),
      url: window.location.href,
      pathname: window.location.pathname,
      sessionId: this.getSessionId()
    };
    
    this.recordEvent(event);
    
    // Google Analytics 4 integration
    if (typeof gtag !== 'undefined') {
      gtag('event', 'ai_referral', {
        ai_source: source,
        page_title: document.title,
        page_location: window.location.href
      });
    }
    
    // Custom analytics endpoint (if available)
    this.sendToAnalytics(event);
  }
  
  /**
   * Track page view with AI context
   */
  static trackPageView() {
    const aiSource = this.detectAISource();
    const event = {
      type: 'page_view',
      timestamp: Date.now(),
      url: window.location.href,
      pathname: window.location.pathname,
      title: document.title,
      referrer: document.referrer,
      aiSource,
      sessionId: this.getSessionId(),
      userAgent: navigator.userAgent
    };
    
    this.recordEvent(event);
  }
  
  /**
   * Track user engagement metrics
   */
  static setupEngagementTracking() {
    if (typeof window === 'undefined') return;
    
    const startTime = Date.now();
    let maxScrollDepth = 0;
    let hasScrolled = false;
    
    // Time on page tracking
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      this.recordEvent({
        type: 'engagement',
        metric: 'time_on_page',
        value: timeSpent,
        scrollDepth: maxScrollDepth,
        hasScrolled,
        timestamp: Date.now(),
        url: window.location.href,
        sessionId: this.getSessionId()
      });
    };
    
    // Track before page unload
    window.addEventListener('beforeunload', trackTimeOnPage);
    
    // Track after 30 seconds
    setTimeout(trackTimeOnPage, 30000);
  }
  
  /**
   * Setup scroll depth tracking
   */
  static setupScrollTracking() {
    if (typeof window === 'undefined') return;
    
    let maxScrollDepth = 0;
    let ticking = false;
    
    const trackScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      const scrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if ([25, 50, 75, 90, 100].includes(scrollDepth)) {
          this.recordEvent({
            type: 'scroll_depth',
            depth: scrollDepth,
            timestamp: Date.now(),
            url: window.location.href,
            sessionId: this.getSessionId()
          });
        }
      }
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(trackScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick);
  }
  
  /**
   * Track specific AI-related interactions
   */
  static trackAIInteraction(action, context = {}) {
    const event = {
      type: 'ai_interaction',
      action,
      context,
      timestamp: Date.now(),
      url: window.location.href,
      sessionId: this.getSessionId()
    };
    
    this.recordEvent(event);
  }
  
  /**
   * Get or create session ID
   */
  static getSessionId() {
    if (typeof window === 'undefined') return 'server';
    
    let sessionId = sessionStorage.getItem(this.SESSION_KEY);
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem(this.SESSION_KEY, sessionId);
    }
    return sessionId;
  }
  
  /**
   * Record event to local storage
   */
  static recordEvent(event) {
    if (typeof window === 'undefined') return;
    
    try {
      const existingData = localStorage.getItem(this.STORAGE_KEY);
      const events = existingData ? JSON.parse(existingData) : [];
      
      events.push(event);
      
      // Keep only last 1000 events to prevent storage bloat
      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to record analytics event:', error);
    }
  }
  
  /**
   * Get analytics data
   */
  static getAnalyticsData() {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.warn('Failed to retrieve analytics data:', error);
      return [];
    }
  }
  
  /**
   * Generate analytics report
   */
  static generateReport(days = 30) {
    const events = this.getAnalyticsData();
    const cutoffDate = Date.now() - (days * 24 * 60 * 60 * 1000);
    const recentEvents = events.filter(event => event.timestamp > cutoffDate);
    
    const report = {
      period: `Last ${days} days`,
      totalEvents: recentEvents.length,
      aiReferrals: this.analyzeAIReferrals(recentEvents),
      engagement: this.analyzeEngagement(recentEvents),
      pageViews: this.analyzePageViews(recentEvents),
      topPages: this.getTopPages(recentEvents)
    };
    
    return report;
  }
  
  /**
   * Analyze AI referrals
   */
  static analyzeAIReferrals(events) {
    const aiEvents = events.filter(e => e.type === 'ai_referral');
    const sources = {};
    
    aiEvents.forEach(event => {
      sources[event.source] = (sources[event.source] || 0) + 1;
    });
    
    return {
      total: aiEvents.length,
      sources,
      conversionRate: aiEvents.length / events.filter(e => e.type === 'page_view').length
    };
  }
  
  /**
   * Analyze engagement metrics
   */
  static analyzeEngagement(events) {
    const engagementEvents = events.filter(e => e.type === 'engagement');
    const timeSpent = engagementEvents.map(e => e.value).filter(v => v > 0);
    
    return {
      averageTimeOnPage: timeSpent.length > 0 ? Math.round(timeSpent.reduce((a, b) => a + b, 0) / timeSpent.length) : 0,
      bounceRate: this.calculateBounceRate(events),
      scrollDepth: this.calculateAverageScrollDepth(events)
    };
  }
  
  /**
   * Analyze page views
   */
  static analyzePageViews(events) {
    const pageViews = events.filter(e => e.type === 'page_view');
    const withAI = pageViews.filter(e => e.aiSource);
    
    return {
      total: pageViews.length,
      withAISource: withAI.length,
      aiSourceRate: pageViews.length > 0 ? withAI.length / pageViews.length : 0
    };
  }
  
  /**
   * Get top pages by views
   */
  static getTopPages(events) {
    const pageViews = events.filter(e => e.type === 'page_view');
    const pages = {};
    
    pageViews.forEach(event => {
      pages[event.pathname] = (pages[event.pathname] || 0) + 1;
    });
    
    return Object.entries(pages)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([path, views]) => ({ path, views }));
  }
  
  /**
   * Send analytics to external service
   */
  static sendToAnalytics(event) {
    // Placeholder for external analytics service
    // This could be sent to your analytics API, Google Analytics, etc.
    if (process.env.NODE_ENV === 'development') {
      console.log('AI Analytics Event:', event);
    }
  }
  
  /**
   * Calculate bounce rate
   */
  static calculateBounceRate(events) {
    const sessions = {};
    
    events.forEach(event => {
      if (!sessions[event.sessionId]) {
        sessions[event.sessionId] = [];
      }
      sessions[event.sessionId].push(event);
    });
    
    const totalSessions = Object.keys(sessions).length;
    const bouncedSessions = Object.values(sessions).filter(session => 
      session.filter(e => e.type === 'page_view').length === 1
    ).length;
    
    return totalSessions > 0 ? bouncedSessions / totalSessions : 0;
  }
  
  /**
   * Calculate average scroll depth
   */
  static calculateAverageScrollDepth(events) {
    const scrollEvents = events.filter(e => e.type === 'scroll_depth');
    const maxDepths = {};
    
    scrollEvents.forEach(event => {
      const key = `${event.sessionId}_${event.url}`;
      maxDepths[key] = Math.max(maxDepths[key] || 0, event.depth);
    });
    
    const depths = Object.values(maxDepths);
    return depths.length > 0 ? Math.round(depths.reduce((a, b) => a + b, 0) / depths.length) : 0;
  }
}

export default AIAnalytics;
