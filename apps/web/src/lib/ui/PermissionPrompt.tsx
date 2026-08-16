'use client';

import React, { useEffect, useState } from 'react';

export function PermissionPrompt() {
  const [show, setShow] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Only show once if not previously granted
    const isDismissed = localStorage.getItem('gaon_sathi_location_prompt');
    if (!isDismissed) {
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleGrant = () => {
    localStorage.setItem('gaon_sathi_location_prompt', 'true');
    setPermissionGranted(true);
    setTimeout(() => setShow(false), 800);
  };

  const handleDismiss = () => {
    localStorage.setItem('gaon_sathi_location_prompt', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', zIndex: 9998, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', animation: 'fadeIn 0.2s ease' }}>
      <div style={{ backgroundColor: 'var(--color-paper)', width: '100%', maxWidth: '540px', padding: '1.75rem', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', borderTop: '6px solid var(--color-leaf)', boxShadow: '0 -10px 25px rgba(0,0,0,0.15)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2.5rem' }}>📍</span>
          <div>
            <h2 style={{ color: 'var(--color-indigo)', margin: 0, fontSize: '1.3rem' }}>
              ગામનું લોકેશન ચકાસો (Confirm Village Location)
            </h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-leaf)', fontWeight: 'bold' }}>
              Motipur (મોતીપુર) • Pincode: 382110
            </span>
          </div>
        </div>

        <p style={{ color: 'var(--color-soil)', fontSize: '0.95rem', margin: '0 0 1.25rem 0' }}>
          નજીકના માર્કેટ યાર્ડના રોજના ભાવ, હવામાન આગાહી અને ગામના કારીગરો બતાવવા માટે લોકેશન સેટ કરો.
        </p>

        {permissionGranted ? (
          <div style={{ padding: '10px', backgroundColor: '#DEF7EC', color: '#03543F', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
            ✓ લોકેશન સેટ થઈ ગયું!
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handleGrant} className="btn btn-leaf" style={{ flex: 1, padding: '12px' }}>
              ✓ ગામ સેટ કરો (Confirm)
            </button>
            <button onClick={handleDismiss} className="btn" style={{ flex: 1, backgroundColor: 'white', border: '1px solid #CBD5E1', padding: '12px' }}>
              પછીથી (Later)
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
