'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function MandiPriceDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || 'mandi-1';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri/mandi" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Mandi Rates
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Mandi Details ({id})
        </h1>

        <div className="card" style={{ backgroundColor: 'white' }}>
          <p style={{ color: 'var(--color-soil)' }}>Daily APMC live arrival and modal price records.</p>
          <Link href="/agri/mandi">
            <button className="btn btn-turmeric" style={{ marginTop: '1rem' }}>View Today&apos;s Mandi Rates</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
