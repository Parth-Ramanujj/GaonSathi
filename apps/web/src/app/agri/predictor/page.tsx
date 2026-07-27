'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function YieldPredictorPage() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handlePredict = () => {
    setIsPredicting(true);
    setTimeout(() => {
      setIsPredicting(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Agri-Tech
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '3rem' }}>📊</span> આગાહી (AI Predictor)
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem' }}>
          Predict your harvest yield and expected market price.
        </p>

        {!showResult ? (
          <div className="card" style={{ borderTop: '6px solid var(--color-indigo)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>પાક (Crop)</label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, padding: '1rem', border: '2px solid var(--color-indigo)', borderRadius: '12px', textAlign: 'center', fontSize: '2rem', backgroundColor: 'var(--color-wheat-deep)', cursor: 'pointer' }}>🌾</div>
                <div style={{ flex: 1, padding: '1rem', border: '2px solid var(--color-wheat-deep)', borderRadius: '12px', textAlign: 'center', fontSize: '2rem', cursor: 'pointer', opacity: 0.5 }}>🥔</div>
                <div style={{ flex: 1, padding: '1rem', border: '2px solid var(--color-wheat-deep)', borderRadius: '12px', textAlign: 'center', fontSize: '2rem', cursor: 'pointer', opacity: 0.5 }}>🍅</div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>જમીન (Acres)</label>
              <input type="range" min="1" max="20" defaultValue="5" style={{ width: '100%', accentColor: 'var(--color-indigo)' }} />
              <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0 0 0', color: 'var(--color-soil)' }}>5 વીઘા</p>
            </div>

            <button 
              onClick={handlePredict}
              disabled={isPredicting}
              className="btn btn-indigo" 
              style={{ padding: '1rem', fontSize: '1.2rem', marginTop: '1rem' }}
            >
              {isPredicting ? '⏳ Predicting...' : 'આગાહી કરો (Predict)'}
            </button>
          </div>
        ) : (
          <div className="card" style={{ borderTop: '6px solid var(--color-leaf)', display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'fadeIn 0.5s ease-out' }}>
            
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '4rem' }}>🌾</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-indigo)', margin: '0.5rem 0' }}>ઘઉં (Wheat)</h2>
              <p style={{ color: 'var(--color-soil)', margin: 0 }}>Estimated for 5 Acres</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)', fontWeight: 'bold' }}>અંદાજિત ઉત્પાદન (Yield)</p>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>2500</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--color-soil)' }}> kg</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-wheat-deep)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--color-soil)', fontWeight: 'bold' }}>અંદાજિત ભાવ (Price)</p>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-indigo)' }}>₹25</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--color-soil)' }}> /kg</span>
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'rgba(206, 92, 60, 0.1)', borderRadius: '12px', borderLeft: '4px solid var(--color-terracotta)' }}>
              <p style={{ margin: 0, color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>💡</span> AI સલાહ (Advice)
              </p>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-soil)' }}>
                માર્ચ મહિનામાં ભાવ ઘટવાની શક્યતા છે. એપ્રિલ સુધી પાક રોકી રાખશો તો 10% વધુ નફો મળી શકે છે.
              </p>
            </div>

            <button onClick={() => setShowResult(false)} className="btn" style={{ backgroundColor: 'white', color: 'var(--color-soil)', border: '2px solid var(--color-soil)' }}>
              Recalculate
            </button>

            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        )}

      </div>
    </main>
  );
}
