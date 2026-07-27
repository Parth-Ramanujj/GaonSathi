'use client';

import React, { useEffect, useState } from 'react';

export function OfflineBanner() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(window.navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div style={{ backgroundColor: 'var(--color-terracotta)', color: 'white', textAlign: 'center', padding: '8px', fontWeight: 'bold' }}>
      ⚠ No Internet Connection. Operating in offline mode.
    </div>
  );
}
