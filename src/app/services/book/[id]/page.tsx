'use client';

import { useState } from 'react';
import '../../../globals.css';

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBooking = () => {
    setIsProcessing(true);
    // Simulate API call and Payment Gateway
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2); // Move to success step
    }, 2000);
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div className="bunting-divider" aria-hidden="true" style={{ marginBottom: '2rem' }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bunting-flag"></div>
        ))}
      </div>

      <div className="card">
        {step === 1 ? (
          <>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>
              Book Service
            </h1>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '8px', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ramesh Patel - Plumber</h2>
              <p>Pipe Leakage Repair</p>
              <h3 style={{ marginTop: '1rem', color: 'var(--color-terracotta)', fontSize: '1.8rem' }}>Total: ₹500</h3>
            </div>
            
            <button 
              className="btn btn-turmeric" 
              style={{ width: '100%', opacity: isProcessing ? 0.7 : 1 }}
              onClick={handleBooking}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing Payment (Escrow)...' : 'Pay & Confirm Booking'}
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--color-leaf)', marginBottom: '1rem' }}>🎉 Booking Confirmed!</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Your payment of ₹500 is held safely in escrow. It will only be released to Ramesh once the job is marked complete by you.
            </p>
            <button className="btn btn-leaf" onClick={() => window.location.href = '/services'}>
              Back to Directory
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
