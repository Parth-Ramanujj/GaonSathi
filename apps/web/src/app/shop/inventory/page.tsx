'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ShopInventoryPage() {
  const { shopProducts, updateProductStock } = useGaonSathi();

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Shop Hub
        </Link>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
              📦 Inventory Management
            </h1>
            <p style={{ color: 'var(--color-soil)', margin: '0.25rem 0 0 0' }}>Update quantities & pricing in real-time</p>
          </div>
          <Link href="/shop/inventory/add">
            <button className="btn btn-leaf">+ Add Product</button>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {shopProducts.map(item => (
            <div 
              key={item.id} 
              className="card" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                borderLeft: item.stock < 15 ? '6px solid var(--color-terracotta)' : '6px solid var(--color-leaf)',
                backgroundColor: 'white'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                <div>
                  <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.25rem 0', color: 'var(--color-indigo)' }}>{item.name}</h2>
                  <p style={{ margin: 0, color: 'var(--color-soil)', fontWeight: 'bold' }}>₹{item.price}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>Category: {item.category} • {item.shopName}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: 'var(--color-soil)' }}>Stock Quantity</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button 
                      onClick={() => updateProductStock(item.id, Math.max(0, item.stock - 5))}
                      style={{ padding: '2px 8px', borderRadius: '4px', border: '1px solid #CBD5E1', backgroundColor: '#F1F5F9', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      -5
                    </button>
                    <span style={{ margin: '0 4px', fontWeight: 'bold', fontSize: '1.2rem', color: item.stock < 15 ? 'var(--color-terracotta)' : 'var(--color-leaf)' }}>
                      {item.stock}
                    </span>
                    <button 
                      onClick={() => updateProductStock(item.id, item.stock + 10)}
                      style={{ padding: '2px 8px', borderRadius: '4px', border: '1px solid #CBD5E1', backgroundColor: '#F1F5F9', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      +10
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
