'use client';

import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../../globals.css';

export default function AddProductPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop/inventory" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Inventory
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Add New Product
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          List a new item on the Gaon Sathi marketplace.
        </p>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '6px solid var(--color-leaf)' }}>
          
          {/* Photo Upload Area */}
          <div>
            <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Product Photo (ફોટો)</label>
            <div style={{ border: '3px dashed var(--color-leaf)', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '12px', height: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ fontSize: '3rem' }}>📷</span>
              <span style={{ color: 'var(--color-leaf)', fontWeight: 'bold', marginTop: '0.5rem' }}>Tap to upload</span>
            </div>
          </div>

          {/* Details */}
          <div>
            <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Product Name (નામ)</label>
            <input type="text" placeholder="e.g. DAP Fertilizer 50kg" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid var(--color-wheat-deep)', fontSize: '1.1rem' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Category (વસ્તુનો પ્રકાર)</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid var(--color-wheat-deep)', fontSize: '1.1rem', backgroundColor: 'white' }}>
              <option>ખાતર (Fertilizer)</option>
              <option>બિયારણ (Seeds)</option>
              <option>દવા (Pesticides)</option>
              <option>ઓજારો (Tools)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Price (ભાવ) ₹</label>
              <input type="number" placeholder="0.00" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid var(--color-wheat-deep)', fontSize: '1.1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Stock (સ્ટોક)</label>
              <input type="number" placeholder="50" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid var(--color-wheat-deep)', fontSize: '1.1rem' }} />
            </div>
          </div>

          {/* Submit */}
          <Link href="/shop/inventory" onClick={() => alert("Product successfully published to Gaon Sathi marketplace!")}>
            <button className="btn btn-leaf" style={{ padding: '16px', fontSize: '1.2rem', width: '100%', marginTop: '1rem' }}>
              Publish to Marketplace
            </button>
          </Link>

        </div>
      </div>
    </main>
  );
}
