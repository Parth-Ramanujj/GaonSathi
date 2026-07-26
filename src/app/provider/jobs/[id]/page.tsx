import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../../globals.css';

export default function ActiveJobPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Active Job
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontWeight: 'bold' }}>#{params.id}</p>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Customer: Sanjay Patel</h2>
          <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem' }}>Service: Plumbing Repair</p>
          
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Location: 123 Farm Road, Near Village Square</p>
            <p style={{ margin: 0, opacity: 0.8 }}>1.5 km away</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-indigo" style={{ flex: 1 }}>Navigate</button>
            <Link href={`/chat/${params.id}`} style={{ flex: 1 }}>
              <button className="btn" style={{ width: '100%', backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)' }}>Chat</button>
            </Link>
          </div>
        </div>

        <Link href={`/provider/jobs/${params.id}/complete`}>
          <button className="btn btn-leaf" style={{ width: '100%', padding: '16px', fontSize: '1.2rem' }}>
            Mark Job Complete
          </button>
        </Link>
      </div>
    </main>
  );
}
