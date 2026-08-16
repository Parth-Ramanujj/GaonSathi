'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGaonSathi, UserRole } from '@/lib/store/GaonSathiContext';

interface RoleOption {
  role: UserRole;
  labelGujarati: string;
  labelEnglish: string;
  icon: string;
  path: string;
  color: string;
  badge?: number;
}

export function RoleSwitcherBar() {
  const { currentRole, switchRole, pendingRequestsCount, pendingKycCount, cart } = useGaonSathi();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(true);

  const ROLES: RoleOption[] = [
    {
      role: 'USER',
      labelGujarati: 'નાગરિક / ખેડૂત',
      labelEnglish: 'End User',
      icon: '👤',
      path: '/home',
      color: '#1F3A5F',
      badge: cart.length > 0 ? cart.length : undefined
    },
    {
      role: 'PROVIDER',
      labelGujarati: 'કારીગર',
      labelEnglish: '1. Provider',
      icon: '🔧',
      path: '/provider',
      color: '#C1502E',
      badge: pendingRequestsCount > 0 ? pendingRequestsCount : undefined
    },
    {
      role: 'EQUIPMENT',
      labelGujarati: 'સાધન માલિક',
      labelEnglish: '2. Equipment',
      icon: '🚜',
      path: '/equipment',
      color: '#4C7A3D',
    },
    {
      role: 'SHOP',
      labelGujarati: 'દુકાનદાર',
      labelEnglish: '3. Shop',
      icon: '🏪',
      path: '/shop',
      color: '#C97F1F',
    },
    {
      role: 'LIVESTOCK',
      labelGujarati: 'પશુપાલન / ડેરી',
      labelEnglish: '4. Livestock',
      icon: '🐄',
      path: '/livestock',
      color: '#5C3826',
    },
    {
      role: 'SUB_ADMIN',
      labelGujarati: 'ગામ કોર્ડિનેટર',
      labelEnglish: 'Sub-Admin',
      icon: '🛡️',
      path: '/admin?role=sub_admin',
      color: '#0D9488',
      badge: pendingKycCount > 0 ? pendingKycCount : undefined
    },
    {
      role: 'SUPER_ADMIN',
      labelGujarati: 'મુખ્ય એડમિન',
      labelEnglish: 'Super Admin',
      icon: '👑',
      path: '/admin?role=super_admin',
      color: '#6366F1',
    }
  ];

  const handleRoleSelect = (roleOption: RoleOption) => {
    switchRole(roleOption.role);
    router.push(roleOption.path);
  };

  const activeRoleConfig = ROLES.find(r => r.role === currentRole) || ROLES[0];

  return (
    <aside 
      aria-label="Role Switcher"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        backgroundColor: '#1E293B',
        color: '#F8FAFC',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        borderBottom: '2px solid rgba(255,255,255,0.1)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        
        {/* Left: Active Persona Indicator & Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.2rem' }}>⚡</span>
            <span style={{ fontWeight: '700', color: '#FCD34D', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
              ROLE SWITCHER:
            </span>
          </div>

          <div style={{ 
            backgroundColor: activeRoleConfig.color, 
            padding: '3px 10px', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
          }}>
            <span>{activeRoleConfig.icon}</span>
            <span>{activeRoleConfig.labelEnglish}</span>
            <span style={{ opacity: 0.85, fontSize: '0.75rem' }}>({activeRoleConfig.labelGujarati})</span>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#CBD5E1',
              padding: '3px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}
          >
            {isExpanded ? '▲ Hide Bar' : '▼ Switch Role'}
          </button>
        </div>

        {/* Right: Quick Role Buttons */}
        {isExpanded && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', padding: '2px 0' }}>
            {ROLES.map((r) => {
              const isCurrent = r.role === currentRole;
              return (
                <button
                  key={r.role}
                  onClick={() => handleRoleSelect(r)}
                  style={{
                    backgroundColor: isCurrent ? r.color : 'rgba(255,255,255,0.08)',
                    color: isCurrent ? '#FFFFFF' : '#E2E8F0',
                    border: isCurrent ? '2px solid #FFFFFF' : '1px solid rgba(255,255,255,0.15)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    fontWeight: isCurrent ? '700' : '500',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => {
                    if (!isCurrent) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseOut={(e) => {
                    if (!isCurrent) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{r.icon}</span>
                  <span>{r.labelEnglish}</span>
                  {r.badge !== undefined && r.badge > 0 && (
                    <span style={{
                      backgroundColor: '#EF4444',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      padding: '1px 5px',
                      borderRadius: '10px',
                      marginLeft: '2px'
                    }}>
                      {r.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </aside>
  );
}
