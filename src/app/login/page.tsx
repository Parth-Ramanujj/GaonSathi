'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../globals.css';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      // In a real app, we'd call the API here
      router.push(`/login/verify?phone=${phone}`);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem', textAlign: 'center' }}>
            Login
          </h1>
          <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', textAlign: 'center' }}>
            Enter your mobile number to continue
          </p>

          <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="9876543210"
                  maxLength={10}
                  style={{ 
                    flex: 1, 
                    padding: '12px', 
                    border: '1px solid var(--color-soil)', 
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-turmeric" style={{ width: '100%' }}>
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
