import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ProviderListPage({ params }: { params: { category: string } }) {
  // Hardcoded mock data for UI flow demonstration
  const providers = [
    { id: 'prov-1', name: 'Ramesh Patel', rating: 4.8, reviews: 24, basePrice: 500, desc: 'Expert Plumber - Pipe Leakage Repair', distance: '2 km' },
    { id: 'prov-2', name: 'Suresh Kumar', rating: 4.5, reviews: 12, basePrice: 400, desc: 'General Plumbing Services', distance: '5 km' },
  ];

  const category = params?.category || 'demo';
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/services" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Categories
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          {categoryName}s near you
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {providers.map(prov => (
            <Link href={`/services/${params.category}/${prov.id}`} key={prov.id}>
              <div className="card" style={{ borderLeft: '6px solid var(--color-indigo)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.5rem', margin: 0 }}>{prov.name}</h2>
                    <p style={{ fontWeight: 'bold', color: 'var(--color-turmeric-dark)', margin: '0.25rem 0' }}>⭐ {prov.rating} ({prov.reviews} reviews)</p>
                    <p style={{ color: 'var(--color-soil)', marginTop: '0.5rem' }}>{prov.desc}</p>
                    <p style={{ color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem' }}>📍 {prov.distance} away</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-soil)', margin: 0 }}>₹{prov.basePrice}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-soil)', opacity: 0.8 }}>Starting price</p>
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
