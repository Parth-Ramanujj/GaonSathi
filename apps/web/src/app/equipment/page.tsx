import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function EquipmentOwnerDashboard() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Dashboard
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', marginBottom: '0.5rem' }}>
          🚜 Equipment Owner Hub
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Manage your tractor and tool rentals to local farmers.
        </p>

        <div className="card" style={{ backgroundColor: 'var(--color-leaf)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>Monthly Earnings</p>
            <h2 style={{ fontSize: '3.5rem', margin: '0.5rem 0 0 0', fontFamily: 'var(--font-heading)' }}>₹12,500</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, opacity: 0.9 }}>Active Rentals</p>
            <h3 style={{ fontSize: '2rem', margin: '0.5rem 0 0 0' }}>2</h3>
          </div>
        </div>

        {/* Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <Link href="/equipment/requests">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid var(--color-terracotta)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔔</span>
              <h2 style={{ margin: 0, color: 'var(--color-terracotta)', textAlign: 'center' }}>Rental Requests</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '1rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-terracotta)' }}>3 Pending</span>
            </div>
          </Link>

          <Link href="/equipment/calendar">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid var(--color-indigo)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>📅</span>
              <h2 style={{ margin: 0, color: 'var(--color-indigo)', textAlign: 'center' }}>Booking Calendar</h2>
            </div>
          </Link>
          
          <Link href="/equipment/listing" style={{ gridColumn: '1 / -1' }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', borderTop: `6px solid var(--color-leaf)`, cursor: 'pointer' }}>
              <span style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚜</span>
              <h2 style={{ margin: 0, color: 'var(--color-leaf)' }}>My Equipment Inventory</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
