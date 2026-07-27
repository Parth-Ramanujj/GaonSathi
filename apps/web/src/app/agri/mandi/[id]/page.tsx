import Link from 'next/link';
import { BuntingDivider } from '@/components/BuntingDivider';
import '../../../globals.css';

export default function MandiPriceDetailPage({ params }: { params: { id: string } }) {
  const id = params?.id || 'demo';
  const cropName = id.charAt(0).toUpperCase() + id.slice(1);
  
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri/mandi" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Prices
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          {cropName}
        </h1>
        
        <div className="card" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '6px solid var(--color-leaf)' }}>
          <div>
            <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Current Avg Price</p>
            <h2 style={{ margin: '0.5rem 0 0 0', fontSize: '3rem', color: 'var(--color-leaf)' }}>₹2,350<span style={{fontSize: '1rem', color: 'var(--color-soil)'}}>/qtl</span></h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, color: 'var(--color-leaf)', fontWeight: 'bold', fontSize: '1.2rem' }}>▲ +₹50</p>
            <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>vs Yesterday</p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>7-Day Trend</h2>
        <div className="card" style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'white' }}>
          {/* Placeholder for chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '150px', gap: '10px' }}>
            {[60, 65, 55, 70, 80, 85, 95].map((h, i) => (
              <div key={i} style={{ width: '100%', height: `${h}%`, backgroundColor: 'var(--color-leaf)', borderRadius: '4px 4px 0 0', opacity: i === 6 ? 1 : 0.5 }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem' }}>
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>
    </main>
  );
}
