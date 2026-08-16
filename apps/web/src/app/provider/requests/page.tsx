'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ProviderRequestsPage() {
  const { bookings, updateBookingStatus } = useGaonSathi();
  const serviceRequests = bookings.filter(b => b.type === 'SERVICE');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/provider" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Provider Hub
            </Link>
            <h1 style={{ fontSize: '2.3rem', color: 'var(--color-indigo)', margin: 0 }}>
              🔔 Customer Service Requests
            </h1>
          </div>
          <Link href="/provider/jobs">
            <button className="btn btn-indigo" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>Active Jobs</button>
          </Link>
        </div>

        {serviceRequests.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>📭</span>
            <h2 style={{ color: 'var(--color-soil)' }}>No requests currently</h2>
            <p style={{ color: 'var(--color-soil)', opacity: 0.8, marginTop: '0.5rem' }}>
              When village customers book your services from `/services`, they will appear here in real-time.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {serviceRequests.map(req => (
              <div 
                key={req.id} 
                className="card" 
                style={{ 
                  borderLeft: req.status === 'PENDING' ? '6px solid var(--color-turmeric-dark)' : req.status === 'ACCEPTED' ? '6px solid var(--color-leaf)' : '6px solid var(--color-indigo)',
                  backgroundColor: 'white' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div>
                    <h2 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.4rem' }}>{req.customerName}</h2>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-soil)', fontSize: '0.9rem' }}>📞 {req.customerPhone}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-leaf)', fontSize: '1.4rem' }}>₹{req.amount}</span>
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        backgroundColor: req.status === 'PENDING' ? '#FEF08A' : req.status === 'ACCEPTED' ? '#DEF7EC' : '#E0E7FF',
                        color: req.status === 'PENDING' ? '#723B13' : req.status === 'ACCEPTED' ? '#03543F' : '#3730A3'
                      }}>
                        {req.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)', fontSize: '1.1rem' }}>{req.title}</h3>
                {req.notes && <p style={{ margin: '0 0 0.75rem 0', color: 'var(--color-soil)', fontStyle: 'italic', fontSize: '0.95rem' }}>&ldquo;{req.notes}&rdquo;</p>}
                
                <p style={{ margin: '0 0 1.25rem 0', color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.85rem' }}>
                  🕒 Requested: {req.date} {req.timeSlot ? `• Slot: ${req.timeSlot}` : ''}
                </p>
                
                {req.status === 'PENDING' && (
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={() => updateBookingStatus(req.id, 'ACCEPTED')} 
                      className="btn btn-leaf" 
                      style={{ flex: 1 }}
                    >
                      ✓ Accept Job
                    </button>
                    <button 
                      onClick={() => updateBookingStatus(req.id, 'CANCELLED')} 
                      className="btn" 
                      style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-terracotta)', color: 'var(--color-terracotta)' }}
                    >
                      ✕ Decline
                    </button>
                  </div>
                )}

                {req.status === 'ACCEPTED' && (
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={() => updateBookingStatus(req.id, 'COMPLETED')} 
                      className="btn btn-leaf" 
                      style={{ flex: 1 }}
                    >
                      ✓ Mark Job as Completed
                    </button>
                    <button 
                      onClick={() => alert(`Calling customer ${req.customerName} at ${req.customerPhone}...`)} 
                      className="btn btn-indigo" 
                      style={{ flex: 1 }}
                    >
                      📞 Call Customer
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
