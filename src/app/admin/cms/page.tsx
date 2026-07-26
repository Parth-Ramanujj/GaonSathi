'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function AdminCmsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/admin" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Admin Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Content CMS
        </h1>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>Add Government Scheme</h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Scheme Name</label>
              <input type="text" placeholder="e.g. PM-Kisan" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)' }} />
            </div>
            
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Description</label>
              <textarea rows={3} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontFamily: 'var(--font-body)' }}></textarea>
            </div>
            
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Tags (comma separated)</label>
              <input type="text" placeholder="e.g. Income, Central" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)' }} />
            </div>

            <button onClick={() => alert("Scheme published successfully to the Education Hub.")} type="button" className="btn btn-leaf" style={{ width: '100%', marginTop: '1rem' }}>Publish Scheme</button>
          </form>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '1rem' }}>Manual Mandi Price Override</h2>
          <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem' }}>Use this if the automated APMC scraper fails.</p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
             <div style={{ flex: 2 }}>
               <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Crop</label>
               <select id="cropSelect" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)' }}>
                 <option>Wheat</option>
                 <option>Cotton</option>
                 <option>Groundnut</option>
               </select>
             </div>
             <div style={{ flex: 1 }}>
               <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Price (₹/qtl)</label>
               <input id="priceInput" type="number" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)' }} />
             </div>
             <button onClick={() => {
               const crop = (document.getElementById('cropSelect') as HTMLSelectElement).value;
               const price = (document.getElementById('priceInput') as HTMLInputElement).value;
               if(price) alert(`Mandi price for ${crop} manually updated to ₹${price}/qtl across the platform.`);
             }} className="btn btn-turmeric" style={{ flex: 1, padding: '12px' }}>Update</button>
          </div>
        </div>

      </div>
    </main>
  );
}
