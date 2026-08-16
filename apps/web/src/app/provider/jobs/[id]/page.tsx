'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function ActiveJobPage() {
  const params = useParams();
  const jobId = (params?.id as string) || 'JOB-101';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/provider/jobs" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Jobs
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Job #{jobId}
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Status: In Progress • Customer: Ramesh Patel
        </p>

        <div className="card" style={{ backgroundColor: 'white' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>Motor & Pipe Repairing</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/provider/jobs">
              <button className="btn btn-leaf" style={{ width: '100%' }}>View in Jobs List</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
