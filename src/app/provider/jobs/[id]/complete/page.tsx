import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../../../globals.css';

export default function JobCompletionPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div className="card" style={{ width: '100%', textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', marginBottom: '1rem' }}>
            Job Complete!
          </h1>
          <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
            You have marked Job #{params.id} as complete. The customer has been notified.
          </p>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '8px', marginBottom: '2rem' }}>
            <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Escrow Payment</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-indigo)' }}>₹500.00</p>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-leaf)', fontWeight: 'bold' }}>Will be released to your wallet shortly.</p>
          </div>

          <Link href="/provider/earnings">
            <button className="btn btn-turmeric" style={{ width: '100%', marginBottom: '1rem' }}>
              View Earnings
            </button>
          </Link>
          <Link href="/home">
            <button className="btn" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', color: 'var(--color-indigo)', fontWeight: 'bold' }}>
              Back to Dashboard
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}
