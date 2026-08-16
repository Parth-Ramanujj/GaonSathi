'use client';

import React from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ShopOrdersPage() {
  const { bookings, updateBookingStatus } = useGaonSathi();
  const shopOrders = bookings.filter(b => b.type === 'SHOP_ORDER');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/shop" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Shop Hub
            </Link>
            <h1 style={{ fontSize: '2.3rem', color: 'var(--color-indigo)', margin: 0 }}>
              📦 Incoming Farmer Orders
            </h1>
          </div>
          <Link href="/shop/inventory">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>View Inventory</button>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {shopOrders.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🛍️</span>
              <h2 style={{ color: 'var(--color-soil)' }}>No customer orders yet.</h2>
              <p style={{ color: 'var(--color-soil)', opacity: 0.8, marginTop: '0.5rem' }}>
                When farmers buy seeds or fertilizer from `/agri/shop`, their orders will appear here.
              </p>
            </div>
          ) : (
            shopOrders.map(order => (
              <div 
                key={order.id} 
                className="card" 
                style={{ 
                  borderLeft: order.status === 'PENDING' ? '6px solid var(--color-turmeric-dark)' : order.status === 'ACCEPTED' ? '6px solid var(--color-indigo)' : '6px solid var(--color-leaf)',
                  backgroundColor: 'white'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>{order.id}</span>
                    <span style={{ marginLeft: '8px', fontSize: '0.85rem', color: '#6B7280' }}>🕒 {order.date}</span>
                  </div>
                  <span style={{ 
                    backgroundColor: order.status === 'PENDING' ? '#FEF08A' : order.status === 'ACCEPTED' ? '#E0E7FF' : '#DEF7EC', 
                    color: order.status === 'PENDING' ? '#723B13' : order.status === 'ACCEPTED' ? '#3730A3' : '#03543F', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold' 
                  }}>
                    {order.status === 'PENDING' ? '⚡ New Order' : order.status === 'ACCEPTED' ? '📦 Packing / Ready' : '✓ Completed / Delivered'}
                  </span>
                </div>
                
                <h2 style={{ fontSize: '1.4rem', margin: '0 0 0.25rem 0', color: 'var(--color-indigo)' }}>{order.customerName}</h2>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)', fontSize: '0.9rem' }}>📞 {order.customerPhone}</p>
                
                <div style={{ padding: '10px 14px', backgroundColor: 'var(--color-wheat)', borderRadius: '8px', marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-indigo)' }}>Items: {order.title}</p>
                  {order.notes && <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--color-soil)' }}>Notes: {order.notes}</p>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--color-leaf)' }}>Total: ₹{order.amount}</p>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {order.status === 'PENDING' && (
                      <button 
                        onClick={() => updateBookingStatus(order.id, 'ACCEPTED')}
                        className="btn btn-turmeric" 
                        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                      >
                        Accept & Pack Order
                      </button>
                    )}
                    {order.status === 'ACCEPTED' && (
                      <button 
                        onClick={() => updateBookingStatus(order.id, 'COMPLETED')}
                        className="btn btn-leaf" 
                        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                      >
                        ✓ Mark as Handed Over / Delivered
                      </button>
                    )}
                    <button 
                      onClick={() => alert(`Calling customer ${order.customerName} at ${order.customerPhone}...`)}
                      className="btn" 
                      style={{ padding: '8px 12px', fontSize: '0.9rem', backgroundColor: '#F1F5F9' }}
                    >
                      📞 Call Customer
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
