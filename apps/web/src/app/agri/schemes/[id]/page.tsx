'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';

export default function SchemeDetailPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri/schemes" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Schemes
        </Link>
        
        <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'white' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--color-soil)', fontWeight: 'bold' }}>Income</span>
            <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--color-soil)', fontWeight: 'bold' }}>Central</span>
          </div>
          
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: '0 0 1rem 0' }}>
            PM-Kisan Samman Nidhi
          </h1>
          <p style={{ color: 'var(--color-soil)', fontSize: '1.2rem', margin: '0 0 1.5rem 0', lineHeight: 1.5 }}>
            Under this scheme, an income support of ₹6,000 per year in three equal installments will be provided to all land-holding farmer families.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>Eligibility</h2>
          <ul style={{ color: 'var(--color-soil)', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Must be a citizen of India.</li>
            <li>Must hold cultivable land in their name.</li>
            <li>Should not be an institutional landholder.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>Documents Required</h2>
          <ul style={{ color: 'var(--color-soil)', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li>Aadhaar Card</li>
            <li>Bank Account Details</li>
            <li>Land Ownership Documents (7/12 extract)</li>
          </ul>

          <button onClick={() => alert("Redirecting to PM-Kisan portal...")} className="btn btn-turmeric" style={{ width: '100%', fontSize: '1.2rem' }}>Apply Now</button>
        </div>
      </div>
    </main>
  );
}
