'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';

export default function OrderFulfillmentPage() {
  const params = useParams();
  const orderId = (params?.id as string) || 'ORD-9823';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop/orders" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Orders
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Order {orderId}
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Customer: Ramesh Patel • 📍 Motipur (2.5km)
        </p>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'white' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--color-indigo)', margin: '0 0 0.5rem 0' }}>Items Ordered</h2>
            <div style={{ padding: '12px', backgroundColor: 'var(--color-wheat)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Urea 45kg Bag (x2)</span>
                <span>₹532</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => alert("Order marked ready for pickup!")} className="btn btn-leaf" style={{ flex: 1 }}>Mark Ready</button>
            <button onClick={() => alert("Order fulfilled!")} className="btn btn-indigo" style={{ flex: 1 }}>Handed Over</button>
          </div>
        </div>
      </div>
    </main>
  );
}
