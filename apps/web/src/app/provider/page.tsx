'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

export default function ProviderDashboardPage() {
  const { bookings, serviceListings } = useGaonSathi();
  
  const pendingRequests = bookings.filter(b => b.type === 'SERVICE' && b.status === 'PENDING');
  const activeJobs = bookings.filter(b => b.type === 'SERVICE' && (b.status === 'ACCEPTED' || b.status === 'IN_PROGRESS'));
  const completedJobs = bookings.filter(b => b.type === 'SERVICE' && b.status === 'COMPLETED');
  const totalEarnings = completedJobs.reduce((acc, job) => acc + job.amount, 4500);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Main App
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
              🛠️ કારીગર હબ (Service Provider Hub)
            </h1>
          </div>
          <Link href="/provider/listing">
            <button className="btn btn-turmeric" style={{ padding: '10px 18px', fontSize: '1rem' }}>
              + Manage My Service
            </button>
          </Link>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Welcome, <strong>Mahesh Plumber</strong>! Here is your live service dashboard.
        </p>

        {/* Live Earnings Header */}
        <div className="card" style={{ backgroundColor: 'var(--color-indigo)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderRadius: '16px' }}>
          <div>
            <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>This Month&apos;s Earnings (કુલ કમાણી)</p>
            <h2 style={{ fontSize: '3.2rem', margin: '0.25rem 0 0 0', fontFamily: 'var(--font-heading)', color: '#FCD34D' }}>
              ₹{totalEarnings.toLocaleString('en-IN')}
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, opacity: 0.9 }}>Completed Jobs</p>
            <h3 style={{ fontSize: '2.2rem', margin: '0.25rem 0 0 0', color: 'white' }}>
              {completedJobs.length + 6}
            </h3>
          </div>
        </div>

        {/* Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <Link href="/provider/requests">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-terracotta)`, height: '100%', cursor: 'pointer', transition: 'transform 0.15s' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🔔</span>
              <h2 style={{ margin: 0, color: 'var(--color-terracotta)', fontSize: '1.4rem', textAlign: 'center' }}>New Requests</h2>
              <span style={{ 
                backgroundColor: pendingRequests.length > 0 ? '#FEE2E2' : 'var(--color-wheat-deep)', 
                color: pendingRequests.length > 0 ? '#DC2626' : 'var(--color-soil)',
                padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem' 
              }}>
                {pendingRequests.length} Pending
              </span>
            </div>
          </Link>

          <Link href="/provider/jobs">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-leaf)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🔧</span>
              <h2 style={{ margin: 0, color: 'var(--color-leaf)', fontSize: '1.4rem', textAlign: 'center' }}>Active Jobs</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-leaf)' }}>
                {activeJobs.length} In Progress
              </span>
            </div>
          </Link>
          
          <Link href="/provider/listing">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-indigo)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>📝</span>
              <h2 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.4rem', textAlign: 'center' }}>My Service Listings</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-indigo)' }}>
                {serviceListings.length} Registered
              </span>
            </div>
          </Link>
        </div>

        {/* Live Active Listings Preview */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-indigo)', fontSize: '1.3rem' }}>
            Live Services in Your Village
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {serviceListings.map(srv => (
              <div key={srv.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'var(--color-paper)', borderRadius: '8px', border: '1px solid var(--color-wheat-deep)' }}>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>{srv.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-soil)', opacity: 0.8 }}>
                    By {srv.providerName} • 📍 {srv.village} • ⭐ {srv.rating}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--color-leaf)' }}>₹{srv.basePrice} base</div>
                  <span style={{ fontSize: '0.75rem', backgroundColor: srv.status === 'APPROVED' ? '#DEF7EC' : '#FEF08A', color: srv.status === 'APPROVED' ? '#03543F' : '#723B13', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>
                    {srv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
