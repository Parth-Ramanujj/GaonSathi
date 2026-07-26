'use client';

import React, { useState } from 'react';

const DISPUTES = [
  { id: 'DSP-889', bookingId: 'BK-10027', parties: 'Sanjay Patel vs Raju Bhai', amount: '₹800', age: '26h', status: 'Requires Action', repeatOffender: false },
  { id: 'DSP-890', bookingId: 'BK-10045', parties: 'Mahesh (Farmer) vs Kisan Center', amount: '₹1,200', age: '4h', status: 'In Review', repeatOffender: true },
];

export default function AdminDisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState<string | null>('DSP-889');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* SLA & Metrics Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Avg Resolution Time</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#111827' }}>18h</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-leaf)', fontWeight: 'bold' }}>Target: 48h</span>
          </div>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Open Cases</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-terracotta)' }}>12</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Escrow Locked</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#111827' }}>₹8,450</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Repeat Offenders</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-terracotta)' }}>2 Flagged</h2>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        
        {/* Left: Dispute Queue */}
        <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.1rem', margin: 0, color: '#111827' }}>Active Queue</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {DISPUTES.map(d => (
              <div 
                key={d.id} 
                onClick={() => setSelectedDispute(d.id)}
                style={{ 
                  backgroundColor: selectedDispute === d.id ? '#EFF6FF' : '#FFF', 
                  border: selectedDispute === d.id ? '2px solid var(--color-indigo)' : '1px solid #E5E7EB', 
                  borderRadius: '8px', 
                  padding: '1rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#111827' }}>{d.id}</span>
                  <span style={{ color: d.age === '26h' ? 'var(--color-terracotta)' : '#6B7280', fontSize: '0.8rem', fontWeight: 'bold' }}>Age: {d.age}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#374151', marginBottom: '0.25rem' }}>{d.parties}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-leaf)' }}>{d.amount} at stake</span>
                  {d.repeatOffender && <span style={{ backgroundColor: '#FDE8E8', color: '#9B1C1C', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>Repeat Offender</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Resolution Screen */}
        <div style={{ flex: 1, backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>Dispute Resolution: DSP-889</h2>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#6B7280' }}>Linked Booking: BK-10027 • Amount: ₹800</p>
          </div>

          <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FEF2F2', padding: '1rem', borderRadius: '8px', border: '1px solid #FCA5A5' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#9B1C1C' }}>Reporter (Farmer)</h4>
                <p style={{ margin: 0, color: '#7F1D1D', fontSize: '0.9rem' }}>"The tractor arrived 4 hours late and the rotavator was broken."</p>
              </div>
              <div style={{ backgroundColor: '#F0FDF4', padding: '1rem', borderRadius: '8px', border: '1px solid #86EFAC' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#166534' }}>Respondent (Provider)</h4>
                <p style={{ margin: 0, color: '#14532D', fontSize: '0.9rem' }}>"I informed him about the traffic delay. I only charged for 2 hours."</p>
              </div>
            </div>

            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Chat Transcript</h4>
              <div style={{ height: '150px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>
                [Chat Log Component]
              </div>
            </div>

            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Resolution Action</h4>
              <textarea 
                placeholder="Mandatory resolution note for audit log..." 
                rows={3} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}
              ></textarea>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => alert('Full Refund issued to Farmer.')} style={{ flex: 1, backgroundColor: 'var(--color-terracotta)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Full Refund (Farmer)</button>
                <button onClick={() => alert('Partial refund split processed.')} style={{ flex: 1, backgroundColor: 'var(--color-turmeric-dark)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Partial Split 50/50</button>
                <button onClick={() => alert('Escrow released to Provider.')} style={{ flex: 1, backgroundColor: 'var(--color-leaf)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Release (Provider)</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
