'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function MilkRecordPage() {
  const records = [
    { date: 'Today, Morning', quantity: '5.5 L', fat: '6.2%', amount: '₹220' },
    { date: 'Yesterday, Evening', quantity: '4.2 L', fat: '5.8%', amount: '₹165' },
    { date: 'Yesterday, Morning', quantity: '5.1 L', fat: '6.1%', amount: '₹200' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Livestock Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>🥛</span> દૂધનો હિસાબ (Milk Record)
        </h1>

        <div className="card" style={{ backgroundColor: 'var(--color-indigo)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>This Week's Earnings</p>
            <h2 style={{ fontSize: '3.5rem', margin: '0.5rem 0 0 0', fontFamily: 'var(--font-heading)' }}>₹1,240</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, opacity: 0.9 }}>Total Milk</p>
            <h3 style={{ fontSize: '2rem', margin: '0.5rem 0 0 0' }}>31.5 L</h3>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-soil)', margin: 0 }}>Recent Collections</h2>
          <button onClick={() => alert("Opening milk entry form...")} className="btn btn-leaf">+ Add Record</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {records.map((record, i) => (
            <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '6px solid var(--color-indigo)' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)' }}>{record.date}</h3>
                <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.9rem' }}>Fat: {record.fat} | Qty: {record.quantity}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>{record.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
