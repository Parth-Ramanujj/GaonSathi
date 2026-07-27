'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../globals.css';

const MENU_ITEMS = [
  { name: 'Command Center', path: '/admin', icon: '📊' },
  { name: 'User Management', path: '/admin/users', icon: '👥' },
  { name: 'KYC & Verification', path: '/admin/kyc', icon: '🛡️' },
  { name: 'Bookings & Orders', path: '/admin/bookings', icon: '📝' },
  { name: 'Financial Control', path: '/admin/finance', icon: '💸' },
  { name: 'Dispute Resolution', path: '/admin/disputes', icon: '⚖️' },
  { name: 'Content & Quality', path: '/admin/content', icon: '📑' },
  { name: 'Analytics', path: '/admin/analytics', icon: '📈' },
  { name: 'Settings & Ops', path: '/admin/settings', icon: '⚙️' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8F9FA', fontFamily: 'var(--font-body)' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: '#FFFFFF', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.5rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: 'var(--color-indigo)' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-turmeric)', fontSize: '1.5rem', lineHeight: 1.1 }}>
            Gaon Sathi<br/><span style={{ fontSize: '1rem', color: '#FFFFFF', opacity: 0.8 }}>Admin Console</span>
          </h2>
        </div>
        
        <nav style={{ padding: '1rem 0', flex: 1, overflowY: 'auto' }}>
          {MENU_ITEMS.map(item => {
            const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
            return (
              <Link 
                key={item.path} 
                href={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: isActive ? 'var(--color-indigo)' : '#4B5563',
                  backgroundColor: isActive ? '#EFF6FF' : 'transparent',
                  borderRight: isActive ? '4px solid var(--color-indigo)' : '4px solid transparent',
                  fontWeight: isActive ? 'bold' : 'normal',
                  transition: 'background-color 0.2s',
                  fontSize: '0.95rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div style={{ padding: '1.5rem', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-leaf)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>S</div>
            <div>
              <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-soil)' }}>Super Admin</p>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>ops@gaonsathi.com</p>
            </div>
          </div>
          <Link href="/" style={{ display: 'block', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-terracotta)', textDecoration: 'none', fontWeight: 'bold' }}>
            ← Back to Public App
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
        {/* Top Header / Breadcrumb bar (Optional) */}
        <header style={{ backgroundColor: '#FFFFFF', padding: '1rem 2rem', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>
            {MENU_ITEMS.find(m => m.path === pathname || (m.path !== '/admin' && pathname.startsWith(m.path)))?.name || 'Admin'}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#6B7280', backgroundColor: '#F3F4F6', padding: '4px 8px', borderRadius: '4px' }}>Last login: 10 mins ago</span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>🔔</button>
          </div>
        </header>
        
        {/* Page Content */}
        <div style={{ padding: '2rem', flex: 1 }}>
          {children}
        </div>
      </main>

    </div>
  );
}
