'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function LoginPage() {
  const [phone, setPhone] = useState('9876543210');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      router.push(`/login/verify?phone=${phone}`);
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  const handleDemoLogin = () => {
    router.push('/home');
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem', textAlign: 'center' }}>
            Login / સાઇન ઇન
          </h1>
          <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Enter your mobile number to continue
          </p>

          <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ fontWeight: '600' }}>Mobile Number</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ 
                  padding: '12px', 
                  backgroundColor: 'var(--color-wheat-deep)', 
                  border: '1px solid var(--color-soil)',
                  borderRadius: '8px',
                  fontWeight: 'bold'
                }}>
                  +91
                </div>
                <input 
                  id="phone"
                  type="tel" 
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, ''));
                    setError('');
                  }}
                  placeholder="9876543210"
                  maxLength={10}
                  style={{ 
                    flex: 1, 
                    padding: '12px', 
                    border: error ? '2px solid #EF4444' : '1px solid var(--color-soil)', 
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                  required
                />
              </div>
              {error && <span style={{ color: '#EF4444', fontSize: '0.85rem' }}>{error}</span>}
            </div>
            
            <button type="submit" className="btn btn-turmeric" style={{ width: '100%' }}>
              Send OTP →
            </button>

            <button 
              type="button" 
              onClick={handleDemoLogin}
              className="btn btn-leaf" 
              style={{ width: '100%', backgroundColor: 'var(--color-leaf)' }}
            >
              🚀 Quick Demo Access (Skip OTP)
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/welcome" style={{ color: 'var(--color-soil)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              ← Back to Language Selection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
