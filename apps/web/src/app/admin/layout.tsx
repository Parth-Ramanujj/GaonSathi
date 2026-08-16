'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

const ALL_MENU_ITEMS = [
  { name: 'Command Center', path: '/admin', icon: '📊', roles: ['SUPER_ADMIN'] },
  { name: 'User Management', path: '/admin/users', icon: '👥', roles: ['SUPER_ADMIN'] },
  { name: 'KYC & Verification', path: '/admin/kyc', icon: '🛡️', roles: ['SUPER_ADMIN', 'SUB_ADMIN'] },
  { name: 'Bookings & Orders', path: '/admin/bookings', icon: '📝', roles: ['SUPER_ADMIN', 'SUB_ADMIN'] },
  { name: 'Financial Control', path: '/admin/finance', icon: '💸', roles: ['SUPER_ADMIN'] },
  { name: 'Dispute Resolution', path: '/admin/disputes', icon: '⚖️', roles: ['SUPER_ADMIN', 'SUB_ADMIN'] },
  { name: 'Content & Moderation', path: '/admin/content', icon: '📑', roles: ['SUPER_ADMIN', 'SUB_ADMIN'] },
  { name: 'Analytics', path: '/admin/analytics', icon: '📈', roles: ['SUPER_ADMIN'] },
  { name: 'Settings & Ops', path: '/admin/settings', icon: '⚙️', roles: ['SUPER_ADMIN'] },
];

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { currentRole, switchRole, pendingKycCount } = useGaonSathi();

  // Check URL query override or context
  const roleParam = searchParams.get('role');
  const isSubAdmin = roleParam === 'sub_admin' || currentRole === 'SUB_ADMIN';
  const effectiveRole = isSubAdmin ? 'SUB_ADMIN' : 'SUPER_ADMIN';

  const menuItems = ALL_MENU_ITEMS.filter(item => item.roles.includes(effectiveRole));

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8F9FA', fontFamily: 'var(--font-body)' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: '#FFFFFF', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: isSubAdmin ? '#0D9488' : 'var(--color-indigo)' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-turmeric)', fontSize: '1.4rem', lineHeight: 1.1 }}>
            Gaon Sathi<br/>
            <span style={{ fontSize: '0.9rem', color: '#FFFFFF', opacity: 0.9 }}>
              {isSubAdmin ? '🛡️ Sub-Admin Portal' : '👑 Super Admin Console'}
            </span>
          </h2>
          {isSubAdmin && (
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', color: 'white', display: 'inline-block' }}>
              Village: Motipur (Block 4)
            </div>
          )}
        </div>
        
        <nav style={{ padding: '1rem 0', flex: 1, overflowY: 'auto' }}>
          {menuItems.map(item => {
            const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
            return (
              <Link 
                key={item.path} 
                href={isSubAdmin ? `${item.path}?role=sub_admin` : item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: isActive ? (isSubAdmin ? '#0D9488' : 'var(--color-indigo)') : '#4B5563',
                  backgroundColor: isActive ? (isSubAdmin ? '#CCFBF1' : '#EFF6FF') : 'transparent',
                  borderRight: isActive ? `4px solid ${isSubAdmin ? '#0D9488' : 'var(--color-indigo)'}` : '4px solid transparent',
                  fontWeight: isActive ? 'bold' : 'normal',
                  transition: 'background-color 0.2s',
                  fontSize: '0.95rem',
                  position: 'relative'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span style={{ flex: 1 }}>{item.name}</span>
                {item.name === 'KYC & Verification' && pendingKycCount > 0 && (
                  <span style={{ backgroundColor: '#EF4444', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '1px 6px', borderRadius: '10px' }}>
                    {pendingKycCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        
        <div style={{ padding: '1.25rem', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: isSubAdmin ? '#0D9488' : 'var(--color-leaf)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              {isSubAdmin ? 'SA' : 'S'}
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-soil)' }}>
                {isSubAdmin ? 'Pravinbhai (Coordinator)' : 'Super Admin'}
              </p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#6B7280' }}>
                {isSubAdmin ? 'motipur.admin@gaonsathi.com' : 'ops@gaonsathi.com'}
              </p>
            </div>
          </div>

          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button 
              onClick={() => switchRole(isSubAdmin ? 'SUPER_ADMIN' : 'SUB_ADMIN')}
              style={{ background: 'none', border: 'none', textAlign: 'left', padding: '4px 0', fontSize: '0.8rem', color: '#6366F1', cursor: 'pointer', fontWeight: 'bold' }}
            >
              🔄 Toggle: Switch to {isSubAdmin ? 'Super Admin' : 'Sub-Admin'}
            </button>
            <Link href="/home" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-terracotta)', textDecoration: 'none', fontWeight: 'bold' }}>
              ← Back to End-User App
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
        <header style={{ backgroundColor: '#FFFFFF', padding: '0.75rem 2rem', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>
              {menuItems.find(m => m.path === pathname || (m.path !== '/admin' && pathname.startsWith(m.path)))?.name || (isSubAdmin ? 'Sub-Admin Hub' : 'Admin Console')}
            </h1>
            <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>
              {isSubAdmin ? 'Village Field Administration & KYC Approval' : 'Global Operations, Finance & User Governance'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#03543F', backgroundColor: '#DEF7EC', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
              🟢 System Active
            </span>
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

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div style={{ padding: '2rem' }}>Loading admin console...</div>}>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </React.Suspense>
  );
}
