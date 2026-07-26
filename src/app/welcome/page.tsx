import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../globals.css';

export default function WelcomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--color-indigo)', marginBottom: '0.5rem', textAlign: 'center' }}>
          Gaon Sathi
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-soil)', marginBottom: '3rem', textAlign: 'center' }}>
          Welcome • स्वागत છે • स्वागत है
        </p>

        <div className="card" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Select Language</h2>
          
          <Link href="/login" style={{ width: '100%' }}>
            <button className="btn btn-turmeric" style={{ width: '100%' }}>ગુજરાતી</button>
          </Link>
          
          <Link href="/login" style={{ width: '100%' }}>
            <button className="btn btn-leaf" style={{ width: '100%' }}>हिंदी</button>
          </Link>
          
          <Link href="/login" style={{ width: '100%' }}>
            <button className="btn btn-indigo" style={{ width: '100%', backgroundColor: 'var(--color-indigo)', color: 'white' }}>English</button>
          </Link>
        </div>
      </div>
      
      <BuntingDivider flags={30} />
    </main>
  );
}
