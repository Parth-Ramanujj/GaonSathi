'use client';

import React from 'react';

const QUEUE = [
  { id: 'KYC-882', user: 'Mahesh Plumber', type: 'Service Provider', submitted: '2 hrs ago', docType: 'Aadhar + Photo', status: 'Pending' },
  { id: 'KYC-881', user: 'Shreeji Seeds', type: 'Shop Owner', submitted: '49 hrs ago', docType: 'Fertilizer License', status: 'Urgent' },
  { id: 'KYC-879', user: 'Raju Tractor', type: 'Equipment', submitted: '3 days ago', docType: 'RC Book', status: 'Rejected' },
];

export default function AdminKYCPage() {
  return (
    <div style={{ display: 'flex', gap: '2rem', height: '100%' }}>
      
      {/* Left List: The Queue */}
      <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', margin: 0, color: '#111827' }}>Pending Queue (2)</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto' }}>
          {QUEUE.map(item => (
            <div key={item.id} style={{ 
              backgroundColor: '#FFF', 
              border: item.status === 'Urgent' ? '2px solid var(--color-terracotta)' : '1px solid #E5E7EB', 
              borderRadius: '8px', 
              padding: '1rem',
              cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold', color: '#111827' }}>{item.id}</span>
                {item.status === 'Urgent' && <span style={{ color: 'var(--color-terracotta)', fontSize: '0.8rem', fontWeight: 'bold' }}>⚠️ &gt;48h</span>}
              </div>
              <div style={{ fontSize: '1.1rem', color: 'var(--color-indigo)', fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.user}</div>
              <div style={{ fontSize: '0.85rem', color: '#6B7280', display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.type}</span>
                <span>{item.submitted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Area: Document Review Split Pane */}
      <div style={{ flex: 1, backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>Review: Shreeji Seeds</h2>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#6B7280' }}>Shop Owner • Submitted 49 hrs ago</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             <button onClick={() => alert('Document Approved. Shop is now live.')} style={{ backgroundColor: 'var(--color-leaf)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Approve</button>
             <button onClick={() => {
               const reason = window.prompt('Enter rejection reason (sent to user via SMS):');
               if (reason) alert(`Rejected with reason: ${reason}. Logged in audit trail.`);
             }} style={{ backgroundColor: '#FFF', color: 'var(--color-terracotta)', border: '1px solid var(--color-terracotta)', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Reject</button>
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1 }}>
          {/* Document Viewer Simulation */}
          <div style={{ flex: 2, padding: '1.5rem', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F3F4F6' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#374151', alignSelf: 'flex-start' }}>Fertilizer Control Order License</h3>
            <div style={{ flex: 1, width: '100%', backgroundColor: '#FFF', border: '1px dashed #9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>
               [PDF/Image Viewer Placeholder]
            </div>
          </div>

          {/* Extracted Data / Verification Checklist */}
          <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#6B7280', textTransform: 'uppercase' }}>Extracted Name</h4>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Shreeji Seeds & Fertilizers</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#6B7280', textTransform: 'uppercase' }}>License Number</h4>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>GJ-FERT-2023-8891</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#6B7280', textTransform: 'uppercase' }}>Expiry Date</h4>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--color-leaf)' }}>12-Dec-2026 (Valid)</p>
            </div>
            
            <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', width: '100%', margin: '0' }} />
            
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#6B7280', textTransform: 'uppercase' }}>Checklist</h4>
              <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <input type="checkbox" /> Name matches shop profile
              </label>
              <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <input type="checkbox" /> Seal & Signature clearly visible
              </label>
              <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <input type="checkbox" /> Not expired
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
