import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function FarmerRFQPage() {
  const activeRequests = [
    { 
      id: 'RFQ-102', 
      item: 'DAP Fertilizer (50kg)', 
      quantity: 10, 
      status: 'Active', 
      quotes: [
        { shopName: 'Kisan Kendra', price: 1250, distance: '2.5km', verified: true },
        { shopName: 'Patel Agro', price: 1200, distance: '5km', verified: false },
      ]
    },
    { 
      id: 'RFQ-101', 
      item: 'PVC Pipes 4"', 
      quantity: 50, 
      status: 'Closed', 
      quotes: [
        { shopName: 'Jayhind Hardware', price: 450, distance: '1km', verified: true },
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/agri/shop" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Shop
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>📝</span> My Requirements (RFQ)
            </h1>
          </div>
          <button className="btn btn-indigo" style={{ padding: '12px 24px', fontSize: '1.2rem' }}>+ Post Requirement</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {activeRequests.map(req => (
            <div key={req.id} className="card" style={{ borderLeft: req.status === 'Active' ? '6px solid var(--color-leaf)' : '6px solid var(--color-soil)', padding: '1.5rem' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', margin: '0 0 0.25rem 0' }}>{req.item}</h2>
                  <p style={{ margin: 0, color: 'var(--color-soil)', fontWeight: 'bold' }}>Quantity: {req.quantity}</p>
                </div>
                <span style={{ backgroundColor: req.status === 'Active' ? 'var(--color-wheat-deep)' : 'transparent', color: req.status === 'Active' ? 'var(--color-leaf)' : 'var(--color-soil)', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold', border: req.status === 'Active' ? 'none' : '1px solid var(--color-soil)' }}>
                  {req.status === 'Active' ? '⏳ 2 Quotes Received' : 'Closed'}
                </span>
              </div>

              {req.status === 'Active' && (
                <div style={{ backgroundColor: 'var(--color-wheat-deep)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--color-soil)', fontSize: '1rem', textTransform: 'uppercase' }}>Bids from Local Shops</h3>
                  
                  {req.quotes.map((quote, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', borderLeft: quote.verified ? '4px solid var(--color-leaf)' : '4px solid transparent' }}>
                      <div>
                        <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          {quote.shopName} {quote.verified && <span title="Verified Shop">🏅</span>}
                        </h4>
                        <span style={{ color: 'var(--color-soil)', fontSize: '0.9rem' }}>📍 {quote.distance} away</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-leaf)', margin: '0 0 0.5rem 0' }}>₹{quote.price} <span style={{ fontSize: '0.9rem', color: 'var(--color-soil)', fontWeight: 'normal' }}>/unit</span></p>
                        <button className="btn" style={{ padding: '6px 16px', backgroundColor: 'var(--color-indigo)', color: 'white' }}>Accept & Pay</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
