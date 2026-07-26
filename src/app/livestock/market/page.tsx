'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function PashuMelaPage() {
  const animals = [
    { type: 'Gir Cow', yield: '12L/day', age: '4 years', price: '₹65,000', location: 'Rajkot (10km)' },
    { type: 'Murrah Buffalo', yield: '15L/day', age: '5 years', price: '₹85,000', location: 'Gondal (25km)' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Livestock Hub
        </Link>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '3rem' }}>🐂</span> મેળો (Pashu Mela)
          </h1>
          <button onClick={() => alert("Opening animal listing form...")} className="btn btn-leaf" style={{ padding: '12px 24px', fontSize: '1.2rem' }}>+ Sell Animal</button>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Buy and sell healthy livestock directly with farmers in your district.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {animals.map((animal, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', borderTop: '6px solid var(--color-leaf)' }}>
              <div style={{ height: '200px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
                {animal.type.includes('Cow') ? '🐄' : '🐃'}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-indigo)', fontSize: '1.5rem' }}>{animal.type}</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--color-soil)', fontSize: '0.9rem' }}>
                  <span>🥛 {animal.yield}</span>
                  <span>📅 {animal.age}</span>
                  <span>📍 {animal.location}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>{animal.price}</p>
                  <button onClick={() => alert(`Calling seller for ${animal.type}...`)} className="btn btn-indigo" style={{ padding: '8px 16px' }}>Contact Seller</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
