'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ProviderJobsPage() {
  const { bookings, updateBookingStatus } = useGaonSathi();
  const jobs = bookings.filter(b => b.type === 'SERVICE' && (b.status === 'ACCEPTED' || b.status === 'IN_PROGRESS' || b.status === 'COMPLETED'));

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/provider" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Provider Hub
            </Link>
            <h1 style={{ fontSize: '2.3rem', color: 'var(--color-leaf)', margin: 0 }}>
              🔧 Service Jobs Tracker
            </h1>
          </div>
          <Link href="/provider/requests">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>New Requests</button>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobs.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>📋</span>
              <h2 style={{ color: 'var(--color-soil)' }}>No active or completed jobs yet.</h2>
              <p style={{ color: 'var(--color-soil)', opacity: 0.8, marginTop: '0.5rem' }}>
                Accept pending requests from the &ldquo;New Requests&rdquo; tab to start jobs.
              </p>
            </div>
          ) : (
            jobs.map(job => (
              <div key={job.id} className="card" style={{ borderLeft: job.status === 'COMPLETED' ? '6px solid var(--color-leaf)' : '6px solid var(--color-indigo)', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <h2 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)', fontSize: '1.3rem' }}>{job.customerName}</h2>
                    <p style={{ margin: 0, color: 'var(--color-soil)', fontWeight: '600' }}>{job.title}</p>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem' }}>📞 {job.customerPhone} • 🕒 {job.date}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--color-leaf)', fontSize: '1.3rem' }}>₹{job.amount}</div>
                    <span style={{ 
                      backgroundColor: job.status === 'COMPLETED' ? '#DEF7EC' : '#E0E7FF', 
                      color: job.status === 'COMPLETED' ? '#03543F' : '#3730A3', 
                      padding: '3px 10px', 
                      borderRadius: '12px', 
                      fontWeight: 'bold', 
                      fontSize: '0.85rem' 
                    }}>
                      {job.status === 'COMPLETED' ? '✓ Completed' : '⚡ In Progress'}
                    </span>
                  </div>
                </div>

                {job.status !== 'COMPLETED' ? (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button 
                      onClick={() => updateBookingStatus(job.id, 'COMPLETED')} 
                      className="btn btn-leaf" 
                      style={{ flex: 1 }}
                    >
                      ✓ Mark as Completed & Collect ₹{job.amount}
                    </button>
                    <button 
                      onClick={() => alert(`Calling customer ${job.customerName}...`)} 
                      className="btn btn-indigo" 
                      style={{ flex: 1 }}
                    >
                      📞 Call Customer
                    </button>
                  </div>
                ) : (
                  <div style={{ backgroundColor: '#F0FDF4', padding: '10px 14px', borderRadius: '8px', border: '1px solid #86EFAC', color: '#166534', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Payment Received via Cash / UPI</span>
                    <span>Added to Earnings ✨</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
