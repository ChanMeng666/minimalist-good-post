import React, { useState, useEffect } from 'react';
import { AIAnalytics } from './AIAnalytics';

/**
 * AnalyticsDashboard - AI Analytics Visualization Component
 * 
 * Displays GEO performance metrics and AI referral analytics
 * for content creators and site administrators.
 */
const AnalyticsDashboard = ({ isVisible = false }) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState(30);

  useEffect(() => {
    if (isVisible) {
      generateReport();
    }
  }, [isVisible, period]);

  const generateReport = () => {
    setLoading(true);
    try {
      const newReport = AIAnalytics.generateReport(period);
      setReport(newReport);
    } catch (error) {
      console.error('Error generating analytics report:', error);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    dashboard: {
      position: 'fixed',
      top: '50px',
      right: '20px',
      width: '400px',
      maxHeight: '80vh',
      overflow: 'auto',
      backgroundColor: 'white',
      border: '1px solid #e1e4e8',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      zIndex: 1000,
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '14px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '1px solid #e1e4e8'
    },
    title: {
      margin: 0,
      fontSize: '18px',
      fontWeight: '600',
      color: '#24292e'
    },
    select: {
      padding: '4px 8px',
      border: '1px solid #d1d5da',
      borderRadius: '4px',
      fontSize: '12px'
    },
    metric: {
      backgroundColor: '#f6f8fa',
      padding: '12px',
      borderRadius: '6px',
      marginBottom: '12px'
    },
    metricTitle: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#586069',
      marginBottom: '4px',
      textTransform: 'uppercase'
    },
    metricValue: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#24292e'
    },
    metricSubtext: {
      fontSize: '12px',
      color: '#586069',
      marginTop: '2px'
    },
    sourceList: {
      listStyle: 'none',
      padding: 0,
      margin: '8px 0 0 0'
    },
    sourceItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4px 0',
      borderBottom: '1px solid #e1e4e8'
    },
    pageList: {
      listStyle: 'none',
      padding: 0,
      margin: '8px 0 0 0'
    },
    pageItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4px 0',
      fontSize: '12px'
    },
    loading: {
      textAlign: 'center',
      padding: '40px',
      color: '#586069'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      color: '#586069'
    }
  };

  if (!isVisible) return null;

  if (loading) {
    return (
      <div style={styles.dashboard}>
        <div style={styles.loading}>Loading analytics...</div>
      </div>
    );
  }

  if (!report) {
    return (
      <div style={styles.dashboard}>
        <div style={styles.loading}>No analytics data available</div>
      </div>
    );
  }

  return (
    <div style={styles.dashboard}>
      <div style={styles.header}>
        <h3 style={styles.title}>GEO Analytics</h3>
        <div>
          <select 
            style={styles.select} 
            value={period} 
            onChange={(e) => setPeriod(Number(e.target.value))}
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
            <option value={90}>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* AI Referrals Section */}
      <div style={styles.metric}>
        <div style={styles.metricTitle}>AI Referrals</div>
        <div style={styles.metricValue}>{report.aiReferrals.total}</div>
        <div style={styles.metricSubtext}>
          {(report.aiReferrals.conversionRate * 100).toFixed(1)}% of total traffic
        </div>
        {Object.keys(report.aiReferrals.sources).length > 0 && (
          <ul style={styles.sourceList}>
            {Object.entries(report.aiReferrals.sources)
              .sort(([,a], [,b]) => b - a)
              .map(([source, count]) => (
                <li key={source} style={styles.sourceItem}>
                  <span>{source}</span>
                  <span>{count}</span>
                </li>
              ))
            }
          </ul>
        )}
      </div>

      {/* Page Views Section */}
      <div style={styles.metric}>
        <div style={styles.metricTitle}>Page Views</div>
        <div style={styles.metricValue}>{report.pageViews.total}</div>
        <div style={styles.metricSubtext}>
          {(report.pageViews.aiSourceRate * 100).toFixed(1)}% from AI sources
        </div>
      </div>

      {/* Engagement Section */}
      <div style={styles.metric}>
        <div style={styles.metricTitle}>Engagement</div>
        <div style={styles.metricValue}>{report.engagement.averageTimeOnPage}s</div>
        <div style={styles.metricSubtext}>
          Average time on page • {report.engagement.scrollDepth}% avg scroll depth
        </div>
      </div>

      {/* Top Pages Section */}
      {report.topPages.length > 0 && (
        <div style={styles.metric}>
          <div style={styles.metricTitle}>Top Pages</div>
          <ul style={styles.pageList}>
            {report.topPages.slice(0, 5).map((page) => (
              <li key={page.path} style={styles.pageItem}>
                <span>{page.path}</span>
                <span>{page.views} views</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Export Options */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={() => {
            const dataStr = JSON.stringify(report, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `geo-analytics-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
          }}
          style={{
            padding: '6px 12px',
            backgroundColor: '#0366d6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Export Data
        </button>
      </div>
    </div>
  );
};

/**
 * AnalyticsToggle - Simple toggle button to show/hide analytics
 */
export const AnalyticsToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development or for admin users
  const shouldShow = process.env.NODE_ENV === 'development' || 
                     (typeof window !== 'undefined' && window.location.search.includes('analytics=true'));

  if (!shouldShow) return null;

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 999,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
      >
        📊 GEO Analytics
      </button>
      <AnalyticsDashboard isVisible={isVisible} />
    </>
  );
};

export default AnalyticsDashboard;
