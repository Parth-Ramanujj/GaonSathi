import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function EquipmentCalendarPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/equipment/listing" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Listing
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Rental Calendar
        </h1>

        <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn" style={{ padding: '8px', fontSize: '1.2rem', backgroundColor: 'transparent' }}>◀</button>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-soil)' }}>October 2024</h2>
          <button className="btn" style={{ padding: '8px', fontSize: '1.2rem', backgroundColor: 'transparent' }}>▶</button>
        </div>

        <div className="card" style={{ padding: '2rem', backgroundColor: 'white' }}>
          {/* Mock Calendar Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', textAlign: 'center' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <div key={`header-${i}`} style={{ fontWeight: 'bold', color: 'var(--color-soil)', marginBottom: '0.5rem' }}>{d}</div>
            ))}
            
            {/* Blank days for start of month */}
            <div style={{ padding: '1rem' }}></div>
            <div style={{ padding: '1rem' }}></div>

            {/* Days 1-29 */}
            {[...Array(29)].map((_, i) => {
              const day = i + 1;
              const isRented = day === 24 || day === 25; // Rented out dates
              const isToday = day === 23;
              
              return (
                <div key={day} style={{ 
                  padding: '1rem 0.5rem', 
                  borderRadius: '8px',
                  backgroundColor: isRented ? 'var(--color-terracotta)' : isToday ? 'var(--color-indigo)' : 'var(--color-wheat)',
                  color: isRented || isToday ? 'white' : 'var(--color-soil)',
                  fontWeight: isToday ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}>
                  {day}
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--color-wheat)', borderRadius: '4px' }}></div>
              <span style={{ color: 'var(--color-soil)', fontSize: '0.9rem' }}>Available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--color-terracotta)', borderRadius: '4px' }}></div>
              <span style={{ color: 'var(--color-soil)', fontSize: '0.9rem' }}>Rented</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
