import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ShopOnboardingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-turmeric-dark)', marginBottom: '0.5rem' }}>
          Shop Registration
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Register your shop to start receiving digital orders from local farmers.
        </p>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Shop Name</label>
            <input type="text" placeholder="e.g. Patel Agro Center" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Shop License / GSTIN Upload</label>
            <div style={{ padding: '2rem', border: '2px dashed var(--color-soil)', borderRadius: '8px', textAlign: 'center', backgroundColor: 'var(--color-wheat-deep)' }}>
              <p style={{ margin: 0 }}>Tap to upload document photo</p>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Location (Pincode)</label>
            <input type="text" placeholder="e.g. 380001" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} />
          </div>

          <Link href="/shop">
             <button type="button" className="btn btn-turmeric" style={{ width: '100%' }}>Complete Registration</button>
          </Link>
        </form>
      </div>
    </main>
  );
}
