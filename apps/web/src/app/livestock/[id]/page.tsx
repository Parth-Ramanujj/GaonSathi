import Link from 'next/link';
import { BuntingDivider } from '@/components/BuntingDivider';
import '../../globals.css';

export default function LivestockToolPlaceholder({ params }: { params: { id: string } }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold' }}>
            ← Back to Livestock Hub
          </Link>
        </div>

        <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🚧</div>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: '0 0 1rem 0' }}>
          Coming Soon
        </h1>
        <p style={{ color: 'var(--color-soil)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
          The <strong>{params.id}</strong> feature is currently under development. Our team is working hard to bring this to you soon!
        </p>

        <Link href="/livestock">
          <button className="btn btn-leaf" style={{ padding: '12px 32px', fontSize: '1.2rem' }}>
            Go Back
          </button>
        </Link>
      </div>
    </main>
  );
}
