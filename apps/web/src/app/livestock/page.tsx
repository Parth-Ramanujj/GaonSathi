import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function LivestockHubPage() {
  const tools = [
    { id: 'milk', name: 'દૂધ', subname: 'Milk Record', icon: '🥛', color: 'var(--color-indigo)' },
    { id: 'vet', name: 'ડોક્ટર', subname: 'Call Vet', icon: '🩺', color: 'var(--color-terracotta)' },
    { id: 'market', name: 'મેળો', subname: 'Pashu Mela', icon: '🐂', color: 'var(--color-leaf)' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Dashboard
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-soil)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>🐄</span> પશુપાલન 
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {tools.map(tool => (
            <Link href={`/livestock/${tool.id}`} key={tool.id}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid ${tool.color}`, height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
                <span style={{ fontSize: '4.5rem', marginBottom: '1rem', display: 'block' }}>{tool.icon}</span>
                <h2 style={{ margin: 0, color: tool.color, fontSize: '2rem', textAlign: 'center' }}>{tool.name}</h2>
                <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem', textAlign: 'center' }}>({tool.subname})</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
