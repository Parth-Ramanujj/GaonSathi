import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function WeatherAlertsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Agri-Tech
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
          Weather (હવામાન)
        </h1>

        <div className="card" style={{ backgroundColor: 'var(--color-indigo)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '3.5rem', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-heading)' }}>32°C</h2>
            <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>Partly Cloudy</p>
            <p style={{ margin: 0, opacity: 0.7 }}>Ahmedabad, Gujarat</p>
          </div>
          <div style={{ fontSize: '5rem' }}>
            ⛅
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '1rem' }}>⚠️ Farmer Alerts</h2>
        <div className="card" style={{ borderLeft: '6px solid var(--color-terracotta)', marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-terracotta)' }}>Heavy Rain Expected</h3>
          <p style={{ margin: 0, color: 'var(--color-soil)' }}>Unseasonal rainfall predicted in the next 48 hours. Please cover harvested crops to prevent damage.</p>
        </div>

        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>7-Day Forecast</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {['Tomorrow', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
            <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
              <span style={{ fontWeight: 'bold', width: '100px', color: 'var(--color-soil)' }}>{day}</span>
              <span style={{ fontSize: '1.5rem' }}>{i === 0 ? '🌧️' : '☀️'}</span>
              <span style={{ color: 'var(--color-soil)' }}>33° / 24°</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
