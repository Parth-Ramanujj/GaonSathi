import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function AgriHubPage() {
  const tools = [
    { id: 'mandi', name: 'ભાવ', subname: 'Mandi', icon: '📈', link: '/agri/mandi', color: 'var(--color-indigo)' },
    { id: 'weather', name: 'હવામાન', subname: 'Weather', icon: '🌦️', link: '/agri/weather', color: 'var(--color-leaf)' },
    { id: 'advisory', name: 'પાક સલાહ', subname: 'Advisory', icon: '🤖', link: '/agri/advisory', color: 'var(--color-turmeric-dark)' },
    { id: 'schemes', name: 'યોજના', subname: 'Schemes', icon: '🏛️', link: '/agri/schemes', color: 'var(--color-terracotta)' },
    { id: 'equipment', name: 'સાધન ભાડે', subname: 'Rentals', icon: '🚜', link: '/agri/equipment', color: 'var(--color-indigo)' },
    { id: 'shop', name: 'ખાતર / દવા', subname: 'Shop', icon: '🌱', link: '/agri/shop', color: 'var(--color-leaf)' },
    { id: 'heatmap', name: 'રોગચાળો', subname: 'Disease Map', icon: '🗺️', link: '/agri/heatmap', color: 'var(--color-terracotta)' },
    { id: 'predictor', name: 'આગાહી', subname: 'AI Predictor', icon: '📊', link: '/agri/predictor', color: 'var(--color-turmeric-dark)' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Dashboard
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>🌾</span> ખેતીવાડી 
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
          {tools.map(tool => (
            <Link href={tool.link} key={tool.id}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid ${tool.color}`, height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
                <span style={{ fontSize: '4.5rem', marginBottom: '1rem', display: 'block' }}>{tool.icon}</span>
                <h2 style={{ margin: 0, color: tool.color, fontSize: '1.5rem', textAlign: 'center' }}>{tool.name}</h2>
                <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1rem', textAlign: 'center' }}>({tool.subname})</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
