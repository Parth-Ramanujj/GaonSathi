'use client';

import React, { useState } from 'react';
import ComplianceHubPage from '../compliance/page';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #E5E7EB', marginBottom: '2rem' }}>
        <button 
          onClick={() => setActiveTab('general')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 1rem 0', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
            color: activeTab === 'general' ? 'var(--color-indigo)' : '#6B7280',
            borderBottom: activeTab === 'general' ? '3px solid var(--color-indigo)' : '3px solid transparent'
          }}
        >
          General Ops
        </button>
        <button 
          onClick={() => setActiveTab('notifications')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 1rem 0', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
            color: activeTab === 'notifications' ? 'var(--color-indigo)' : '#6B7280',
            borderBottom: activeTab === 'notifications' ? '3px solid var(--color-indigo)' : '3px solid transparent'
          }}
        >
          Notification Templates
        </button>
        <button 
          onClick={() => setActiveTab('compliance')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 1rem 0', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
            color: activeTab === 'compliance' ? 'var(--color-indigo)' : '#6B7280',
            borderBottom: activeTab === 'compliance' ? '3px solid var(--color-indigo)' : '3px solid transparent'
          }}
        >
          Compliance Hub
        </button>
        <button 
          onClick={() => setActiveTab('audit')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 1rem 0', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
            color: activeTab === 'audit' ? 'var(--color-indigo)' : '#6B7280',
            borderBottom: activeTab === 'audit' ? '3px solid var(--color-indigo)' : '3px solid transparent'
          }}
        >
          Audit Log
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        
        {activeTab === 'general' && (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1, backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Commission Rates</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Local Services Base Rate (%)</label>
                  <input type="number" defaultValue="10" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #D1D5DB' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Equipment Base Rate (%)</label>
                  <input type="number" defaultValue="8" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #D1D5DB' }} />
                </div>
                <button onClick={() => alert('Commission rates updated.')} style={{ backgroundColor: 'var(--color-indigo)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>Save Changes</button>
              </div>
            </div>

            <div style={{ flex: 1, backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Admin Accounts</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                    <th style={{ paddingBottom: '0.5rem' }}>Name</th>
                    <th style={{ paddingBottom: '0.5rem' }}>Role Level</th>
                    <th style={{ paddingBottom: '0.5rem' }}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.75rem 0', color: '#111827', fontWeight: 'bold' }}>ops@gaonsathi.com</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--color-leaf)', fontWeight: 'bold' }}>Super Admin</td>
                    <td style={{ padding: '0.75rem 0', textAlign: 'right' }}><button style={{ background: 'none', border: 'none', color: 'var(--color-indigo)', cursor: 'pointer' }}>Edit</button></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 0', color: '#111827', fontWeight: 'bold' }}>finance@gaonsathi.com</td>
                    <td style={{ padding: '0.75rem 0', color: '#374151' }}>Finance Admin</td>
                    <td style={{ padding: '0.75rem 0', textAlign: 'right' }}><button style={{ background: 'none', border: 'none', color: 'var(--color-indigo)', cursor: 'pointer' }}>Edit</button></td>
                  </tr>
                </tbody>
              </table>
              <button style={{ width: '100%', backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>+ Invite Admin</button>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>SMS & WhatsApp Templates</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Booking Confirmed (Gujarati)</label>
                <textarea rows={4} defaultValue="તમારું બુકિંગ કન્ફર્મ થઈ ગયું છે. {provider_name} {date} ના રોજ આવશે." style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #D1D5DB', fontFamily: 'var(--font-body)' }}></textarea>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Preview</label>
                <div style={{ padding: '1rem', backgroundColor: '#F0FDF4', borderRadius: '8px', border: '1px solid #86EFAC', color: '#166534' }}>
                  તમારું બુકિંગ કન્ફર્મ થઈ ગયું છે. <strong>Mahesh Plumber</strong> <strong>26-Oct</strong> ના રોજ આવશે.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div style={{ height: '100%', backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
            <ComplianceHubPage />
          </div>
        )}

        {activeTab === 'audit' && (
          <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>System Audit Log</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                  <th style={{ paddingBottom: '0.5rem' }}>Timestamp</th>
                  <th style={{ paddingBottom: '0.5rem' }}>Admin User</th>
                  <th style={{ paddingBottom: '0.5rem' }}>Action</th>
                  <th style={{ paddingBottom: '0.5rem' }}>Target ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.75rem 0', color: '#6B7280' }}>2024-10-26 14:32:10</td>
                  <td style={{ padding: '0.75rem 0', color: '#111827', fontWeight: 'bold' }}>ops@gaonsathi.com</td>
                  <td style={{ padding: '0.75rem 0', color: 'var(--color-indigo)' }}>Approved KYC Document</td>
                  <td style={{ padding: '0.75rem 0', color: '#374151', fontFamily: 'monospace' }}>USR-001</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0', color: '#6B7280' }}>2024-10-26 13:15:05</td>
                  <td style={{ padding: '0.75rem 0', color: '#111827', fontWeight: 'bold' }}>ops@gaonsathi.com</td>
                  <td style={{ padding: '0.75rem 0', color: 'var(--color-terracotta)' }}>Rejected Listing</td>
                  <td style={{ padding: '0.75rem 0', color: '#374151', fontFamily: 'monospace' }}>LST-102</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0', color: '#6B7280' }}>2024-10-26 09:00:00</td>
                  <td style={{ padding: '0.75rem 0', color: '#111827', fontWeight: 'bold' }}>finance@gaonsathi.com</td>
                  <td style={{ padding: '0.75rem 0', color: 'var(--color-leaf)' }}>Approved Payout Batch (12)</td>
                  <td style={{ padding: '0.75rem 0', color: '#374151', fontFamily: 'monospace' }}>MULTIPLE</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
