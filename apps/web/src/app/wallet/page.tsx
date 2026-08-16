'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

interface Transaction {
  id: string;
  desc: string;
  amount: string;
  type: 'credit' | 'debit';
  date: string;
  status: string;
}

export default function WalletPage() {
  const [filter, setFilter] = useState<'ALL' | 'PAYOUTS' | 'EARNINGS'>('ALL');
  const [balance] = useState(4850);

  const TRANSACTIONS: Transaction[] = [
    { id: 'TXN-108', desc: 'Payment received for Pipe Repair (Booking #BKG-101)', amount: '+₹350', type: 'credit', date: 'Today, 11:30 AM', status: 'Completed' },
    { id: 'TXN-107', desc: 'Equipment Rental Payout (Mahindra 575 Tractor)', amount: '+₹3,200', type: 'credit', date: 'Yesterday, 06:00 PM', status: 'Completed' },
    { id: 'TXN-106', desc: 'Bank Payout to State Bank of India (SBI A/C ***4891)', amount: '-₹2,500', type: 'debit', date: '14-Aug-2026', status: 'Processed' },
    { id: 'TXN-105', desc: 'Dairy Milk Collection Payment (Morning Shift)', amount: '+₹475', type: 'credit', date: '13-Aug-2026', status: 'Completed' },
  ];

  const filtered = TRANSACTIONS.filter(t => {
    if (filter === 'PAYOUTS') return t.type === 'debit';
    if (filter === 'EARNINGS') return t.type === 'credit';
    return true;
  });

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Home
            </Link>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', margin: 0 }}>
              💰 Wallet & Payments (વૉલેટ અને કમાણી)
            </h1>
          </div>
          <Link href="/wallet/payout">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>
              Withdraw / Payout ➔
            </button>
          </Link>
        </div>

        {/* Balance Card */}
        <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-indigo)', color: 'white', borderRadius: '16px', padding: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ opacity: 0.85, margin: 0, fontSize: '1rem' }}>Available Balance (ઉપાડવા યોગ્ય રકમ)</p>
              <h2 style={{ fontSize: '3.2rem', margin: '0.25rem 0', fontFamily: 'var(--font-heading)', color: '#FCD34D' }}>
                ₹{balance.toLocaleString('en-IN')}
              </h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#A7F3D0' }}>✓ Escrow Protected by Gaon Sathi Trust</p>
            </div>
            <Link href="/wallet/payout">
              <button className="btn btn-leaf" style={{ padding: '10px 20px', fontSize: '1rem' }}>
                Transfer to Bank
              </button>
            </Link>
          </div>
        </div>

        {/* Bank Account Linked Banner */}
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', marginBottom: '1.5rem', border: '1px solid #CBD5E1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2.2rem' }}>🏦</span>
            <div>
              <h3 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.1rem' }}>State Bank of India (SBI)</h3>
              <p style={{ margin: 0, color: '#6B7280', fontSize: '0.85rem' }}>A/C: *******4891 • UPI: 9876543210@sbi</p>
            </div>
          </div>
          <span style={{ color: 'var(--color-leaf)', fontWeight: 'bold', fontSize: '0.85rem', backgroundColor: '#DEF7EC', padding: '4px 10px', borderRadius: '12px' }}>
            ✓ Verified
          </span>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem' }}>
          <button 
            onClick={() => setFilter('ALL')}
            className="btn" 
            style={{ flex: 1, backgroundColor: filter === 'ALL' ? 'var(--color-indigo)' : 'white', color: filter === 'ALL' ? 'white' : 'var(--color-soil)', border: '1px solid #CBD5E1', padding: '8px' }}
          >
            All Transactions
          </button>
          <button 
            onClick={() => setFilter('EARNINGS')}
            className="btn" 
            style={{ flex: 1, backgroundColor: filter === 'EARNINGS' ? 'var(--color-indigo)' : 'white', color: filter === 'EARNINGS' ? 'white' : 'var(--color-soil)', border: '1px solid #CBD5E1', padding: '8px' }}
          >
            Earnings (+Credit)
          </button>
          <button 
            onClick={() => setFilter('PAYOUTS')}
            className="btn" 
            style={{ flex: 1, backgroundColor: filter === 'PAYOUTS' ? 'var(--color-indigo)' : 'white', color: filter === 'PAYOUTS' ? 'white' : 'var(--color-soil)', border: '1px solid #CBD5E1', padding: '8px' }}
          >
            Withdrawals (-Debit)
          </button>
        </div>

        {/* Transaction History */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filtered.map(txn => (
            <div key={txn.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '1rem' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-soil)', fontSize: '0.95rem' }}>{txn.desc}</p>
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: '#6B7280' }}>{txn.date}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: txn.type === 'credit' ? 'var(--color-leaf)' : 'var(--color-terracotta)' }}>
                  {txn.amount}
                </p>
                <span style={{ backgroundColor: '#DEF7EC', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', color: '#03543F', fontWeight: 'bold' }}>
                  {txn.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
