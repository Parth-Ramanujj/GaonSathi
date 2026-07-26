'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ProfileSetupPage() {
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const router = useRouter();

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && pincode) {
      router.push('/home');
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--color-leaf)', marginBottom: '0.5rem', textAlign: 'center' }}>
            Profile Setup
          </h1>
          <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', textAlign: 'center' }}>
            Tell us a bit about yourself
          </p>

          <form onSubmit={handleComplete} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: '600' }}>Full Name</label>
              <input 
                id="name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ramesh Patel"
                style={{ 
                  padding: '12px', 
                  border: '1px solid var(--color-soil)', 
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-body)'
                }}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="pincode" style={{ fontWeight: '600' }}>Pincode</label>
              <input 
                id="pincode"
                type="text" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                placeholder="380001"
                maxLength={6}
                style={{ 
                  padding: '12px', 
                  border: '1px solid var(--color-soil)', 
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-body)'
                }}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-leaf" style={{ width: '100%', marginTop: '1rem' }}>
              Complete Setup
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
