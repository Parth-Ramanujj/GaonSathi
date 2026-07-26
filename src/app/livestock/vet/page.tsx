'use client';

import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function CallVetPage() {
  const vets = [
    { name: 'Dr. Sanjay Patel', type: 'Govt. Veterinary Officer', distance: '5km (Taluka Clinic)', phone: '+91-XXXXX-XXXXX' },
    { name: 'Dr. Ramesh Bhai', type: 'Private Practitioner', distance: '12km (Available 24/7)', phone: '+91-XXXXX-XXXXX' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Livestock Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>🩺</span> ડોક્ટર (Call Vet)
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Contact nearby veterinarians for emergencies or routine checkups.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {vets.map((vet, i) => (
            <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: vet.type.includes('Govt') ? '6px solid var(--color-leaf)' : '6px solid var(--color-indigo)' }}>
              <div>
                <h2 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)' }}>{vet.name}</h2>
                <p style={{ margin: 0, fontWeight: 'bold', color: vet.type.includes('Govt') ? 'var(--color-leaf)' : 'var(--color-soil)' }}>{vet.type}</p>
                <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-soil)', fontSize: '0.9rem' }}>📍 {vet.distance}</p>
              </div>
              <button 
                onClick={() => alert(`Calling ${vet.name}...`)}
                className="btn btn-terracotta" 
                style={{ padding: '12px 24px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📞 Call
              </button>
            </div>
          ))}
        </div>
        
        <div className="card" style={{ marginTop: '2rem', backgroundColor: 'var(--color-wheat-deep)', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-soil)' }}>Emergency Helpline</h3>
          <button onClick={() => alert('Dialing 1962 (Karuna Animal Ambulance)...')} className="btn" style={{ backgroundColor: 'var(--color-terracotta)', color: 'white', fontSize: '1.5rem', padding: '16px 32px', width: '100%' }}>
            🚑 Dial 1962 (Ambulance)
          </button>
        </div>
      </div>
    </main>
  );
}
