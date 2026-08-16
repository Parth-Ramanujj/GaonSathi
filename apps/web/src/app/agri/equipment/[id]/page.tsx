'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function EquipmentDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || 'eq-1';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri/equipment" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Equipment
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Equipment Details ({id})
        </h1>

        <div className="card" style={{ backgroundColor: 'white' }}>
          <p style={{ color: 'var(--color-soil)' }}>Check machinery specs and instant hourly rental booking in the marketplace.</p>
          <Link href="/agri/equipment">
            <button className="btn btn-leaf" style={{ marginTop: '1rem' }}>Rent Machinery Now</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
