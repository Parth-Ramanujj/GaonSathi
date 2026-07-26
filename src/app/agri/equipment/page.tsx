import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function EquipmentBrowsePage() {
  const equipment = [
    { id: 'eq-1', name: 'Mahindra Tractor 575 DI', owner: 'Raju Bhai', price: 800, unit: 'per hour', rating: 4.9, distance: '3 km' },
    { id: 'eq-2', name: 'Rotavator', owner: 'Kisan Center', price: 300, unit: 'per hour', rating: 4.5, distance: '5 km' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Agri-Tech
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
              Rent Equipment
            </h1>
          </div>
          <Link href="/bookings">
            <button className="btn" style={{ backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)' }}>
              My Rentals
            </button>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {equipment.map(eq => (
            <Link href={`/agri/equipment/${eq.id}`} key={eq.id}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', borderTop: '6px solid var(--color-leaf)', cursor: 'pointer', padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '200px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>
                  {eq.id === 'eq-1' ? '🚜' : '⚙️'}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{eq.name}</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <p style={{ color: 'var(--color-soil)', margin: '0' }}>By {eq.owner} • ⭐ {eq.rating}</p>
                      <p style={{ color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>📍 {eq.distance} away</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-soil)', margin: 0 }}>₹{eq.price}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-soil)', opacity: 0.8, margin: 0 }}>{eq.unit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
