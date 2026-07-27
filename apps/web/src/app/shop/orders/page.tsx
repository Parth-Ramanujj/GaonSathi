import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function ShopOrdersPage() {
  const orders = [
    { id: 'ORD-1234', customer: 'Sanjay Patel', items: 2, total: 2700, status: 'New', time: '10 mins ago' },
    { id: 'ORD-1233', customer: 'Ramesh Bhai', items: 1, total: 850, status: 'Ready', time: '2 hours ago' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Shop Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Incoming Orders
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {orders.map(order => (
            <Link href={`/shop/orders/${order.id}`} key={order.id}>
              <div className="card" style={{ borderLeft: order.status === 'New' ? '6px solid var(--color-turmeric-dark)' : '6px solid var(--color-leaf)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-soil)' }}>{order.id}</span>
                  <span style={{ backgroundColor: order.status === 'New' ? 'var(--color-turmeric-dark)' : 'var(--color-leaf)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {order.status}
                  </span>
                </div>
                
                <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--color-indigo)' }}>{order.customer}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>{order.items} items • {order.time}</p>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-soil)' }}>₹{order.total}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
