'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi, EquipmentListing } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function EquipmentBrowsePage() {
  const { equipmentListings, createBooking } = useGaonSathi();
  const router = useRouter();

  const [bookingEq, setBookingEq] = useState<EquipmentListing | null>(null);
  const [customerName, setCustomerName] = useState('Popatbhai Farmer');
  const [customerPhone, setCustomerPhone] = useState('+91 98222 33445');
  const [duration, setDuration] = useState('4 Hours');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const approvedEquipment = equipmentListings.filter(e => e.status === 'APPROVED');

  const handleConfirmRental = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingEq) return;

    // Estimate total
    const hours = parseInt(duration) || 4;
    const totalAmount = bookingEq.price * hours;

    createBooking({
      type: 'EQUIPMENT',
      title: `${bookingEq.name} Rental (${duration})`,
      targetId: bookingEq.id,
      customerName,
      customerPhone,
      providerName: bookingEq.ownerName,
      timeSlot: duration,
      amount: totalAmount,
      notes: notes || 'Plowing work before monsoon.'
    });

    setIsBooked(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Agri-Tech
            </Link>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', margin: 0 }}>
              🚜 Rent Farm Machinery (ઓજારો ભાડે મેળવો)
            </h1>
          </div>
          <Link href="/bookings">
            <button className="btn" style={{ backgroundColor: 'white', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)', padding: '8px 16px' }}>
              My Rentals
            </button>
          </Link>
        </div>

        {/* Rental Modal */}
        {bookingEq && !isBooked && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '500px', width: '100%', backgroundColor: 'white', borderTop: '6px solid var(--color-leaf)' }}>
              <h2 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-leaf)' }}>Rent {bookingEq.name}</h2>
              <p style={{ margin: '0 0 1rem 0', color: '#6B7280' }}>Owner: {bookingEq.ownerName} • 📍 {bookingEq.village}</p>
              
              <form onSubmit={handleConfirmRental} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Farmer Name</label>
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Phone</label>
                    <input type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Duration / Required Work</label>
                  <select value={duration} onChange={(e) => setDuration(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
                    <option>2 Hours</option>
                    <option>4 Hours</option>
                    <option>1 Full Day</option>
                    <option>3 Acres Plowing</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Field Location / Details</label>
                  <textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Field #4 near river canal, Motipur." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)' }} />
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--color-wheat)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>Estimated Total</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>
                    ₹{(bookingEq.price * (parseInt(duration) || 4)).toLocaleString('en-IN')}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-leaf" style={{ flex: 1 }}>Confirm Rental Request</button>
                  <button type="button" onClick={() => setBookingEq(null)} className="btn" style={{ flex: 1, backgroundColor: '#E2E8F0' }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {isBooked && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '480px', width: '100%', backgroundColor: 'white', textAlign: 'center', padding: '2.5rem' }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🚜</span>
              <h2 style={{ color: 'var(--color-leaf)', marginBottom: '0.5rem' }}>સાધન બુકિંગ રિક્વેસ્ટ મોકલાઈ ગઈ!</h2>
              <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem' }}>
                Rental request has been sent to <strong>{bookingEq?.ownerName}</strong>. You can view progress in "My Bookings" or switch to Equipment Owner role to accept it!
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => router.push('/bookings')} className="btn btn-leaf" style={{ flex: 1 }}>View My Bookings</button>
                <button onClick={() => { setIsBooked(false); setBookingEq(null); }} className="btn btn-turmeric" style={{ flex: 1 }}>Close</button>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {approvedEquipment.map(eq => (
            <div key={eq.id} className="card" style={{ display: 'flex', flexDirection: 'column', borderTop: '6px solid var(--color-leaf)', padding: 0, overflow: 'hidden', backgroundColor: 'white' }}>
              <div style={{ height: '160px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
                {eq.icon || '🚜'}
              </div>
              
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.35rem', margin: '0 0 0.5rem 0' }}>{eq.name}</h2>
                <p style={{ color: 'var(--color-soil)', opacity: 0.85, fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>{eq.description}</p>
                <p style={{ color: 'var(--color-soil)', margin: '0 0 1rem 0', fontSize: '0.85rem' }}>
                  By <strong>{eq.ownerName}</strong> • 📍 {eq.village} ({eq.distance}) • ⭐ {eq.rating}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-wheat-deep)' }}>
                  <div>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-leaf)', margin: 0 }}>₹{eq.price}</p>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0 }}>{eq.unit}</p>
                  </div>
                  <button 
                    onClick={() => setBookingEq(eq)}
                    className="btn btn-turmeric" 
                    style={{ padding: '8px 16px', fontSize: '0.95rem' }}
                  >
                    Rent Now (ભાડે લો)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
