'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../globals.css';

export default function ShopOwnerHubPage() {
  const { shopProducts, bookings } = useGaonSathi();

  const shopOrders = bookings.filter(b => b.type === 'SHOP_ORDER');
  const pendingOrders = shopOrders.filter(b => b.status === 'PENDING');
  const totalStockItems = shopProducts.reduce((acc, p) => acc + p.stock, 0);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Main App
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-turmeric-dark)', margin: 0 }}>
              🏪 દુકાનદાર હબ (Shop Management Hub)
            </h1>
          </div>
          <Link href="/shop/inventory/add">
            <button className="btn btn-turmeric" style={{ padding: '10px 18px', fontSize: '1rem' }}>
              + Add Product
            </button>
          </Link>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Manage your fertilizer, seeds, and pesticide inventory and incoming farmer orders.
        </p>

        {/* Live Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="card" style={{ backgroundColor: 'var(--color-indigo)', color: 'white', borderRadius: '14px' }}>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '1rem' }}>Total Products Listed</p>
            <h2 style={{ fontSize: '2.8rem', margin: '0.25rem 0', color: '#FCD34D' }}>{shopProducts.length}</h2>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Total Units in Stock: {totalStockItems}</p>
          </div>

          <div className="card" style={{ backgroundColor: 'var(--color-leaf)', color: 'white', borderRadius: '14px' }}>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '1rem' }}>Pending Customer Orders</p>
            <h2 style={{ fontSize: '2.8rem', margin: '0.25rem 0', color: '#FEF08A' }}>{pendingOrders.length}</h2>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Total Orders Received: {shopOrders.length}</p>
          </div>
        </div>

        {/* Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <Link href="/shop/inventory">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-indigo)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>📊</span>
              <h2 style={{ margin: 0, color: 'var(--color-indigo)', textAlign: 'center', fontSize: '1.4rem' }}>Inventory & Stock</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-indigo)' }}>
                {shopProducts.length} Products
              </span>
            </div>
          </Link>

          <Link href="/shop/orders">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-leaf)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>📦</span>
              <h2 style={{ margin: 0, color: 'var(--color-leaf)', textAlign: 'center', fontSize: '1.4rem' }}>Farmer Orders</h2>
              <span style={{ 
                backgroundColor: pendingOrders.length > 0 ? '#FEE2E2' : 'var(--color-wheat-deep)', 
                color: pendingOrders.length > 0 ? '#DC2626' : 'var(--color-leaf)',
                padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem' 
              }}>
                {pendingOrders.length} New Orders
              </span>
            </div>
          </Link>
          
          <Link href="/agri/shop">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem', borderTop: `6px solid var(--color-turmeric-dark)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🛒</span>
              <h2 style={{ margin: 0, color: 'var(--color-turmeric-dark)', textAlign: 'center', fontSize: '1.4rem' }}>Public Shop View</h2>
              <span style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--color-soil)' }}>
                View as Customer
              </span>
            </div>
          </Link>
        </div>

        {/* Live Inventory Preview */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.3rem' }}>
              Active Store Products
            </h3>
            <Link href="/shop/inventory/add" style={{ color: 'var(--color-leaf)', fontWeight: 'bold', fontSize: '0.95rem' }}>
              + Add Item
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {shopProducts.map(prd => (
              <div key={prd.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'var(--color-paper)', borderRadius: '8px', border: '1px solid var(--color-wheat-deep)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{prd.icon}</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>{prd.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-soil)', opacity: 0.8 }}>
                      Category: {prd.category} • Shop: {prd.shopName}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--color-soil)', fontSize: '1.1rem' }}>₹{prd.price}</div>
                  <span style={{ fontSize: '0.8rem', color: prd.stock < 15 ? 'var(--color-terracotta)' : 'var(--color-leaf)', fontWeight: 'bold' }}>
                    Stock: {prd.stock} units
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
