import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function HeatmapPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Agri-Tech
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>🗺️</span> રોગચાળો (Map)
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Real-time pest and disease outbreaks reported near you.
        </p>

        {/* Mock Radar/Heatmap UI */}
        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--color-wheat-deep)', position: 'relative', overflow: 'hidden', minHeight: '300px', marginBottom: '2rem' }}>
          
          {/* Radar Circles */}
          <div style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid var(--color-indigo)', borderRadius: '50%', opacity: 0.1 }}></div>
          <div style={{ position: 'absolute', width: '400px', height: '400px', border: '2px solid var(--color-indigo)', borderRadius: '50%', opacity: 0.1 }}></div>
          
          {/* User Location */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
            <span style={{ fontSize: '2rem' }}>📍</span>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-indigo)', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px' }}>You</p>
          </div>

          {/* Warning Blips */}
          <div style={{ position: 'absolute', top: '25%', left: '60%', transform: 'translate(-50%, -50%)', textAlign: 'center', animation: 'pulse 2s infinite' }}>
            <span style={{ fontSize: '3rem' }}>🔴</span>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-terracotta)', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px' }}>Pink Bollworm (12km)</p>
          </div>

          <style>{`
            @keyframes pulse {
              0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
              100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
          `}</style>
        </div>

        <div className="card" style={{ borderLeft: '6px solid var(--color-terracotta)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>⚠️</span>
            <div>
              <h2 style={{ margin: 0, color: 'var(--color-terracotta)' }}>Pink Bollworm Alert</h2>
              <p style={{ margin: 0, color: 'var(--color-soil)', fontWeight: 'bold' }}>Spreading in your Taluka</p>
            </div>
          </div>
          <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Multiple farmers within 15km have reported this pest in their cotton fields. 
          </p>
          <Link href="/agri/shop">
            <button className="btn btn-terracotta" style={{ width: '100%' }}>Buy Recommended Pesticide</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
