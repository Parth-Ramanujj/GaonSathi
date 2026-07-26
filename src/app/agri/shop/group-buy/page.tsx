import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../../globals.css';

export default function GroupBuyPage() {
  const deals = [
    { id: 'gb1', name: 'DAP Fertilizer (50kg)', current: 30, target: 50, discount: '15%', price: 1150, oldPrice: 1350 },
    { id: 'gb2', name: 'BT Cotton Seeds', current: 12, target: 20, discount: '10%', price: 765, oldPrice: 850 },
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
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
              🤝 Group Deals
            </h1>
          </div>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Join forces with other farmers in your village. If the group hits the target order size, everyone gets a massive wholesale discount!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {deals.map(deal => {
            const percent = Math.round((deal.current / deal.target) * 100);
            return (
              <div key={deal.id} className="card" style={{ display: 'flex', flexDirection: 'column', borderTop: '6px solid var(--color-indigo)', padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '150px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', position: 'relative' }}>
                  🌱
                  <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'var(--color-terracotta)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
                    {deal.discount} OFF
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{deal.name}</h2>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>₹{deal.price}</span>
                    <span style={{ textDecoration: 'line-through', color: 'var(--color-soil)', opacity: 0.8 }}>₹{deal.oldPrice}</span>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-soil)' }}>
                      <span>{deal.current} ordered</span>
                      <span>Target: {deal.target}</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '5px', overflow: 'hidden' }}>
                      <div style={{ width: `${percent}%`, height: '100%', backgroundColor: 'var(--color-indigo)' }}></div>
                    </div>
                  </div>

                  <button className="btn btn-indigo" style={{ marginTop: 'auto', padding: '12px', width: '100%' }}>Join Group Order</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
