'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

export default function BookingsPage() {
  const { bookings } = useGaonSathi();
  const [filter, setFilter] = useState<'ALL' | 'SERVICE' | 'EQUIPMENT' | 'SHOP_ORDER'>('ALL');

  const filteredBookings = bookings.filter(b => {
    if (filter === 'ALL') return true;
    return b.type === filter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return { text: '⏳ બાકી (Requested)', bg: '#FEF08A', color: '#723B13', border: 'var(--color-turmeric-dark)' };
      case 'ACCEPTED':
      case 'IN_PROGRESS':
        return { text: '⚡ સ્વીકારેલ (Active)', bg: '#E0E7FF', color: '#3730A3', border: 'var(--color-indigo)' };
      case 'COMPLETED':
        return { text: '✓ પૂર્ણ (Completed)', bg: '#DEF7EC', color: '#03543F', border: 'var(--color-leaf)' };
      case 'CANCELLED':
        return { text: '✕ રદ (Cancelled)', bg: '#FDE8E8', color: '#9B1C1C', border: 'var(--color-terracotta)' };
      default:
        return { text: status, bg: '#F3F4F6', color: '#374151', border: '#9CA3AF' };
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Home
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
              📋 My Bookings & Orders (મારા ઓર્ડર્સ)
            </h1>
          </div>
          <Link href="/services">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>+ Book New</button>
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <button 
            onClick={() => setFilter('ALL')} 
            className="btn" 
            style={{ 
              backgroundColor: filter === 'ALL' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'ALL' ? 'white' : 'var(--color-soil)',
              padding: '6px 16px',
              fontSize: '0.95rem'
            }}
          >
            All ({bookings.length})
          </button>
          <button 
            onClick={() => setFilter('SERVICE')} 
            className="btn" 
            style={{ 
              backgroundColor: filter === 'SERVICE' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'SERVICE' ? 'white' : 'var(--color-soil)',
              padding: '6px 16px',
              fontSize: '0.95rem'
            }}
          >
            🔧 Services
          </button>
          <button 
            onClick={() => setFilter('EQUIPMENT')} 
            className="btn" 
            style={{ 
              backgroundColor: filter === 'EQUIPMENT' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'EQUIPMENT' ? 'white' : 'var(--color-soil)',
              padding: '6px 16px',
              fontSize: '0.95rem'
            }}
          >
            🚜 Equipment Rentals
          </button>
          <button 
            onClick={() => setFilter('SHOP_ORDER')} 
            className="btn" 
            style={{ 
              backgroundColor: filter === 'SHOP_ORDER' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'SHOP_ORDER' ? 'white' : 'var(--color-soil)',
              padding: '6px 16px',
              fontSize: '0.95rem'
            }}
          >
            🏪 Shop Orders
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredBookings.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '0.75rem' }}>📋</span>
              <h2 style={{ color: 'var(--color-soil)' }}>No bookings found in this category.</h2>
              <p style={{ color: '#6B7280', marginTop: '0.5rem' }}>
                Browse <Link href="/services" style={{ color: 'var(--color-indigo)', fontWeight: 'bold' }}>Services</Link>, <Link href="/agri/equipment" style={{ color: 'var(--color-leaf)', fontWeight: 'bold' }}>Machinery Rentals</Link>, or <Link href="/agri/shop" style={{ color: 'var(--color-turmeric-dark)', fontWeight: 'bold' }}>Agro Shops</Link> to place requests.
              </p>
            </div>
          ) : (
            filteredBookings.map(b => {
              const badge = getStatusBadge(b.status);
              return (
                <div key={b.id} className="card" style={{ borderLeft: `6px solid ${badge.border}`, backgroundColor: 'white' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ fontWeight: 'bold', color: '#6B7280', fontSize: '0.85rem' }}>{b.id}</span>
                      <h2 style={{ fontSize: '1.3rem', margin: '0.2rem 0', color: 'var(--color-indigo)' }}>{b.title}</h2>
                    </div>
                    <span style={{ 
                      backgroundColor: badge.bg, 
                      color: badge.color, 
                      padding: '4px 12px', 
                      borderRadius: '16px', 
                      fontSize: '0.85rem', 
                      fontWeight: 'bold' 
                    }}>
                      {badge.text}
                    </span>
                  </div>

                  <p style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)', fontSize: '0.95rem' }}>
                    Provider / Shop: <strong>{b.providerName}</strong>
                  </p>

                  {b.notes && (
                    <p style={{ margin: '0 0 0.75rem 0', color: '#6B7280', fontSize: '0.85rem', fontStyle: 'italic' }}>
                      Notes: "{b.notes}"
                    </p>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-wheat-deep)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                    <span style={{ color: '#6B7280', fontSize: '0.85rem' }}>📅 {b.date}</span>
                    <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--color-leaf)' }}>₹{b.amount}</span>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </main>
  );
}
