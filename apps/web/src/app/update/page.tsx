import { BuntingDivider } from '@/lib/ui';
import Link from 'next/link';
import '../globals.css';

export default function AppUpdatePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        
        <span style={{ fontSize: '6rem', marginBottom: '1rem' }}>🔄</span>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Update Required
        </h1>
        
        <p style={{ color: 'var(--color-soil)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          A new version of Gaon Sathi is available. Please update the app to continue using the service. This update includes important security fixes and new farming tools.
        </p>

        <div className="card" style={{ width: '100%', padding: '2rem', backgroundColor: 'var(--color-wheat-deep)', border: '2px solid var(--color-leaf)', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-leaf)', margin: '0 0 0.5rem 0' }}>Version 2.4.0</h2>
          <p style={{ margin: 0, color: 'var(--color-soil)' }}>Size: 12 MB</p>
        </div>

        <Link href="/home" style={{ width: '100%' }}>
          <button className="btn btn-leaf" style={{ width: '100%', padding: '16px', fontSize: '1.5rem' }}>
            Update Now (Play Store)
          </button>
        </Link>
        
      </div>
    </main>
  );
}
