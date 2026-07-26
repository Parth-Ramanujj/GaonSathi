import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../../globals.css';

export default function EquipmentDetailPage({ params }: { params: { id: string } }) {
  const isTractor = params.id === 'eq-1';
  
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%', paddingBottom: '100px' }}>
        <Link href="/agri/equipment" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Rentals
        </Link>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ height: '200px', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
            {isTractor ? '🚜' : '⚙️'}
          </div>
          
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: '0 0 0.5rem 0' }}>
            {isTractor ? 'Mahindra Tractor 575 DI' : 'Rotavator'}
          </h1>
          <p style={{ fontWeight: 'bold', color: 'var(--color-turmeric-dark)', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>⭐ 4.9 (15 reviews)</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderTop: '1px solid var(--color-wheat-deep)', borderBottom: '1px solid var(--color-wheat-deep)' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Owner</p>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>Raju Bhai</p>
            </div>
            <Link href="/chat/eq-owner">
              <button className="btn" style={{ backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)' }}>Chat</button>
            </Link>
          </div>

          <h2 style={{ fontSize: '1.2rem', color: 'var(--color-indigo)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description</h2>
          <p style={{ color: 'var(--color-soil)', lineHeight: 1.5 }}>
            Well maintained 45 HP tractor. Fuel is included in the hourly rate. Driver is not provided.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: '1rem 2rem', boxShadow: '0 -4px 10px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div>
           <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-soil)' }}>Rental Price</p>
           <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-indigo)' }}>₹{isTractor ? '800' : '300'} <span style={{fontSize: '1rem', fontWeight: 'normal', color: 'var(--color-soil)'}}>/ hr</span></p>
        </div>
        <Link href="/bookings">
          <button className="btn btn-leaf" style={{ padding: '12px 32px' }}>
             Request Booking
          </button>
        </Link>
      </div>
    </main>
  );
}
