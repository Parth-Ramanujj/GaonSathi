'use client';

import React, { useEffect, useState } from 'react';

export function PermissionPrompt() {
  const [show, setShow] = useState(false);
  const [permissionType, setPermissionType] = useState<'location' | 'notifications'>('location');

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'var(--color-wheat)', width: '100%', maxWidth: '600px', padding: '2rem', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
        <h2 style={{ color: 'var(--color-indigo)', marginBottom: '1rem' }}>{permissionType === 'location' ? 'Enable Location' : 'Enable Notifications'}</h2>
        <p style={{ color: 'var(--color-soil)', marginBottom: '1rem' }}>This is a demo permission prompt for the app experience.</p>
        <button onClick={() => setShow(false)} className="btn btn-leaf">Continue</button>
      </div>
    </div>
  );
}
