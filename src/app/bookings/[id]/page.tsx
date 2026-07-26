import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/bookings" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Bookings
        </Link>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
            Booking #{params.id}
          </h1>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--color-wheat-deep)', color: 'var(--color-indigo)', padding: '6px 16px', borderRadius: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
            🔄 ચાલુ
          </span>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', margin: '0 0 0.5rem 0' }}>Ramesh Patel</h2>
          <p style={{ margin: '0 0 1.5rem 0', color: 'var(--color-soil)' }}>Expert Plumber - Pipe Leakage Repair</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--color-wheat-deep)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Date</p>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Oct 24, 2024</p>
            </div>
            <div>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Escrow Total</p>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-leaf)' }}>₹500.00</p>
            </div>
          </div>

          <Link href={`/chat/${params.id}`} style={{ display: 'block', marginBottom: '1rem' }}>
             <button className="btn btn-indigo" style={{ width: '100%' }}>Chat with Provider</button>
          </Link>
          
          {/* Cancellation Area */}
          <div style={{ borderTop: '2px dashed var(--color-terracotta)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
            <h3 style={{ color: 'var(--color-terracotta)', margin: '0 0 0.5rem 0' }}>Danger Zone</h3>
            <p style={{ margin: '0 0 1rem 0', color: 'var(--color-soil)', fontSize: '0.9rem' }}>
              You can cancel this booking. Since it has not started yet, you are eligible for a full refund (₹500.00) according to our refund rules.
            </p>
            <button className="btn" style={{ backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-terracotta)', color: 'var(--color-terracotta)', width: '100%' }}>
              Cancel Booking & Request Refund
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
