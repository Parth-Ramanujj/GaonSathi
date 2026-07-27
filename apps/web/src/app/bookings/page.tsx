import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function BookingsPage() {
  const bookings = [
    { id: 'B-899', type: 'Plumbing Service', provider: 'Ramesh Patel', status: 'In Progress', date: 'Oct 24, 2024', amount: '₹500' },
    { id: 'B-898', type: 'Tractor Rental', provider: 'Raju Bhai', status: 'Completed', date: 'Oct 20, 2024', amount: '₹800' },
    { id: 'B-897', type: 'Electrical Service', provider: 'Suresh Kumar', status: 'Pending', date: 'Oct 25, 2024', amount: '₹300' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return { icon: '⏳', color: 'var(--color-turmeric-dark)', text: 'બાકી' };
      case 'In Progress': return { icon: '🔄', color: 'var(--color-indigo)', text: 'ચાલુ' };
      case 'Completed': return { icon: '✅', color: 'var(--color-leaf)', text: 'પૂર્ણ' };
      default: return { icon: '📍', color: 'var(--color-soil)', text: status };
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/services" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          My Bookings
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <button className="btn btn-indigo" style={{ flexShrink: 0 }}>All</button>
          <button className="btn" style={{ flexShrink: 0, backgroundColor: 'white', color: 'var(--color-soil)' }}>Services</button>
          <button className="btn" style={{ flexShrink: 0, backgroundColor: 'white', color: 'var(--color-soil)' }}>Rentals</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {bookings.map(booking => {
            const statusStyle = getStatusIcon(booking.status);
            return (
              <Link href={`/bookings/${booking.id}`} key={booking.id}>
                <div className="card" style={{ borderLeft: `6px solid ${statusStyle.color}` }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-soil)' }}>{booking.id}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--color-wheat-deep)', color: statusStyle.color, padding: '6px 12px', borderRadius: '20px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                      {statusStyle.icon} {statusStyle.text}
                    </span>
                  </div>
                  
                  <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--color-indigo)' }}>{booking.type}</h2>
                  <p style={{ margin: '0 0 1rem 0', color: 'var(--color-soil)' }}>Provider: {booking.provider}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-wheat-deep)', paddingTop: '1rem' }}>
                    <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>📅 {booking.date}</p>
                    <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-soil)' }}>{booking.amount}</p>
                  </div>
                  
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
