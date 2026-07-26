'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ShopLeadsPage() {
  const rfqs = [
    { 
      id: 'RFQ-102', 
      farmerName: 'Ramesh Patel',
      village: 'Mota Gaon',
      distance: '2.5km',
      item: 'DAP Fertilizer (50kg)', 
      quantity: 10, 
      timeLeft: '4 hours',
      currentLowestBid: 1250,
      myBid: null
    },
    { 
      id: 'RFQ-105', 
      farmerName: 'Suresh Bhai',
      village: 'Nana Mava',
      distance: '4km',
      item: 'Urea (50kg)', 
      quantity: 50, 
      timeLeft: '1 day',
      currentLowestBid: 280,
      myBid: 275
    }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/shop" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Dashboard
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>🎯</span> Local Leads (RFQs)
            </h1>
          </div>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Farmers nearby are looking for these products. Submit your best price to win the order!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {rfqs.map(rfq => (
            <div key={rfq.id} className="card" style={{ borderLeft: rfq.myBid ? '6px solid var(--color-leaf)' : '6px solid var(--color-turmeric-dark)', padding: '1.5rem' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', margin: '0 0 0.5rem 0' }}>{rfq.item}</h2>
                  <p style={{ margin: 0, color: 'var(--color-soil)', fontWeight: 'bold', fontSize: '1.2rem' }}>Quantity: {rfq.quantity}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ backgroundColor: 'var(--color-wheat-deep)', color: 'var(--color-terracotta)', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    ⏳ Ends in {rfq.timeLeft}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', borderBottom: '2px dashed var(--color-wheat-deep)', paddingBottom: '1rem' }}>
                <div>
                  <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.9rem' }}>Farmer</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 'bold', color: 'var(--color-indigo)' }}>{rfq.farmerName}</p>
                </div>
                <div>
                  <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.9rem' }}>Location</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontWeight: 'bold', color: 'var(--color-indigo)' }}>{rfq.village} ({rfq.distance})</p>
                </div>
              </div>

              {rfq.myBid ? (
                <div style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, color: 'var(--color-leaf)', fontWeight: 'bold' }}>✅ You submitted a quote</p>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)' }}>Your Price: ₹{rfq.myBid} / unit</p>
                  </div>
                  <button className="btn" style={{ padding: '6px 16px', backgroundColor: 'white', color: 'var(--color-soil)', border: '2px solid var(--color-soil)' }}>Edit Bid</button>
                </div>
              ) : (
                <div style={{ backgroundColor: 'rgba(230, 161, 8, 0.1)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, color: 'var(--color-soil)' }}>Current Lowest Bid: <strong style={{ color: 'var(--color-terracotta)' }}>₹{rfq.currentLowestBid}</strong></p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹</span>
                    <input type="number" placeholder="Your price" style={{ padding: '8px', borderRadius: '4px', border: '2px solid var(--color-turmeric-dark)', width: '100px' }} />
                    <button onClick={() => alert("Quote submitted! The farmer will be notified.")} className="btn btn-turmeric" style={{ padding: '8px 16px' }}>Submit Quote</button>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
