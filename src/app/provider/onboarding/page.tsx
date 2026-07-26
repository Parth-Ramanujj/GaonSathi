'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ProviderOnboardingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Become a Provider
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Complete your KYC to start receiving booking requests.
        </p>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Service Category</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}>
              <option>Plumber</option>
              <option>Electrician</option>
              <option>Carpenter</option>
              <option>Mason</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Aadhaar / ID Upload</label>
            <div style={{ padding: '2rem', border: '2px dashed var(--color-soil)', borderRadius: '8px', textAlign: 'center', backgroundColor: 'var(--color-wheat-deep)' }}>
              <p style={{ margin: 0 }}>Tap to upload photo</p>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Service Radius (km)</label>
            <input type="range" min="1" max="50" defaultValue="10" style={{ width: '100%' }} />
            <p style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold' }}>10 km</p>
          </div>

          <Link href="/provider/listing" onClick={() => alert("Verification submitted! Awaiting approval.")}>
             <button type="button" className="btn btn-indigo" style={{ width: '100%' }}>Submit for Verification</button>
          </Link>
        </form>
      </div>
    </main>
  );
}
