'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

export default function EquipmentOwnerDashboard() {
  const { bookings, equipmentListings } = useGaonSathi();

  const rentalRequests = bookings.filter(b => b.type === 'EQUIPMENT');
  const pendingRentals = rentalRequests.filter(b => b.status === 'PENDING');
  const activeRentals = rentalRequests.filter(b => b.status === 'ACCEPTED' || b.status === 'IN_PROGRESS');
  const completedRentals = rentalRequests.filter(b => b.status === 'COMPLETED');
  const totalEarnings = completedRentals.reduce((acc, r) => acc + r.amount, 12500);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Main App
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', margin: 0 }}>
              🚜 સાધન માલિક હબ (Equipment Hub)
            </h1>
          </div>
          <Link href="/equipment/listing">
            <button className="btn btn-leaf" style={{ padding: '10px 18px', fontSize: '1rem' }}>
              + List New Tractor/Tool
            </button>
          </Link>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Rent out your tractors, rotavators, and harvesters directly to local farmers.
        </p>

        {/* Live Earnings Banner */}
        <div className="card" style={{ backgroundColor: 'var(--color-leaf)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderRadius: '16px' }}>
          <div>
            <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>Monthly Rental Earnings (કુલ આવક)</p>
            <h2 style={{ fontSize: '3.2rem', margin: '0.25rem 0 0 0', fontFamily: 'var(--font-heading)', color: '#FEF08A' }}>
              ₹{totalEarnings.toLocaleString('en-IN')}
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, opacity: 0.9 }}>Active Rentals</p>
            <h3 style={{ fontSize: '2.2rem', margin: '0.25rem 0 0 0', color: 'white' }}>
              {activeRentals.length}
            </h3>
          </div>
        </div>

        {/* Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <Link href="/equipment/requests">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-terracotta)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🔔</span>
              <h2 style={{ margin: 0, color: 'var(--color-terracotta)', textAlign: 'center', fontSize: '1.4rem' }}>Rental Requests</h2>
              <span style={{ 
                backgroundColor: pendingRentals.length > 0 ? '#FEE2E2' : 'var(--color-wheat-deep)', 
                color: pendingRentals.length > 0 ? '#DC2626' : 'var(--color-terracotta)',
                padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem' 
              }}>
                {pendingRentals.length} Pending
              </span>
            </div>
          </Link>

          <Link href="/agri/equipment">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-indigo)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🌾</span>
              <h2 style={{ margin: 0, color: 'var(--color-indigo)', textAlign: 'center', fontSize: '1.4rem' }}>Public Rental View</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-indigo)' }}>
                View as Farmer
              </span>
            </div>
          </Link>
          
          <Link href="/equipment/listing">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-leaf)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🚜</span>
              <h2 style={{ margin: 0, color: 'var(--color-leaf)', fontSize: '1.4rem', textAlign: 'center' }}>My Equipment</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-leaf)' }}>
                {equipmentListings.length} Machinery Listed
              </span>
            </div>
          </Link>
        </div>

        {/* Live Equipment Catalog */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-indigo)', fontSize: '1.3rem' }}>
            Your Live Machinery in Village
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {equipmentListings.map(eq => (
              <div key={eq.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'var(--color-paper)', borderRadius: '8px', border: '1px solid var(--color-wheat-deep)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{eq.icon || '🚜'}</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--color-indigo)', fontSize: '1.1rem' }}>{eq.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-soil)', opacity: 0.8 }}>
                      Owner: {eq.ownerName} • 📍 {eq.village} ({eq.distance}) • ⭐ {eq.rating}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--color-leaf)', fontSize: '1.1rem' }}>₹{eq.price} {eq.unit}</div>
                  <span style={{ fontSize: '0.75rem', backgroundColor: eq.status === 'APPROVED' ? '#DEF7EC' : '#FEF08A', color: eq.status === 'APPROVED' ? '#03543F' : '#723B13', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>
                    {eq.status}
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
