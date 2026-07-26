'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function RoleSelectionPage() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const router = useRouter();

  const toggleRole = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleContinue = () => {
    if (selectedRoles.length > 0) {
      router.push('/onboarding/profile');
    }
  };

  const roles = [
    { id: 'FARMER', label: '🌾 ખેડૂત (Farmer)', desc: 'Access Mandi prices, weather, and AI advisory', color: 'var(--color-leaf)' },
    { id: 'SERVICE_PROVIDER', label: '🔧 કારીગર (Service Provider)', desc: 'Offer plumbing, carpentry, or electrical services', color: 'var(--color-indigo)' },
    { id: 'SHOP_OWNER', label: '🏪 દુકાનદાર (Shop Owner)', desc: 'Sell fertilizers, seeds, and local goods', color: 'var(--color-turmeric)' },
    { id: 'EQUIPMENT_OWNER', label: '🚜 સાધન માલિક (Equipment Owner)', desc: 'Rent out your tractor, thresher, etc.', color: 'var(--color-terracotta)' }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem', textAlign: 'center' }}>
          Who are you?
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', textAlign: 'center', fontSize: '1.2rem' }}>
          Select all the roles that apply to you. You can change this later.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
          {roles.map((role) => {
            const isSelected = selectedRoles.includes(role.id);
            return (
              <div 
                key={role.id}
                onClick={() => toggleRole(role.id)}
                className="card"
                style={{ 
                  cursor: 'pointer',
                  borderTop: `6px solid ${role.color}`,
                  border: isSelected ? `2px solid ${role.color}` : '2px solid transparent',
                  backgroundColor: isSelected ? 'var(--color-wheat-deep)' : 'var(--color-paper)',
                  transition: 'all 0.2s ease',
                  borderTopWidth: '6px' // Keep top border thick
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: role.color }}>{role.label}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-soil)' }}>{role.desc}</p>
                  </div>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    border: `2px solid ${isSelected ? role.color : '#ccc'}`,
                    backgroundColor: isSelected ? role.color : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {isSelected && <span style={{ color: 'white', fontSize: '14px' }}>✓</span>}
                  </div>
                </div>
              </div>
            );
          })}
          
          <button 
            onClick={handleContinue}
            disabled={selectedRoles.length === 0}
            className="btn btn-indigo" 
            style={{ 
              marginTop: '1rem', 
              backgroundColor: selectedRoles.length > 0 ? 'var(--color-indigo)' : '#ccc',
              color: 'white',
              cursor: selectedRoles.length > 0 ? 'pointer' : 'not-allowed'
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
