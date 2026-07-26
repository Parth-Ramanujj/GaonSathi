import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function EquipmentRequestsPage() {
  const requests = [
    { id: 'RNT-998', customer: 'Naresh Bhai', equipment: 'Mahindra Tractor 575 DI', date: 'Tomorrow, 8:00 AM', duration: '4 hours', total: 3200 }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/equipment/listing" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Listing
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Rental Requests
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {requests.map(req => (
            <div key={req.id} className="card" style={{ borderLeft: '6px solid var(--color-turmeric-dark)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ margin: 0, color: 'var(--color-indigo)' }}>{req.customer}</h2>
                <span style={{ fontWeight: 'bold', color: 'var(--color-soil)' }}>₹{req.total}</span>
              </div>
              <p style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)', fontWeight: 'bold' }}>{req.equipment}</p>
              <p style={{ margin: '0 0 1.5rem 0', color: 'var(--color-soil)', opacity: 0.8 }}>📅 {req.date} • ⏱️ {req.duration}</p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href={`/equipment/calendar`} style={{ flex: 1 }}>
                  <button className="btn btn-leaf" style={{ width: '100%' }}>Approve</button>
                </Link>
                <button className="btn" style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-terracotta)', color: 'var(--color-terracotta)' }}>Decline</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
