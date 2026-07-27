import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function ReviewsPage() {
  const reviews: any[] = []; // Empty state

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Ratings & Reviews
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button className="btn btn-turmeric" style={{ flex: 1 }}>Received</button>
          <button className="btn" style={{ flex: 1, backgroundColor: 'var(--color-paper)', border: '2px solid var(--color-turmeric)' }}>Given</button>
        </div>

        {reviews.length === 0 ? (
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⭐</div>
            <h2 style={{ color: 'var(--color-soil)', marginBottom: '0.5rem' }}>No reviews yet</h2>
            <p style={{ color: 'var(--color-soil)', opacity: 0.8 }}>Complete a booking or order to get rated.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* List reviews here */}
          </div>
        )}
      </div>
    </main>
  );
}
