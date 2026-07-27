'use client';

import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function EquipmentListingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
            List Equipment
          </h1>
          <Link href="/equipment/requests">
            <button className="btn btn-leaf">Requests</button>
          </Link>
        </div>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Equipment Type</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}>
              <option>Tractor</option>
              <option>Rotavator</option>
              <option>Thresher</option>
              <option>Harvester</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Model / Details</label>
            <input type="text" defaultValue="Mahindra Tractor 575 DI" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Rental Rate (₹)</label>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <input type="number" defaultValue={800} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} />
              <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}>
                <option>per hour</option>
                <option>per day</option>
                <option>per acre</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Upload Photo</label>
            <div style={{ padding: '2rem', border: '2px dashed var(--color-soil)', borderRadius: '8px', textAlign: 'center', backgroundColor: 'var(--color-wheat-deep)' }}>
              <p style={{ margin: 0 }}>Tap to add photo of equipment</p>
            </div>
          </div>

          <Link href="/equipment/calendar" onClick={() => alert("Equipment listed successfully!")}>
            <button type="button" className="btn btn-indigo" style={{ width: '100%', marginTop: '1rem' }}>Save & View Calendar</button>
          </Link>
        </form>
      </div>
    </main>
  );
}
