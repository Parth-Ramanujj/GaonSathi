import Link from 'next/link';
import { BuntingDivider } from '@/components/BuntingDivider';
import '../../../globals.css';

export default function OrderFulfillmentPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop/orders" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Orders
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>
          Order {params.id}
        </h1>
        <p style={{ color: 'var(--color-soil)', opacity: 0.8, marginBottom: '2rem', fontWeight: 'bold' }}>Placed 10 mins ago</p>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>Customer Details</h2>
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Sanjay Patel</p>
          <p style={{ margin: '0.25rem 0', color: 'var(--color-soil)' }}>+91 98765 43210</p>
          <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Pickup in person</p>
          
          <Link href={`/chat/${params.id}`} style={{ display: 'block', marginTop: '1rem' }}>
            <button className="btn" style={{ width: '100%', backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)' }}>Chat with Customer</button>
          </Link>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>Order Items</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--color-wheat-deep)', paddingBottom: '1rem' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>DAP Fertilizer (50kg)</p>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Qty: 2</p>
            </div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>₹2,700</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-soil)' }}>Total</p>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--color-leaf)' }}>₹2,700</p>
          </div>
        </div>

        <button className="btn btn-turmeric" style={{ width: '100%', padding: '16px', fontSize: '1.2rem' }}>
          Mark as Ready for Pickup
        </button>
      </div>
    </main>
  );
}
