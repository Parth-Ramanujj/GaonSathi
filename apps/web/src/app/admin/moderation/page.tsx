'use client';

import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function AdminModerationPage() {
  const items = [
    { id: 'MOD-101', type: 'Village Notice', user: 'Sarpanch (Motipur)', content: 'Panchayat meeting tomorrow at 10 AM.', status: 'Pending' },
    { id: 'MOD-102', type: 'Equipment', user: 'Kisan Bhai', content: 'Mahindra Tractor 575 DI (₹500/hr)', status: 'Pending' },
    { id: 'MOD-103', type: 'Livestock', user: 'Ramesh Patel', content: 'Gir Cow, 10L Milk/day (₹45,000)', status: 'Reported' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <Link href="/admin" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Admin Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Platform Moderation
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Approve or reject content posted by users across the platform.
        </p>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: 'var(--color-wheat-deep)', color: 'var(--color-soil)' }}>
              <tr>
                <th style={{ padding: '1rem' }}>ID</th>
                <th style={{ padding: '1rem' }}>Type</th>
                <th style={{ padding: '1rem' }}>User</th>
                <th style={{ padding: '1rem' }}>Content Preview</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={item.id} style={{ borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--color-wheat-deep)' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--color-soil)' }}>{item.id}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-indigo)', fontWeight: 'bold' }}>{item.type}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-soil)' }}>{item.user}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-soil)' }}>{item.content}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ backgroundColor: item.status === 'Pending' ? 'var(--color-turmeric)' : 'var(--color-terracotta)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => alert(`Item ${item.id} Approved and published to live app.`)} className="btn btn-leaf" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>Approve</button>
                      <button onClick={() => {
                        const reason = window.prompt("Enter rejection reason:");
                        if(reason) alert(`Item ${item.id} Rejected. Reason sent to user.`);
                      }} className="btn btn-terracotta" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
