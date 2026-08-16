'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function MilkRecordPage() {
  const { milkEntries, addMilkEntry } = useGaonSathi();
  const [showModal, setShowModal] = useState(false);
  const [shift, setShift] = useState<'Morning' | 'Evening'>('Morning');
  const [animalType, setAnimalType] = useState<'Cow' | 'Buffalo'>('Cow');
  const [liters, setLiters] = useState('6.0');
  const [fat, setFat] = useState('4.8');
  const [rate, setRate] = useState('42');

  const totalLiters = milkEntries.reduce((acc, e) => acc + e.quantityLiters, 0);
  const totalPayout = milkEntries.reduce((acc, e) => acc + e.totalAmount, 0);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    addMilkEntry({
      date: new Date().toISOString().split('T')[0],
      shift,
      animalType,
      quantityLiters: Number(liters),
      fatPercentage: Number(fat),
      ratePerLiter: Number(rate),
    });
    setShowModal(false);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Livestock Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>🥛</span> દૂધનો હિસાબ (Daily Dairy Milk Record)
        </h1>

        <div className="card" style={{ backgroundColor: 'var(--color-indigo)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderRadius: '16px' }}>
          <div>
            <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>Total Dairy Earnings (કુલ આવક)</p>
            <h2 style={{ fontSize: '3.2rem', margin: '0.25rem 0 0 0', fontFamily: 'var(--font-heading)', color: '#FCD34D' }}>
              ₹{totalPayout.toLocaleString('en-IN')}
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, opacity: 0.9 }}>Total Milk Collected</p>
            <h3 style={{ fontSize: '2.2rem', margin: '0.25rem 0 0 0', color: 'white' }}>
              {totalLiters.toFixed(1)} L
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-soil)', margin: 0 }}>Recent Collections</h2>
          <button onClick={() => setShowModal(true)} className="btn btn-leaf">+ Add Milk Entry</button>
        </div>

        {/* Modal Form */}
        {showModal && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '480px', width: '100%', backgroundColor: 'white', borderTop: '6px solid var(--color-leaf)' }}>
              <h2 style={{ margin: '0 0 1rem 0', color: 'var(--color-indigo)' }}>🥛 Add Dairy Collection</h2>
              <form onSubmit={handleAddEntry} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Shift (સમય)</label>
                    <select value={shift} onChange={(e) => setShift(e.target.value as 'Morning' | 'Evening')} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
                      <option value="Morning">🌅 સવાર (Morning)</option>
                      <option value="Evening">🌇 સાંજ (Evening)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Animal (પશુ)</label>
                    <select value={animalType} onChange={(e) => setAnimalType(e.target.value as 'Cow' | 'Buffalo')} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
                      <option value="Cow">🐄 ગાય (Cow)</option>
                      <option value="Buffalo">🐃 ભેંસ (Buffalo)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Liters (લીટર)</label>
                    <input type="number" step="0.1" value={liters} onChange={(e) => setLiters(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Fat % (ફેટ)</label>
                    <input type="number" step="0.1" value={fat} onChange={(e) => setFat(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Rate ₹/L</label>
                    <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                </div>

                <div style={{ padding: '10px', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', color: 'var(--color-indigo)' }}>
                  Total Payout: ₹{Math.round(Number(liters) * Number(rate))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-leaf" style={{ flex: 1 }}>Save Entry</button>
                  <button type="button" onClick={() => setShowModal(false)} className="btn" style={{ flex: 1, backgroundColor: '#E2E8F0' }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {milkEntries.map((record) => (
            <div key={record.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '6px solid var(--color-indigo)', backgroundColor: 'white' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)', fontSize: '1.2rem' }}>
                  {record.date} • {record.shift} ({record.animalType})
                </h3>
                <p style={{ margin: 0, color: 'var(--color-soil)', fontSize: '0.9rem' }}>
                  Qty: <strong>{record.quantityLiters} L</strong> • Fat: <strong>{record.fatPercentage}%</strong> • Rate: ₹{record.ratePerLiter}/L
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>₹{record.totalAmount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
