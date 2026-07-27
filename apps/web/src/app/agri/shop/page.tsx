'use client';

import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function ShopBrowsePage() {
  const products = [
    { id: 'p1', name: 'Urea Fertilizer (45kg)', shop: 'Patel Agro Center', price: 266, stock: 'In Stock' },
    { id: 'p2', name: 'DAP Fertilizer (50kg)', shop: 'Kisan Seva Kendra', price: 1350, stock: 'Low Stock' },
    { id: 'p3', name: 'BT Cotton Seeds', shop: 'Patel Agro Center', price: 850, stock: 'In Stock' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Agri-Tech
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
              Local Shops
            </h1>
          </div>
          <button className="btn" style={{ backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)' }}>
            🛒 Cart (0)
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <button className="btn btn-turmeric" style={{ flexShrink: 0 }}>All</button>
          <Link href="/agri/shop/group-buy">
            <button className="btn" style={{ flexShrink: 0, backgroundColor: 'white', color: 'var(--color-indigo)', border: '2px dashed var(--color-indigo)' }}>🤝 Group Deals</button>
          </Link>
          <Link href="/agri/rfq">
            <button className="btn" style={{ flexShrink: 0, backgroundColor: 'var(--color-indigo)', color: 'white' }}>📝 Post Requirement</button>
          </Link>
          <button className="btn" style={{ flexShrink: 0, backgroundColor: 'white', color: 'var(--color-soil)' }}>Fertilizers</button>
          <button className="btn" style={{ flexShrink: 0, backgroundColor: 'white', color: 'var(--color-soil)' }}>Seeds</button>
          <button className="btn" style={{ flexShrink: 0, backgroundColor: 'white', color: 'var(--color-soil)' }}>Pesticides</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {products.map((product, index) => {
            const isSponsored = index === 0;
            return (
              <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', borderTop: isSponsored ? '6px solid gold' : '6px solid var(--color-turmeric-dark)', padding: 0, overflow: 'hidden', position: 'relative' }}>
                {isSponsored && (
                  <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'gold', color: 'var(--color-indigo)', padding: '4px 12px', fontWeight: 'bold', fontSize: '0.9rem', borderBottomRightRadius: '8px', zIndex: 10 }}>
                    🌟 પ્રીમિયમ (Sponsored)
                  </div>
                )}
                
                <div style={{ height: '200px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>
                  🌱
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{product.name}</h2>
                      <p style={{ color: 'var(--color-soil)', fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        Sold by: {product.shop} 
                        {isSponsored && <span style={{ color: 'var(--color-leaf)' }} title="Gaon Sathi Verified">🏅</span>}
                      </p>
                    </div>
                    <p style={{ color: 'var(--color-soil)', fontWeight: 'bold', margin: 0, fontSize: '1.5rem' }}>₹{product.price}</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem' }}>
                    <button 
                      onClick={() => alert(`Calling ${product.shop} securely... (Virtual Number: +91-XXXXX-XXXXX)`)}
                      className="btn" 
                      style={{ padding: '8px 12px', backgroundColor: 'var(--color-wheat-deep)', color: 'var(--color-indigo)', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                      📞 Call Securely
                    </button>
                    <button className="btn btn-turmeric" style={{ padding: '8px 24px' }}>Add 🛒</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
