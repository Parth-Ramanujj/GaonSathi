'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function LivestockToolPlaceholder() {
  const params = useParams();
  const id = (params?.id as string) || 'tool';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Livestock Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Livestock Item {id}
        </h1>

        <div className="card" style={{ backgroundColor: 'white' }}>
          <p style={{ color: 'var(--color-soil)' }}>View cattle details and seller contact in the Pashu Mela section.</p>
          <Link href="/livestock/market">
            <button className="btn btn-turmeric" style={{ marginTop: '1rem' }}>Open Pashu Mela</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
