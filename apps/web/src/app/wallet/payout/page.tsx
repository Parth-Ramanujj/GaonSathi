'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function LinkPayoutPage() {
  const router = useRouter();
  const [method, setMethod] = useState<'UPI' | 'BANK'>('UPI');
  const [upiId, setUpiId] = useState('9876543210@sbi');
  const [accountNo, setAccountNo] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('2000');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      router.push('/wallet');
    }, 1800);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/wallet" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Wallet
        </Link>
        
        <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Withdraw Funds & Payouts
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem', fontSize: '1rem' }}>
          Transfer your service earnings and equipment rental revenue directly to your bank or UPI ID.
        </p>

        {isSuccess && (
          <div style={{ backgroundColor: '#DEF7EC', border: '2px solid #31C48D', color: '#03543F', padding: '16px', borderRadius: '12px', marginBottom: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
            🎉 Payout request of ₹{withdrawAmount} submitted! Funds will reflect in your account within 15 minutes. Redirecting...
          </div>
        )}

        <form onSubmit={handleWithdraw} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', backgroundColor: 'white' }}>
          
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>Withdrawal Amount (₹)</label>
            <input 
              type="number" 
              value={withdrawAmount} 
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="e.g. 2000" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1.2rem', fontWeight: 'bold' }} 
              required
            />
            <span style={{ fontSize: '0.8rem', color: '#6B7280', marginTop: '4px', display: 'block' }}>Available balance: ₹4,850</span>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>Payout Method</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="button" 
                onClick={() => setMethod('UPI')}
                className="btn" 
                style={{ flex: 1, backgroundColor: method === 'UPI' ? 'var(--color-leaf)' : '#F1F5F9', color: method === 'UPI' ? 'white' : 'var(--color-soil)' }}
              >
                UPI ID (Instant)
              </button>
              <button 
                type="button" 
                onClick={() => setMethod('BANK')}
                className="btn" 
                style={{ flex: 1, backgroundColor: method === 'BANK' ? 'var(--color-leaf)' : '#F1F5F9', color: method === 'BANK' ? 'white' : 'var(--color-soil)' }}
              >
                Bank Account
              </button>
            </div>
          </div>

          {method === 'UPI' ? (
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>UPI ID</label>
              <input 
                type="text" 
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="e.g. 9876543210@sbi or user@paytm" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
          ) : (
            <>
              <div>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>Bank Account Number</label>
                <input 
                  type="text" 
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  placeholder="e.g. 20394819284" 
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                  required
                />
              </div>
              <div>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>IFSC Code</label>
                <input 
                  type="text" 
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value)}
                  placeholder="e.g. SBIN0001234" 
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                  required
                />
              </div>
            </>
          )}

          <div style={{ padding: '1rem', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '8px' }}>
            <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.85rem' }}>
              🛡️ Zero platform withdrawal fee. 100% direct settlement to your registered account.
            </p>
          </div>

          <button type="submit" className="btn btn-indigo" style={{ width: '100%', padding: '14px', fontSize: '1.1rem' }}>
            Confirm & Withdraw ₹{withdrawAmount || '0'}
          </button>
        </form>
      </div>
    </main>
  );
}
