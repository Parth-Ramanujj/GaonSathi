'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

function VerifyForm() {
  const [otp, setOtp] = useState('123456');
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone') || '9876543210';

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      router.push(`/onboarding/role`);
    }
  };

  const handleQuickEnter = () => {
    router.push('/home');
  };

  return (
    <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
      <h1 style={{ fontSize: '2rem', color: 'var(--color-indigo)', marginBottom: '0.5rem', textAlign: 'center' }}>
        Verify OTP / ઓટીપી ચકાસણી
      </h1>
      <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem', textAlign: 'center' }}>
        Enter the 6-digit code sent to +91 {phone}
      </p>

      <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="otp" style={{ fontWeight: '600' }}>One Time Password</label>
          <input 
            id="otp"
            type="text" 
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            placeholder="123456"
            maxLength={6}
            style={{ 
              padding: '12px', 
              border: '1px solid var(--color-soil)', 
              borderRadius: '8px',
              fontSize: '1.5rem',
              letterSpacing: '0.5rem',
              textAlign: 'center',
              fontFamily: 'var(--font-heading)'
            }}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-leaf" style={{ width: '100%' }}>
          Verify & Continue →
        </button>

        <button 
          type="button" 
          onClick={handleQuickEnter}
          className="btn btn-turmeric" 
          style={{ width: '100%' }}
        >
          🚀 Go directly to Home
        </button>
      </form>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <VerifyForm />
        </Suspense>
      </div>
    </main>
  );
}
