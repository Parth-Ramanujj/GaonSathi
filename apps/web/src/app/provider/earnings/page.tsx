import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function EarningsDashboardPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Home
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          My Earnings
        </h1>

        <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'var(--color-leaf)', color: 'white' }}>
          <p style={{ opacity: 0.9, marginBottom: '0.5rem' }}>Total Earnings This Week</p>
          <h2 style={{ fontSize: '3.5rem', margin: 0, fontFamily: 'var(--font-heading)' }}>₹4,500</h2>
          <p style={{ opacity: 0.9, marginTop: '1rem' }}>+₹500 from last week</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div className="card">
             <p style={{ color: 'var(--color-soil)', opacity: 0.8, margin: '0 0 0.5rem 0' }}>Jobs Completed</p>
             <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--color-indigo)' }}>9</p>
          </div>
          <div className="card">
             <p style={{ color: 'var(--color-soil)', opacity: 0.8, margin: '0 0 0.5rem 0' }}>Pending Escrow</p>
             <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--color-turmeric-dark)' }}>₹1,000</p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>Recent Payouts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold', margin: 0, color: 'var(--color-soil)' }}>Direct to Bank Account</p>
              <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>Oct 20, 2024</p>
            </div>
            <span style={{ fontWeight: 'bold', color: 'var(--color-leaf)' }}>+₹3,000</span>
          </div>
        </div>

      </div>
    </main>
  );
}
