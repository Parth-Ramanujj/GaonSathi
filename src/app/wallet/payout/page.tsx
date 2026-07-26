'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function LinkPayoutPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/wallet" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Wallet
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Link Bank / UPI
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Add your payment details to receive payouts for your services and equipment rentals.
        </p>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>Payment Method</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" className="btn btn-leaf" style={{ flex: 1 }}>UPI ID</button>
              <button type="button" className="btn" style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-soil)' }}>Bank Account</button>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Enter UPI ID</label>
            <input type="text" placeholder="e.g. 9876543210@ybl" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} />
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '8px' }}>
            <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.9rem' }}>ℹ️ We will send ₹1 to verify this account before enabling payouts.</p>
          </div>

          <Link href="/wallet" onClick={() => alert("We've sent ₹1 to your account. Payouts will be enabled once verified.")}>
             <button type="button" className="btn btn-indigo" style={{ width: '100%' }}>Verify & Link Account</button>
          </Link>
        </form>
      </div>
    </main>
  );
}
