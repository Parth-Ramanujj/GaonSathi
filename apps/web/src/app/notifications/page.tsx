import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function NotificationsPage() {
  const notifications: any[] = []; // Empty state for now

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Notifications
        </h1>

        {notifications.length === 0 ? (
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📭</div>
            <h2 style={{ color: 'var(--color-soil)', marginBottom: '0.5rem' }}>No new notifications</h2>
            <p style={{ color: 'var(--color-soil)', opacity: 0.8 }}>We'll notify you when there are updates on your bookings, weather alerts, or mandi prices.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* List notifications here */}
          </div>
        )}
      </div>
    </main>
  );
}
