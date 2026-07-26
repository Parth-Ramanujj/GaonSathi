import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../globals.css';

export default function ShopOwnerHubPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Dashboard
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-turmeric-dark)', marginBottom: '0.5rem' }}>
          🏪 Shop Management
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Manage your inventory and incoming orders.
        </p>

        {/* Action Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <Link href="/shop/inventory">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid var(--color-indigo)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</span>
              <h2 style={{ margin: 0, color: 'var(--color-indigo)' }}>Inventory</h2>
              <p style={{ color: 'var(--color-soil)', marginTop: '0.5rem' }}>Update stock and pricing</p>
            </div>
          </Link>
          <Link href="/shop/orders">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', borderTop: `6px solid var(--color-leaf)`, height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>📦</span>
              <h2 style={{ margin: 0, color: 'var(--color-leaf)' }}>Incoming Orders</h2>
              <p style={{ color: 'var(--color-soil)', marginTop: '0.5rem' }}>View and fulfill farmer orders</p>
            </div>
          </Link>
          
          <Link href="/shop/leads" style={{ gridColumn: '1 / -1' }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', backgroundColor: 'var(--color-indigo)', color: 'white', height: '100%', cursor: 'pointer' }}>
              <span style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎯</span>
              <h2 style={{ margin: 0, color: 'white' }}>Local RFQs & Leads</h2>
              <span style={{ backgroundColor: 'var(--color-terracotta)', padding: '4px 12px', borderRadius: '12px', fontSize: '1rem', fontWeight: 'bold', marginTop: '0.5rem' }}>5 New Bidding Opportunities</span>
            </div>
          </Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/shop/onboarding" style={{ color: 'var(--color-soil)', textDecoration: 'underline' }}>
            Update Shop License / Registration
          </Link>
        </div>
      </div>
    </main>
  );
}
