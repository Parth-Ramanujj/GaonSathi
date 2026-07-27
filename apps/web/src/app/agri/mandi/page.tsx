import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function MandiPriceListPage() {
  const prices = [
    { id: 'wheat', name: 'Wheat (ઘઉં)', price: '₹2,350', trend: 'up', change: '+₹50', location: 'Ahmedabad APMC' },
    { id: 'cotton', name: 'Cotton (કપાસ)', price: '₹7,100', trend: 'down', change: '-₹120', location: 'Rajkot APMC' },
    { id: 'groundnut', name: 'Groundnut (મગફળી)', price: '₹5,800', trend: 'flat', change: '0', location: 'Gondal APMC' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Agri-Tech
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', marginBottom: '0.5rem' }}>
          Mandi Prices (મંડી ભાવ)
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Live APMC rates updated today.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {prices.map(item => (
            <Link href={`/agri/mandi/${item.id}`} key={item.id}>
              <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-indigo)', fontSize: '1.5rem' }}>{item.name}</h2>
                  <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>📍 {item.location}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-soil)' }}>{item.price}</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 'bold', color: item.trend === 'up' ? 'var(--color-leaf)' : item.trend === 'down' ? 'var(--color-terracotta)' : 'var(--color-soil)' }}>
                    {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : '−'} {item.change}/qtl
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
