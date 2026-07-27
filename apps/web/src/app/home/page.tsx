import Link from 'next/link';
import { BuntingDivider, PermissionPrompt, VoiceAssistantFab } from '@/lib/ui';
import '../globals.css';

export default function HomeDashboard() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PermissionPrompt />
      <VoiceAssistantFab />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)' }}>
          Gaon Sathi
        </h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-leaf)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            RP
          </div>
        </div>
      </div>

      <div className="bunting-divider" aria-hidden="true" style={{ marginBottom: '2rem' }}>
        {[...Array(30)].map((_, i) => (
          <div key={i} className="bunting-flag"></div>
        ))}
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        
        {/* Agri-Tech Module Card (Farmer Role) */}
        <Link href="/agri" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-leaf)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>🌾</span>
            <h2 style={{ color: 'var(--color-leaf)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>ખેતીવાડી</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Agri-Tech)</p>
          </section>
        </Link>

        {/* Local Services Module Card (Provider / Consumer) */}
        <Link href="/services" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-indigo)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'var(--color-indigo)', color: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>🔧</span>
            <h2 style={{ color: 'white', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>સેવાઓ</h2>
            <p style={{ margin: '0.5rem 0 0 0', opacity: 0.8, fontSize: '1.2rem', textAlign: 'center' }}>(Services)</p>
          </section>
        </Link>
        
        {/* Shop Orders (Shop Owner Role) */}
        <Link href="/shop" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-turmeric-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>🏪</span>
            <h2 style={{ color: 'var(--color-turmeric-dark)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>દુકાન</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Shop)</p>
          </section>
        </Link>
        
        {/* Livestock Module */}
        <Link href="/livestock" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-soil)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>🐄</span>
            <h2 style={{ color: 'var(--color-soil)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>પશુપાલન</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Livestock)</p>
          </section>
        </Link>
        
        {/* Education Hub Module */}
        <Link href="/education" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-indigo)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>📚</span>
            <h2 style={{ color: 'var(--color-indigo)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>તાલીમ</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Education)</p>
          </section>
        </Link>

        {/* Village News Module */}
        <Link href="/village" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-terracotta)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>📢</span>
            <h2 style={{ color: 'var(--color-terracotta)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>ગામ</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Village News)</p>
          </section>
        </Link>

        {/* Provider Hub Module (Tradesmen) */}
        <Link href="/provider" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-indigo)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>🛠️</span>
            <h2 style={{ color: 'var(--color-indigo)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>કારીગર</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Provider Hub)</p>
          </section>
        </Link>

        {/* Equipment Owner Hub Module */}
        <Link href="/equipment" style={{ width: '100%' }}>
          <section className="card" style={{ borderTop: '8px solid var(--color-leaf)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', height: '100%', cursor: 'pointer', backgroundColor: 'white' }}>
            <span style={{ fontSize: '6rem', marginBottom: '1rem', display: 'block' }}>🚜</span>
            <h2 style={{ color: 'var(--color-leaf)', fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>સાધન માલિક</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)', fontSize: '1.2rem', textAlign: 'center' }}>(Equipment Owner)</p>
          </section>
        </Link>

      </div>

    </main>
  );
}
