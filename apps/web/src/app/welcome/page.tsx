import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function WelcomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--color-indigo)', marginBottom: '0.5rem', textAlign: 'center' }}>
          Gaon Sathi
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-soil)', marginBottom: '3rem', textAlign: 'center' }}>
          સ્વાગત છે • स्वागत है • Welcome
        </p>

        <div className="card" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Select Language / ભાષા પસંદ કરો</h2>
          
          <Link href="/home" className="btn btn-turmeric" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>
            1. ગુજરાતી (Gujarati)
          </Link>
          
          <Link href="/home" className="btn btn-leaf" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>
            2. हिंदी (Hindi)
          </Link>
          
          <Link href="/home" className="btn btn-indigo" style={{ width: '100%', textAlign: 'center', textDecoration: 'none', backgroundColor: 'var(--color-indigo)', color: 'white' }}>
            3. English
          </Link>

          <Link href="/login" style={{ textAlign: 'center', color: 'var(--color-soil)', fontSize: '0.9rem', marginTop: '0.5rem', textDecoration: 'underline' }}>
            Go to Login / OTP Verification →
          </Link>
        </div>
      </div>
      
      <BuntingDivider flags={30} />
    </main>
  );
}
