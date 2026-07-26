import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ProviderRequestsPage() {
  const requests = [
    { id: 'REQ-1234', customer: 'Sanjay Patel', service: 'Plumbing Repair', distance: '1.5 km', time: 'Today, 2:00 PM', price: 500 }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/provider/listing" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Listing
        </Link>

        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Incoming Requests
        </h1>

        {requests.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ color: 'var(--color-soil)' }}>No new requests</h2>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {requests.map(req => (
              <div key={req.id} className="card" style={{ borderLeft: '6px solid var(--color-turmeric-dark)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, color: 'var(--color-indigo)' }}>{req.customer}</h2>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-soil)' }}>₹{req.price}</span>
                </div>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)' }}>{req.service}</p>
                <p style={{ margin: '0 0 1.5rem 0', color: 'var(--color-soil)', opacity: 0.8 }}>📍 {req.distance} • 🕒 {req.time}</p>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link href={`/provider/jobs/${req.id}`} style={{ flex: 1 }}>
                    <button className="btn btn-leaf" style={{ width: '100%' }}>Accept Job</button>
                  </Link>
                  <button className="btn" style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-terracotta)', color: 'var(--color-terracotta)' }}>Decline</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
