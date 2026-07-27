'use client';

import React from 'react';

const PAYOUTS = [
  { id: 'PAY-501', provider: 'Raju Bhai (Plumber)', amount: '₹1,200', date: 'Oct 25, 2024', bank: 'HDFC...1234', status: 'Pending Approval' },
  { id: 'PAY-502', provider: 'Kisan Center (Shop)', amount: '₹4,500', date: 'Oct 24, 2024', bank: 'SBI...9988', status: 'Failed (Invalid IFSC)' },
];

export default function AdminFinancePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* 1. Revenue Breakdown & Cohorts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-indigo)' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#6B7280', textTransform: 'uppercase' }}>Revenue Breakdown (YTD)</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ color: '#374151' }}>Commissions (10%)</span>
            <span style={{ fontWeight: 'bold' }}>₹1,850,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: '#374151' }}>Shop Subscriptions</span>
            <span style={{ fontWeight: 'bold' }}>₹250,000</span>
          </div>
          <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0.5rem 0' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', color: 'var(--color-indigo)' }}>
            <span style={{ fontWeight: 'bold' }}>Total Gross</span>
            <span style={{ fontWeight: 'bold' }}>₹2,100,000</span>
          </div>
        </div>

        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-leaf)' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#6B7280', textTransform: 'uppercase' }}>TDS & GST Tracker</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ color: '#374151' }}>TDS Deducted (194-O)</span>
            <span style={{ fontWeight: 'bold', color: 'var(--color-terracotta)' }}>₹45,200</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: '#374151' }}>GST Collected</span>
            <span style={{ fontWeight: 'bold', color: 'var(--color-terracotta)' }}>₹378,000</span>
          </div>
          <button style={{ width: '100%', padding: '8px', backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>Export for CA Filing</button>
        </div>

        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-turmeric-dark)' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#6B7280', textTransform: 'uppercase' }}>Cohort Revenue (Last 3 Mo)</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '80px', gap: '8px', paddingBottom: '0.5rem', borderBottom: '1px solid #E5E7EB' }}>
             <div style={{ flex: 1, backgroundColor: 'var(--color-turmeric)', height: '40%', borderRadius: '4px 4px 0 0' }}></div>
             <div style={{ flex: 1, backgroundColor: 'var(--color-turmeric)', height: '70%', borderRadius: '4px 4px 0 0' }}></div>
             <div style={{ flex: 1, backgroundColor: 'var(--color-turmeric-dark)', height: '100%', borderRadius: '4px 4px 0 0' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: '#6B7280' }}>
            <span>Aug Cohort</span>
            <span>Sep Cohort</span>
            <span>Oct Cohort</span>
          </div>
        </div>
      </div>

      {/* 2. Payout Management */}
      <div style={{ backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>Provider Payouts</h2>
          <button onClick={() => alert('Batch processing 12 payouts to Razorpay Route...')} style={{ backgroundColor: 'var(--color-indigo)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Process Batch (12)</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
            <tr>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Payout ID</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Recipient</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Amount</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Bank Info</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {PAYOUTS.map((p, i) => (
              <tr key={p.id} style={{ borderBottom: i === PAYOUTS.length - 1 ? 'none' : '1px solid #E5E7EB' }}>
                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#374151' }}>{p.id}</td>
                <td style={{ padding: '12px 16px', fontWeight: 'bold', color: '#111827' }}>{p.provider}</td>
                <td style={{ padding: '12px 16px', color: 'var(--color-leaf)', fontWeight: 'bold' }}>{p.amount}</td>
                <td style={{ padding: '12px 16px', color: '#6B7280', fontFamily: 'monospace' }}>{p.bank}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ color: p.status.includes('Failed') ? 'var(--color-terracotta)' : 'var(--color-turmeric-dark)', fontWeight: 'bold', fontSize: '0.85rem' }}>{p.status}</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => {
                        const confirm = window.confirm(`Approve payout of ${p.amount} to ${p.provider}?`);
                        if(confirm) alert('Payout approved and logged.');
                      }} style={{ padding: '4px 8px', fontSize: '0.8rem', backgroundColor: '#FFF', border: '1px solid #D1D5DB', borderRadius: '4px', cursor: 'pointer' }}>Approve</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
