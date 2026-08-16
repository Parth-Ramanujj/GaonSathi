'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

interface NotificationItem {
  id: string;
  category: 'booking' | 'weather' | 'mandi' | 'village';
  title: string;
  desc: string;
  time: string;
  icon: string;
  actionUrl?: string;
  unread: boolean;
}

export default function NotificationsPage() {
  const { bookings } = useGaonSathi();
  const [filter, setFilter] = useState<'ALL' | 'booking' | 'weather' | 'mandi'>('ALL');

  const INITIAL_NOTIFICATIONS: NotificationItem[] = [
    {
      id: 'N-1',
      category: 'booking',
      title: 'નવી સર્વિસ બુકિંગ કન્ફર્મ',
      desc: 'મહેશ પ્લમ્બરે તમારું પાઈપ રીપેરિંગ બુકિંગ સ્વીકાર્યું છે. સમય: સવારે 10:30.',
      time: '10 મિનિટ પહેલાં',
      icon: '🔧',
      actionUrl: '/bookings',
      unread: true
    },
    {
      id: 'N-2',
      category: 'mandi',
      title: '🌾 કપાસના ભાવમાં તેજી!',
      desc: 'રાજકોટ માર્કેટ યાર્ડમાં આજે કપાસનો ભાવ વધીને ₹1,820/મણ પહોંચ્યો.',
      time: '1 કલાક પહેલાં',
      icon: '📈',
      actionUrl: '/agri/mandi',
      unread: true
    },
    {
      id: 'N-3',
      category: 'weather',
      title: '🌧️ હવામાન ચેતવણી: હળવો વરસાદ',
      desc: 'આવતીકાલે મોતીપુર વિસ્તારમાં બપોર પછી વાદળછાયું વાતાવરણ અને વરસાદની શક્યતા.',
      time: '3 કલાક પહેલાં',
      icon: '⛈️',
      actionUrl: '/agri/weather',
      unread: false
    },
    {
      id: 'N-4',
      category: 'village',
      title: '📢 ગ્રામ પંચાયત સભા',
      desc: 'આગામી રવિવારે પંચાયત ભવન ખાતે સરકારી સબસિડી વિતરણ કેમ્પ યોજાશે.',
      time: 'ગઈકાલે',
      icon: '🏛️',
      actionUrl: '/village',
      unread: false
    }
  ];

  const filtered = INITIAL_NOTIFICATIONS.filter(n => filter === 'ALL' || n.category === filter);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Home
            </Link>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', margin: 0 }}>
              🔔 Notifications & Alerts
            </h1>
          </div>
          <span style={{ backgroundColor: 'var(--color-terracotta)', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            {INITIAL_NOTIFICATIONS.filter(n => n.unread).length} New
          </span>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '4px' }}>
          <button 
            onClick={() => setFilter('ALL')}
            className="btn" 
            style={{ 
              backgroundColor: filter === 'ALL' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'ALL' ? 'white' : 'var(--color-soil)',
              padding: '6px 14px', fontSize: '0.9rem' 
            }}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('booking')}
            className="btn" 
            style={{ 
              backgroundColor: filter === 'booking' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'booking' ? 'white' : 'var(--color-soil)',
              padding: '6px 14px', fontSize: '0.9rem' 
            }}
          >
            📦 Bookings ({bookings.length})
          </button>
          <button 
            onClick={() => setFilter('mandi')}
            className="btn" 
            style={{ 
              backgroundColor: filter === 'mandi' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'mandi' ? 'white' : 'var(--color-soil)',
              padding: '6px 14px', fontSize: '0.9rem' 
            }}
          >
            🌾 Mandi
          </button>
          <button 
            onClick={() => setFilter('weather')}
            className="btn" 
            style={{ 
              backgroundColor: filter === 'weather' ? 'var(--color-indigo)' : 'white', 
              color: filter === 'weather' ? 'white' : 'var(--color-soil)',
              padding: '6px 14px', fontSize: '0.9rem' 
            }}
          >
            🌧️ Weather
          </button>
        </div>

        {/* Notifications List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.map(n => (
            <div 
              key={n.id} 
              className="card" 
              style={{ 
                borderLeft: n.unread ? '6px solid var(--color-terracotta)' : '6px solid #CBD5E1', 
                backgroundColor: n.unread ? '#FFFFFF' : 'var(--color-paper)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem'
              }}
            >
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>
                {n.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)', fontSize: '1.15rem' }}>
                    {n.title}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{n.time}</span>
                </div>
                
                <p style={{ margin: '0 0 0.75rem 0', color: 'var(--color-soil)', fontSize: '0.95rem' }}>
                  {n.desc}
                </p>

                {n.actionUrl && (
                  <Link href={n.actionUrl} style={{ color: 'var(--color-leaf)', fontWeight: 'bold', fontSize: '0.85rem', textDecoration: 'none' }}>
                    વિગત જુઓ ➔
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
