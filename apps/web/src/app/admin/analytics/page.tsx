'use client';

import React from 'react';

export default function AdminAnalyticsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Top Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>Growth Analytics</h2>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <select style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem' }}>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year to Date</option>
            <option>Custom Range...</option>
          </select>
        </div>
        <button style={{ backgroundColor: 'var(--color-indigo)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Export View Data (CSV)
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        
        {/* Retention Cohorts */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Cohort Retention (Users who booked)</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                <th style={{ paddingBottom: '0.5rem' }}>Cohort (Join Month)</th>
                <th style={{ paddingBottom: '0.5rem' }}>Size</th>
                <th style={{ paddingBottom: '0.5rem' }}>Week 1</th>
                <th style={{ paddingBottom: '0.5rem' }}>Week 4</th>
                <th style={{ paddingBottom: '0.5rem' }}>Week 12</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: 'bold', color: '#374151' }}>August 2024</td>
                <td style={{ padding: '0.75rem 0', color: '#6B7280' }}>850</td>
                <td style={{ padding: '0.75rem 0', backgroundColor: '#EFF6FF', color: 'var(--color-indigo)' }}>45%</td>
                <td style={{ padding: '0.75rem 0', backgroundColor: '#DBEAFE', color: 'var(--color-indigo)' }}>32%</td>
                <td style={{ padding: '0.75rem 0', backgroundColor: '#BFDBFE', color: 'var(--color-indigo)' }}>25%</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: 'bold', color: '#374151' }}>September 2024</td>
                <td style={{ padding: '0.75rem 0', color: '#6B7280' }}>1,200</td>
                <td style={{ padding: '0.75rem 0', backgroundColor: '#EFF6FF', color: 'var(--color-indigo)' }}>48%</td>
                <td style={{ padding: '0.75rem 0', backgroundColor: '#DBEAFE', color: 'var(--color-indigo)' }}>35%</td>
                <td style={{ padding: '0.75rem 0', color: '#9CA3AF' }}>-</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: 'bold', color: '#374151' }}>October 2024</td>
                <td style={{ padding: '0.75rem 0', color: '#6B7280' }}>2,100</td>
                <td style={{ padding: '0.75rem 0', backgroundColor: '#EFF6FF', color: 'var(--color-indigo)' }}>52%</td>
                <td style={{ padding: '0.75rem 0', color: '#9CA3AF' }}>-</td>
                <td style={{ padding: '0.75rem 0', color: '#9CA3AF' }}>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Funnel View */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Signup to Activation Funnel</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 'bold' }}>1. App Install & Signup</span>
                <span>100% (4,150)</span>
              </div>
              <div style={{ width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#D1D5DB', borderRadius: '8px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 'bold' }}>2. Role Selected & Profile Set</span>
                <span>78% (3,237)</span>
              </div>
              <div style={{ width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
                <div style={{ width: '78%', height: '100%', backgroundColor: 'var(--color-leaf)', borderRadius: '8px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 'bold' }}>3. First Booking Completed</span>
                <span>42% (1,743)</span>
              </div>
              <div style={{ width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
                <div style={{ width: '42%', height: '100%', backgroundColor: 'var(--color-indigo)', borderRadius: '8px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 'bold' }}>4. Repeat Booking (2+)</span>
                <span>28% (1,162)</span>
              </div>
              <div style={{ width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
                <div style={{ width: '28%', height: '100%', backgroundColor: 'var(--color-turmeric-dark)', borderRadius: '8px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Module Comparison */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Module Comparison</h3>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#6B7280', fontSize: '0.85rem', textTransform: 'uppercase' }}>Local Services</h4>
              <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>₹1.2M <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 'normal' }}>GMV</span></p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--color-leaf)' }}>Highest retention (32%)</p>
            </div>
            <div style={{ width: '1px', backgroundColor: '#E5E7EB' }}></div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#6B7280', fontSize: '0.85rem', textTransform: 'uppercase' }}>Agri Equipment</h4>
              <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>₹2.4M <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 'normal' }}>GMV</span></p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--color-terracotta)' }}>Highest ticket size (₹2.5k avg)</p>
            </div>
          </div>
        </div>

        {/* Geographic Expansion Scorecard */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Geographic Expansion Readiness</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                <th style={{ paddingBottom: '0.5rem' }}>Candidate Taluka</th>
                <th style={{ paddingBottom: '0.5rem' }}>Population Score</th>
                <th style={{ paddingBottom: '0.5rem' }}>Waitlist Signups</th>
                <th style={{ paddingBottom: '0.5rem' }}>Readiness</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: 'bold', color: '#374151' }}>Palanpur</td>
                <td style={{ padding: '0.75rem 0' }}>8.5/10</td>
                <td style={{ padding: '0.75rem 0' }}>420</td>
                <td style={{ padding: '0.75rem 0', color: 'var(--color-leaf)', fontWeight: 'bold' }}>Ready for Pilot</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: 'bold', color: '#374151' }}>Deesa</td>
                <td style={{ padding: '0.75rem 0' }}>7.2/10</td>
                <td style={{ padding: '0.75rem 0' }}>150</td>
                <td style={{ padding: '0.75rem 0', color: 'var(--color-turmeric-dark)', fontWeight: 'bold' }}>Monitor</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
