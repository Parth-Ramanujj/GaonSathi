'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ShopInventoryPage() {
  const inventory = [
    { id: '1', name: 'Urea Fertilizer (45kg)', stock: 50, price: 266 },
    { id: '2', name: 'DAP Fertilizer (50kg)', stock: 5, price: 1350 },
    { id: '3', name: 'BT Cotton Seeds', stock: 120, price: 850 },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Shop Hub
        </Link>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
            Inventory
          </h1>
          <Link href="/shop/inventory/add">
            <button className="btn btn-leaf">+ Add Item</button>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {inventory.map(item => (
            <div key={item.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: item.stock < 10 ? '6px solid var(--color-terracotta)' : '6px solid var(--color-leaf)' }}>
              <div>
                <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--color-indigo)' }}>{item.name}</h2>
                <p style={{ margin: 0, color: 'var(--color-soil)', fontWeight: 'bold' }}>₹{item.price}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: 'var(--color-soil)' }}>Stock</p>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: item.stock < 10 ? 'var(--color-terracotta)' : 'var(--color-soil)' }}>{item.stock}</p>
                </div>
                <button onClick={() => alert("Opening edit form...")} className="btn" style={{ padding: '8px 16px', backgroundColor: 'var(--color-wheat-deep)', border: 'none' }}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
