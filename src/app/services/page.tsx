import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../globals.css';

export default function ServicesHubPage() {
  const categories = [
    { id: 'plumbing', name: 'પ્લમ્બર', subname: 'Plumber', icon: '🚰', color: 'var(--color-indigo)' },
    { id: 'electrical', name: 'ઇલેક્ટ્રિશિયન', subname: 'Electrician', icon: '⚡', color: 'var(--color-terracotta)' },
    { id: 'carpentry', name: 'સુથાર', subname: 'Carpenter', icon: '🪚', color: 'var(--color-turmeric-dark)' },
    { id: 'masonry', name: 'કળિયો', subname: 'Mason', icon: '🧱', color: 'var(--color-leaf)' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Dashboard
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>🔧</span> સેવાઓ 
            </h1>
          </div>
          <Link href="/bookings">
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--color-indigo)', border: '2px solid var(--color-indigo)', fontSize: '1.2rem', padding: '12px 24px' }}>
              My Bookings
            </button>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
          {categories.map(cat => (
            <Link href={`/services/${cat.id}`} key={cat.id}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid ${cat.color}`, height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
                <span style={{ fontSize: '4.5rem', marginBottom: '1rem', display: 'block' }}>{cat.icon}</span>
                <h2 style={{ margin: 0, color: cat.color, fontSize: '1.5rem', textAlign: 'center' }}>{cat.name}</h2>
                <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1rem', textAlign: 'center' }}>({cat.subname})</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
