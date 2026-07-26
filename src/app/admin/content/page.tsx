'use client';

import React from 'react';

const LISTINGS = [
  { id: 'LST-101', type: 'Equipment', user: 'Raju Tractor', content: 'Mahindra 575 DI (₹500/hr)', status: 'Pending Review' },
  { id: 'LST-102', type: 'Notice', user: 'Sarpanch Motipur', content: 'Gram Sabha meeting at 10AM', status: 'Flagged by Users' },
];

const REVIEWS = [
  { id: 'REV-05', author: 'Sanjay Patel', target: 'Mahesh Plumber', rating: 1, comment: 'Did not show up on time.', status: 'Disputed by Provider' }
];

export default function AdminContentPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* API Health Check Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: '#111827' }}>Agmarknet Mandi API</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>Last Sync: 15 mins ago</p>
          </div>
          <div style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '4px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Healthy (200 OK)</div>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: '#111827' }}>IMD Weather API</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>Last Sync: 5 mins ago</p>
          </div>
          <div style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '4px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Healthy (200 OK)</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Left Column: Listings & Reviews Moderation */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>Listing Moderation Queue</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {LISTINGS.map((l, i) => (
                <div key={l.id} style={{ padding: '1rem 1.5rem', borderBottom: i === LISTINGS.length - 1 ? 'none' : '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-indigo)', fontWeight: 'bold', textTransform: 'uppercase' }}>{l.type}</span>
                    <h4 style={{ margin: '0.25rem 0', color: '#111827' }}>{l.content}</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B7280' }}>By {l.user} • <span style={{ color: l.status.includes('Flagged') ? 'var(--color-terracotta)' : 'var(--color-turmeric-dark)' }}>{l.status}</span></p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => alert(`Approved ${l.id}`)} style={{ backgroundColor: 'var(--color-leaf)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Approve</button>
                    <button onClick={() => alert(`Rejected ${l.id}`)} style={{ backgroundColor: '#FFF', color: 'var(--color-terracotta)', border: '1px solid var(--color-terracotta)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>Disputed Reviews</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {REVIEWS.map((r, i) => (
                <div key={r.id} style={{ padding: '1rem 1.5rem', borderBottom: i === REVIEWS.length - 1 ? 'none' : '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1rem', color: 'var(--color-turmeric-dark)' }}>⭐ {r.rating}/5</span>
                    <h4 style={{ margin: '0.25rem 0', color: '#111827' }}>"{r.comment}"</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B7280' }}>By {r.author} for {r.target} • <span style={{ color: 'var(--color-terracotta)' }}>{r.status}</span></p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => alert('Review kept. Provider notified.')} style={{ backgroundColor: '#F3F4F6', color: '#374151', border: '1px solid #D1D5DB', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Keep</button>
                    <button onClick={() => alert('Review removed for violating guidelines.')} style={{ backgroundColor: '#FFF', color: 'var(--color-terracotta)', border: '1px solid var(--color-terracotta)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: CMS (Schemes) */}
        <div style={{ width: '400px', backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>Govt Scheme CMS</h2>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#6B7280' }}>Manage the Education Hub</p>
          </div>
          
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Scheme Title</label>
              <input type="text" placeholder="e.g. PM-Kisan Samman Nidhi" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #D1D5DB' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Eligibility Details</label>
              <textarea rows={3} placeholder="Who can apply..." style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #D1D5DB', fontFamily: 'var(--font-body)' }}></textarea>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Last Verified On (Important)</label>
              <input type="date" defaultValue="2024-10-26" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #D1D5DB' }} />
            </div>
            <button onClick={() => alert('Scheme published to Education Hub.')} style={{ backgroundColor: 'var(--color-indigo)', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>Publish Scheme</button>
          </div>
        </div>
      </div>

    </div>
  );
}
