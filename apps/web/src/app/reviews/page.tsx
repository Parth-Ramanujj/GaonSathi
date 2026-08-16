'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  service: string;
  date: string;
  comment: string;
}

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'Received' | 'Given'>('Received');

  const RECEIVED_REVIEWS: ReviewItem[] = [
    {
      id: 'REV-1',
      name: 'Ramesh Patel',
      role: 'ખેડૂત (Farmer)',
      rating: 5,
      service: 'પાઈપ ફિટિંગ અને મોટર રીપેરિંગ',
      date: '2 દિવસ પહેલાં',
      comment: 'મહેશભાઈનું કામ ખૂબ જ ઝડપી અને સરસ હતું. સમયસર આવીને મોટરનું વાયરિંગ કરી આપ્યું.'
    },
    {
      id: 'REV-2',
      name: 'દિનેશભાઈ ચૌધરી',
      role: 'ગામવાસી (Citizen)',
      rating: 5,
      service: 'મહિન્દ્રા ટ્રેક્ટર ભાડે',
      date: '5 દિવસ પહેલાં',
      comment: 'ટ્રેક્ટર બહુ સારી કન્ડિશનમાં હતું. ડ્રાઈવર પણ અનુભવી હતો.'
    },
    {
      id: 'REV-3',
      name: 'સુરેશભાઈ રબારી',
      role: 'પશુપાલક (Dairy Farmer)',
      rating: 4,
      service: 'યુરિયા અને DAP ખાતર ખરીદી',
      date: '1 અઠવાડિયા પહેલાં',
      comment: 'પટેલ કૃષિ કેન્દ્ર પર અસલી ખાતર સરકારી ભાવે મળ્યું.'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Home
        </Link>
        
        <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          ⭐ Ratings & Reviews (રેટિંગ અને પ્રતિસાદ)
        </h1>

        {/* Rating Summary Card */}
        <div className="card" style={{ backgroundColor: 'var(--color-indigo)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderRadius: '16px' }}>
          <div>
            <p style={{ margin: 0, opacity: 0.9 }}>Overall Village Trust Score</p>
            <h2 style={{ fontSize: '3.2rem', margin: '0.25rem 0', color: '#FCD34D', fontFamily: 'var(--font-heading)' }}>4.9 / 5.0</h2>
            <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.85 }}>Based on 48 verified jobs & orders</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '3.5rem' }}>🏅</span>
            <div style={{ fontWeight: 'bold', color: 'white', fontSize: '0.9rem' }}>Gaon Sathi Verified</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <button 
            onClick={() => setActiveTab('Received')}
            className="btn" 
            style={{ 
              flex: 1, 
              backgroundColor: activeTab === 'Received' ? 'var(--color-turmeric)' : 'white',
              color: activeTab === 'Received' ? 'var(--color-indigo-deep)' : 'var(--color-soil)',
              border: '1px solid #CBD5E1' 
            }}
          >
            Reviews Received ({RECEIVED_REVIEWS.length})
          </button>
          <button 
            onClick={() => setActiveTab('Given')}
            className="btn" 
            style={{ 
              flex: 1, 
              backgroundColor: activeTab === 'Given' ? 'var(--color-turmeric)' : 'white',
              color: activeTab === 'Given' ? 'var(--color-indigo-deep)' : 'var(--color-soil)',
              border: '1px solid #CBD5E1' 
            }}
          >
            Reviews Given (0)
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {activeTab === 'Received' ? (
            RECEIVED_REVIEWS.map(r => (
              <div key={r.id} className="card" style={{ backgroundColor: 'white', borderLeft: '6px solid var(--color-leaf)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.2rem' }}>{r.name}</h3>
                    <p style={{ margin: '2px 0 0 0', color: '#6B7280', fontSize: '0.85rem' }}>{r.role} • 🕒 {r.date}</p>
                  </div>
                  <div style={{ color: '#F59E0B', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                  </div>
                </div>

                <div style={{ padding: '4px 8px', backgroundColor: 'var(--color-wheat)', borderRadius: '4px', display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
                  Service: {r.service}
                </div>

                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>
            ))
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: '#6B7280' }}>You haven&apos;t written any reviews yet. Complete a booking to rate your provider.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
