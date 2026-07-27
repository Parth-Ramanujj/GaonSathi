import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function WalletPage() {
  const transactions: any[] = [
    { id: 'TXN-1', desc: 'Refund for Canceled Booking #B-123', amount: '+₹500', date: 'Oct 25, 2024', status: 'Processing' }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-terracotta)', marginBottom: '2rem' }}>
          Wallet & Payments
        </h1>

        <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-indigo)', color: 'white' }}>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Available Balance</p>
          <h2 style={{ fontSize: '3rem', margin: 0, fontFamily: 'var(--font-heading)' }}>₹ 0.00</h2>
        </div>

        <Link href="/wallet/payout" style={{ display: 'block', marginBottom: '2rem' }}>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', cursor: 'pointer', border: '2px dashed var(--color-terracotta)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🏦</span>
              <div>
                <h3 style={{ margin: 0, color: 'var(--color-indigo)' }}>Link Bank Account / UPI</h3>
                <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.9rem' }}>Required to receive payouts</p>
              </div>
            </div>
            <span style={{ color: 'var(--color-terracotta)', fontWeight: 'bold' }}>Add &rarr;</span>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <button className="btn" style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)' }}>All Transactions</button>
          <button className="btn btn-turmeric" style={{ flex: 1 }}>Refunds (1)</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {transactions.map(txn => (
            <div key={txn.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-soil)' }}>{txn.desc}</p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-soil)', opacity: 0.8 }}>{txn.date}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-leaf)' }}>{txn.amount}</p>
                <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--color-soil)' }}>
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
