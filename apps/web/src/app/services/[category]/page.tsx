'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi, ServiceListing } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ProviderListPage() {
  const params = useParams();
  const router = useRouter();
  const { serviceListings, createBooking } = useGaonSathi();

  const [bookingService, setBookingService] = useState<ServiceListing | null>(null);
  const [customerName, setCustomerName] = useState('Ramesh Patel');
  const [customerPhone, setCustomerPhone] = useState('+91 98765 43210');
  const [notes, setNotes] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (09:00 - 12:00)');
  const [isBooked, setIsBooked] = useState(false);

  const category = (params?.category as string) || 'plumbing';
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  // Filter listings by category & approved status
  const providers = serviceListings.filter(s => s.category.toLowerCase() === category.toLowerCase() && s.status === 'APPROVED');

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingService) return;

    createBooking({
      type: 'SERVICE',
      title: bookingService.title,
      targetId: bookingService.id,
      customerName,
      customerPhone,
      providerName: bookingService.providerName,
      timeSlot,
      amount: bookingService.basePrice,
      notes: notes || 'Need repair at home/farm.'
    });

    setIsBooked(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/services" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to All Services
            </Link>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', margin: 0 }}>
              {categoryName} Services in Motipur & Nearby
            </h1>
          </div>
          <Link href="/bookings">
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--color-indigo)', border: '2px solid var(--color-indigo)', padding: '8px 16px', fontSize: '0.95rem' }}>
              My Bookings
            </button>
          </Link>
        </div>

        {/* Modal Booking Form */}
        {bookingService && !isBooked && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '500px', width: '100%', backgroundColor: 'white', borderTop: '6px solid var(--color-leaf)' }}>
              <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-indigo)' }}>Book {bookingService.providerName}</h2>
              <p style={{ margin: '0 0 1rem 0', color: 'var(--color-soil)', fontWeight: '600' }}>{bookingService.title}</p>
              
              <form onSubmit={handleConfirmBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Your Name</label>
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Your Phone</label>
                    <input type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Preferred Time Slot</label>
                  <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
                    <option>Morning (09:00 - 12:00)</option>
                    <option>Afternoon (01:00 - 04:00)</option>
                    <option>Evening (05:00 - 08:00)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Problem Description / Location</label>
                  <textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Pump pipe leaking in field near well" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)' }} />
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--color-wheat)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>Base Visit Fee (Escrow)</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>₹{bookingService.basePrice}</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-leaf" style={{ flex: 1 }}>Confirm & Book Now</button>
                  <button type="button" onClick={() => setBookingService(null)} className="btn" style={{ flex: 1, backgroundColor: '#E2E8F0' }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {isBooked && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '480px', width: '100%', backgroundColor: 'white', textAlign: 'center', padding: '2.5rem' }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
              <h2 style={{ color: 'var(--color-leaf)', marginBottom: '0.5rem' }}>સર્વિસ બુક થઈ ગઈ છે!</h2>
              <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem' }}>
                Your request has been sent to <strong>{bookingService?.providerName}</strong>. You can track this in &ldquo;My Bookings&rdquo; or switch to Provider role to test fulfilling it!
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => router.push('/bookings')} className="btn btn-leaf" style={{ flex: 1 }}>View My Bookings</button>
                <button onClick={() => { setIsBooked(false); setBookingService(null); }} className="btn btn-turmeric" style={{ flex: 1 }}>Close</button>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {providers.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-soil)' }}>No approved {categoryName}s listed yet.</p>
              <p style={{ color: '#6B7280', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Switch to <strong>Provider</strong> role to register a service, then approve it in <strong>Sub-Admin</strong>!
              </p>
            </div>
          ) : (
            providers.map(prov => (
              <div key={prov.id} className="card" style={{ borderLeft: '6px solid var(--color-indigo)', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.4rem', margin: 0 }}>{prov.providerName}</h2>
                      <span style={{ backgroundColor: '#DEF7EC', color: '#03543F', fontSize: '0.75rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '10px' }}>
                        ✓ Verified Provider
                      </span>
                    </div>
                    <p style={{ fontWeight: 'bold', color: 'var(--color-turmeric-dark)', margin: '0.25rem 0' }}>
                      ⭐ {prov.rating} ({prov.jobsDone} jobs completed in village)
                    </p>
                    <p style={{ color: 'var(--color-soil)', margin: '0.5rem 0', fontWeight: '600' }}>{prov.title}</p>
                    <p style={{ color: 'var(--color-soil)', opacity: 0.85, fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>{prov.description}</p>
                    <p style={{ color: '#6B7280', fontSize: '0.85rem', margin: 0 }}>📍 Village: {prov.village} • 📞 {prov.phone}</p>
                  </div>
                  
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', minHeight: '110px' }}>
                    <div>
                      <p style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--color-leaf)', margin: 0 }}>₹{prov.basePrice}</p>
                      <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0 }}>Base visit fee</p>
                    </div>
                    
                    <button 
                      onClick={() => setBookingService(prov)} 
                      className="btn btn-turmeric" 
                      style={{ padding: '8px 18px', fontSize: '0.95rem' }}
                    >
                      Book Service (બુક કરો)
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
