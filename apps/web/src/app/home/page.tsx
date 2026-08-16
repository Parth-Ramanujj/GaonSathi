'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider, PermissionPrompt, VoiceAssistantFab } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

export default function HomeDashboard() {
  const { bookings, cart } = useGaonSathi();
  const activeBookings = bookings.filter(b => b.status === 'PENDING' || b.status === 'ACCEPTED');

  return (
    <main style={{ padding: '1.5rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PermissionPrompt />
      <VoiceAssistantFab />
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--color-indigo)', margin: 0, lineHeight: 1.1 }}>
            Gaon Sathi
          </h1>
          <p style={{ margin: '4px 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem' }}>
            તમારું ડિજિટલ ગામ • 📍 Motipur Village
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link href="/bookings">
            <button className="btn" style={{ backgroundColor: 'white', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)', padding: '8px 16px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>📋 My Bookings</span>
              {activeBookings.length > 0 && (
                <span style={{ backgroundColor: '#EF4444', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '1px 6px', borderRadius: '10px' }}>
                  {activeBookings.length}
                </span>
              )}
            </button>
          </Link>

          <Link href="/agri/shop">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>
              🛒 Cart ({cart.length})
            </button>
          </Link>

          <Link href="/settings">
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--color-leaf)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              RP
            </div>
          </Link>
        </div>
      </div>

      <div className="bunting-divider" aria-hidden="true" style={{ marginBottom: '2rem' }}>
        {[...Array(30)].map((_, i) => (
          <div key={i} className="bunting-flag"></div>
        ))}
      </div>

      {/* Grid of Main Modules */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        
        {/* 1. Agri-Tech Module Card (Farmer Service) */}
        <Link href="/agri" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-leaf)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'transform 0.15s' }}>
            <span style={{ fontSize: '5rem', marginBottom: '0.5rem', display: 'block' }}>🌾</span>
            <h2 style={{ color: 'var(--color-leaf)', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>ખેતીવાડી</h2>
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem', textAlign: 'center' }}>Mandi, Weather & Crops</p>
          </section>
        </Link>

        {/* 2. Local Services Module Card (Consumer -> Service Provider) */}
        <Link href="/services" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-indigo)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'var(--color-indigo)', color: 'white', transition: 'transform 0.15s' }}>
            <span style={{ fontSize: '5rem', marginBottom: '0.5rem', display: 'block' }}>🔧</span>
            <h2 style={{ color: 'white', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>સેવાઓ</h2>
            <p style={{ margin: '0.25rem 0 0 0', opacity: 0.85, fontSize: '1.1rem', textAlign: 'center' }}>Plumber, Electrician, Mason</p>
          </section>
        </Link>
        
        {/* 3. Shop Orders / Agro Store */}
        <Link href="/agri/shop" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-turmeric-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'transform 0.15s' }}>
            <span style={{ fontSize: '5rem', marginBottom: '0.5rem', display: 'block' }}>🏪</span>
            <h2 style={{ color: 'var(--color-turmeric-dark)', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>દુકાન માર્કેટ</h2>
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem', textAlign: 'center' }}>Fertilizers, Seeds & Tools</p>
          </section>
        </Link>
        
        {/* 4. Equipment Rental */}
        <Link href="/agri/equipment" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-terracotta)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'transform 0.15s' }}>
            <span style={{ fontSize: '5rem', marginBottom: '0.5rem', display: 'block' }}>🚜</span>
            <h2 style={{ color: 'var(--color-terracotta)', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>ઓજારો ભાડે</h2>
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem', textAlign: 'center' }}>Tractor & Machinery Rental</p>
          </section>
        </Link>

        {/* 5. Livestock & Dairy Module */}
        <Link href="/livestock" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-soil)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'transform 0.15s' }}>
            <span style={{ fontSize: '5rem', marginBottom: '0.5rem', display: 'block' }}>🐄</span>
            <h2 style={{ color: 'var(--color-soil)', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>પશુપાલન</h2>
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem', textAlign: 'center' }}>Dairy Milk & Pashu Mela</p>
          </section>
        </Link>

        {/* 6. Village News Module */}
        <Link href="/village" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-leaf)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white', transition: 'transform 0.15s' }}>
            <span style={{ fontSize: '5rem', marginBottom: '0.5rem', display: 'block' }}>📢</span>
            <h2 style={{ color: 'var(--color-leaf)', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>ગામ / પંચાયત</h2>
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.1rem', textAlign: 'center' }}>Chaupal & Government Schemes</p>
          </section>
        </Link>

      </div>

    </main>
  );
}
