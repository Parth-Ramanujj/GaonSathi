'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function ProviderProfilePage() {
  const params = useParams();
  const category = (params?.category as string) || 'plumbing';
  const providerId = (params?.providerId as string) || '1';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href={`/services/${category}`} style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to {category}
        </Link>
        
        <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
            Mahesh Plumber (ID: {providerId})
          </h1>
          <p style={{ color: 'var(--color-soil)', fontSize: '1.2rem', marginTop: '0.5rem' }}>
            Verified Technician • 📍 Motipur Village
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <Link href={`/services/${category}`}>
              <button className="btn btn-turmeric">Book Service</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
