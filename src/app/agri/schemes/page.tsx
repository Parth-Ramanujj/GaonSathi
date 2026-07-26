import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function SchemesListPage() {
  const schemes = [
    { id: 'pm-kisan', name: 'PM-Kisan Samman Nidhi', desc: '₹6,000 per year minimum income support', tags: ['Income', 'Central'] },
    { id: 'fby', name: 'Pradhan Mantri Fasal Bima Yojana', desc: 'Crop insurance for unpredictable weather', tags: ['Insurance', 'Central'] },
    { id: 'ksk', name: 'Kisan Surya Uday Yojana', desc: 'Day-time power supply for irrigation', tags: ['Power', 'State (Gujarat)'] },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Agri-Tech
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-turmeric-dark)', marginBottom: '0.5rem' }}>
          Government Schemes
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Discover subsidies and benefits available for your farm.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {schemes.map(scheme => (
            <Link href={`/agri/schemes/${scheme.id}`} key={scheme.id}>
              <div className="card" style={{ borderLeft: '6px solid var(--color-turmeric-dark)' }}>
                <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-indigo)', fontSize: '1.5rem' }}>{scheme.name}</h2>
                <p style={{ margin: '0 0 1rem 0', color: 'var(--color-soil)' }}>{scheme.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {scheme.tags.map(t => (
                    <span key={t} style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--color-soil)', fontWeight: 'bold' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
