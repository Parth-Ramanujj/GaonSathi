'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function BookingDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || 'B-101';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/bookings" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to All Bookings
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Booking Details ({id})
        </h1>

        <div className="card" style={{ backgroundColor: 'white' }}>
          <p style={{ color: 'var(--color-soil)' }}>View complete status and updates in your bookings manager.</p>
          <Link href="/bookings">
            <button className="btn btn-turmeric" style={{ marginTop: '1rem' }}>View My Bookings</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
