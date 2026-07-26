import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ProviderListingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
            My Listing
          </h1>
          <Link href="/provider/requests">
            <button className="btn btn-turmeric">Requests</button>
          </Link>
        </div>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Base Price (₹)</label>
            <input type="number" defaultValue={500} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Description</label>
            <textarea rows={4} defaultValue="Expert Plumber - Pipe Leakage Repair. Over 10 years of experience serving the local community." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}></textarea>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Availability</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" className="btn btn-leaf" style={{ flex: 1 }}>Available Now</button>
              <button type="button" className="btn" style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-terracotta)' }}>Busy</button>
            </div>
          </div>

          <button type="button" className="btn btn-indigo" style={{ width: '100%', marginTop: '1rem' }}>Save Changes</button>
        </form>
      </div>
    </main>
  );
}
