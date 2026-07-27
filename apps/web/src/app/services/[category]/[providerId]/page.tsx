import Link from 'next/link';
import { BuntingDivider } from '@/components/BuntingDivider';
import '../../../globals.css';

export default function ProviderProfilePage({ params }: { params: { category: string, providerId: string } }) {
  // Hardcoded mock data
  const prov = { 
    id: params.providerId, 
    name: 'Ramesh Patel', 
    rating: 4.8, 
    reviews: 24, 
    basePrice: 500, 
    desc: 'Expert Plumber - Pipe Leakage Repair. Over 10 years of experience serving the local community.', 
    distance: '2 km',
    joined: 'Jan 2024'
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%', paddingBottom: '100px' }}>
        <Link href={`/services/${params.category}`} style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Providers
        </Link>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0 }}>{prov.name}</h1>
          <p style={{ fontWeight: 'bold', color: 'var(--color-turmeric-dark)', fontSize: '1.2rem', margin: '0.5rem 0' }}>⭐ {prov.rating} ({prov.reviews} reviews)</p>
          <p style={{ color: 'var(--color-soil)', fontSize: '1.1rem', marginTop: '1rem' }}>{prov.desc}</p>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', borderTop: '1px solid var(--color-wheat-deep)', paddingTop: '1rem' }}>
             <div>
               <p style={{ color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>Location</p>
               <p style={{ fontWeight: 'bold' }}>{prov.distance} away</p>
             </div>
             <div>
               <p style={{ color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>Joined</p>
               <p style={{ fontWeight: 'bold' }}>{prov.joined}</p>
             </div>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>Recent Reviews</h2>
        <div className="card" style={{ padding: '1rem' }}>
           <p style={{ fontWeight: 'bold' }}>⭐ 5.0 - Manish D.</p>
           <p style={{ color: 'var(--color-soil)' }}>Very fast and fixed the pipe perfectly.</p>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: '1rem 2rem', boxShadow: '0 -4px 10px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div>
           <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-soil)' }}>Starting at</p>
           <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-indigo)' }}>₹{prov.basePrice}</p>
        </div>
        <Link href="/bookings">
          <button className="btn btn-turmeric" style={{ padding: '12px 32px' }}>
             Book Now
          </button>
        </Link>
      </div>
    </main>
  );
}
