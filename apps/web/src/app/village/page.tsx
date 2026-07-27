'use client';

import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function VillageNewsPage() {
  const notices = [
    { id: 'n1', type: 'official', sender: 'સરપંચ (Sarpanch)', date: 'આજે', message: 'આવતીકાલે સવારે 10 વાગ્યે ગ્રામ પંચાયતની મીટીંગ છે. બધાએ હાજર રહેવું.', icon: '🏛️', color: 'var(--color-indigo)' },
    { id: 'n2', type: 'alert', sender: 'રમેશભાઈ (Ramesh)', date: 'ગઈકાલે', message: 'નદી પાસેના ખેતરોમાં જંગલી ભૂંડનો ત્રાસ છે, રાત્રે ધ્યાન રાખવું.', icon: '⚠️', color: 'var(--color-terracotta)' },
    { id: 'n3', type: 'general', sender: 'દૂધ મંડળી (Dairy)', date: '2 દિવસ પહેલા', message: 'આવતીકાલથી દૂધના ભાવમાં 2 રૂપિયાનો વધારો થશે.', icon: '🥛', color: 'var(--color-leaf)' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Dashboard
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-terracotta)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>📢</span> ગામ (Notice Board)
            </h1>
          </div>
          <button onClick={() => alert("Opening Notice Creation form...")} className="btn btn-terracotta" style={{ padding: '12px 24px', fontSize: '1.2rem' }}>+ New</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {notices.map(notice => (
            <div key={notice.id} className="card" style={{ borderLeft: `8px solid ${notice.color}`, padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              
              <div style={{ fontSize: '3rem', backgroundColor: 'var(--color-wheat-deep)', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', flexShrink: 0 }}>
                {notice.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h2 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.2rem' }}>{notice.sender}</h2>
                  <span style={{ color: 'var(--color-soil)', opacity: 0.8, fontSize: '0.9rem' }}>{notice.date}</span>
                </div>
                <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '1.2rem', lineHeight: 1.5, fontWeight: notice.type === 'official' ? 'bold' : 'normal' }}>
                  {notice.message}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
