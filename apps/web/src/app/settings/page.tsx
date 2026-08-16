'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

export default function SettingsPage() {
  const { currentRole, switchRole } = useGaonSathi();
  const [lang, setLang] = useState<'gu' | 'hi' | 'en'>('gu');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [name, setName] = useState('Ramesh Patel');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '750px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Home
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1.5rem' }}>
          ⚙️ Profile & Settings (સેટિંગ્સ)
        </h1>

        {/* Profile Card */}
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'white', marginBottom: '1.5rem', borderLeft: '6px solid var(--color-leaf)' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-leaf)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 'bold' }}>
            RP
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.4rem' }}>{name}</h2>
            <p style={{ margin: '2px 0 0 0', color: 'var(--color-soil)', fontSize: '0.9rem' }}>📍 Motipur Village • Role: <strong>{currentRole}</strong></p>
          </div>
          <button onClick={() => {
            const n = prompt('Enter your name:', name);
            if (n) setName(n);
          }} className="btn btn-turmeric" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            Edit Profile
          </button>
        </div>

        {/* Navigation Quick Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <Link href="/wallet">
            <div className="card" style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'white', cursor: 'pointer' }}>
              <span style={{ fontSize: '2rem' }}>💰</span>
              <h3 style={{ margin: '0.25rem 0 0 0', color: 'var(--color-indigo)', fontSize: '1.1rem' }}>Wallet & Payouts</h3>
            </div>
          </Link>
          <Link href="/notifications">
            <div className="card" style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'white', cursor: 'pointer' }}>
              <span style={{ fontSize: '2rem' }}>🔔</span>
              <h3 style={{ margin: '0.25rem 0 0 0', color: 'var(--color-indigo)', fontSize: '1.1rem' }}>Notifications</h3>
            </div>
          </Link>
          <Link href="/reviews">
            <div className="card" style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'white', cursor: 'pointer' }}>
              <span style={{ fontSize: '2rem' }}>⭐</span>
              <h3 style={{ margin: '0.25rem 0 0 0', color: 'var(--color-indigo)', fontSize: '1.1rem' }}>Ratings & Reviews</h3>
            </div>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Language Selector */}
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-indigo)' }}>App Language (ભાષા)</h3>
              <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.85rem' }}>Current: {lang === 'gu' ? 'ગુજરાતી (Gujarati)' : lang === 'hi' ? 'हिंदी (Hindi)' : 'English'}</p>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {(['gu', 'hi', 'en'] as const).map(l => (
                <button 
                  key={l}
                  onClick={() => setLang(l)}
                  className="btn"
                  style={{
                    backgroundColor: lang === l ? 'var(--color-turmeric)' : '#F1F5F9',
                    color: lang === l ? 'var(--color-indigo-deep)' : 'var(--color-soil)',
                    padding: '4px 10px',
                    fontSize: '0.85rem'
                  }}
                >
                  {l === 'gu' ? 'ગુજરાતી' : l === 'hi' ? 'हिंदी' : 'EN'}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Role Switcher shortcut */}
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-indigo)' }}>Active Role Mode</h3>
              <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.85rem' }}>Switch your persona between User, Provider, Equipment, Shop, Sub-Admin</p>
            </div>
            <select 
              value={currentRole}
              onChange={(e) => switchRole(e.target.value as any)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '0.9rem', backgroundColor: 'white' }}
            >
              <option value="USER">👤 End User (નાગરિક)</option>
              <option value="PROVIDER">🔧 1. Service Provider</option>
              <option value="EQUIPMENT">🚜 2. Equipment Owner</option>
              <option value="SHOP">🏪 3. Shop Owner</option>
              <option value="LIVESTOCK">🐄 4. Livestock / Dairy</option>
              <option value="SUB_ADMIN">🛡️ Sub-Admin (ગામ)</option>
              <option value="SUPER_ADMIN">👑 Super Admin</option>
            </select>
          </div>

          {/* Linked Phone */}
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-indigo)' }}>Linked Mobile Number</h3>
              <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.85rem' }}>{phone}</p>
            </div>
            <button onClick={() => {
              const newPhone = prompt('Enter new 10-digit phone number:');
              if (newPhone) {
                setPhone(newPhone);
                alert('OTP sent to ' + newPhone + ' for verification.');
              }
            }} className="btn btn-indigo" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
              Change Number
            </button>
          </div>

          {/* Danger Zone */}
          <div className="card" style={{ border: '2px solid var(--color-terracotta)', backgroundColor: 'var(--color-paper)' }}>
            <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--color-terracotta)' }}>Account Management</h3>
            <p style={{ margin: '0 0 0.75rem 0', color: 'var(--color-soil)', fontSize: '0.85rem' }}>Permanently reset local demo data or clear cache.</p>
            <button onClick={() => {
              const confirm = window.confirm('Are you sure you want to reset all demo listings and reload default state?');
              if (confirm) {
                localStorage.clear();
                window.location.reload();
              }
            }} className="btn btn-terracotta" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              Reset Demo Store & Cache
            </button>
          </div>

          <Link href="/welcome" style={{ width: '100%' }}>
            <button className="btn" style={{ backgroundColor: 'var(--color-soil)', color: 'white', marginTop: '0.5rem', width: '100%', padding: '12px' }}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
