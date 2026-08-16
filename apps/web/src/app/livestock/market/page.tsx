'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function PashuMelaPage() {
  const { livestockListings, addLivestockListing } = useGaonSathi();
  const [showModal, setShowModal] = useState(false);
  const [animalName, setAnimalName] = useState('');
  const [animalType, setAnimalType] = useState('Cow');
  const [yieldText, setYieldText] = useState('12 L/day');
  const [age, setAge] = useState('4 years');
  const [price, setPrice] = useState('65000');
  const [ownerName, setOwnerName] = useState('Suresh Patel');
  const [phone, setPhone] = useState('+91 99887 76655');
  const [location, setLocation] = useState('Motipur');

  const handleAddAnimal = (e: React.FormEvent) => {
    e.preventDefault();
    addLivestockListing({
      type: `${animalName || (animalType === 'Cow' ? 'Gir Cow' : 'Mehsani Buffalo')}`,
      yield: yieldText,
      age,
      price: Number(price),
      ownerName,
      phone,
      location,
      icon: animalType === 'Cow' ? '🐄' : '🐃'
    });
    setShowModal(false);
    alert('પશુ લિસ્ટ થઈ ગયું છે! (Animal published to Pashu Mela)');
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <Link href="/livestock" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Livestock Hub
        </Link>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '3rem' }}>🐂</span> પશુ મેળો (Pashu Mela)
          </h1>
          <button onClick={() => setShowModal(true)} className="btn btn-leaf" style={{ padding: '12px 20px', fontSize: '1.1rem' }}>
            + Sell Animal (પશુ વેચો)
          </button>
        </div>

        <p style={{ color: 'var(--color-soil)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Buy and sell healthy livestock directly with verified farmers in your district.
        </p>

        {/* Modal for selling animal */}
        {showModal && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '500px', width: '100%', backgroundColor: 'white', borderTop: '6px solid var(--color-leaf)' }}>
              <h2 style={{ margin: '0 0 1rem 0', color: 'var(--color-leaf)' }}>🐂 List Animal for Sale</h2>
              <form onSubmit={handleAddAnimal} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Animal Type & Breed</label>
                  <input type="text" value={animalName} onChange={(e) => setAnimalName(e.target.value)} placeholder="e.g. Gir Cow (ગીર ગાય) or Kankrej" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Milk Yield</label>
                    <input type="text" value={yieldText} onChange={(e) => setYieldText(e.target.value)} placeholder="e.g. 14 L/day" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Age</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 3.5 years" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Price (₹ ભાવ)</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Owner Name</label>
                    <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>Location / Village</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' }} required />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-leaf" style={{ flex: 1 }}>Publish Listing</button>
                  <button type="button" onClick={() => setShowModal(false)} className="btn" style={{ flex: 1, backgroundColor: '#E2E8F0' }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {livestockListings.map((animal) => (
            <div key={animal.id} className="card" style={{ padding: 0, overflow: 'hidden', borderTop: '6px solid var(--color-leaf)', backgroundColor: 'white' }}>
              <div style={{ height: '180px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
                {animal.icon}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-indigo)', fontSize: '1.4rem' }}>{animal.type}</h2>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-soil)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                  <span>🥛 {animal.yield}</span>
                  <span>📅 {animal.age}</span>
                  <span>📍 {animal.location}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--color-leaf)' }}>₹{animal.price.toLocaleString('en-IN')}</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>Seller: {animal.ownerName}</p>
                  </div>
                  <button 
                    onClick={() => alert(`Calling seller ${animal.ownerName} at ${animal.phone}...`)} 
                    className="btn btn-indigo" 
                    style={{ padding: '10px 18px', fontSize: '0.95rem' }}
                  >
                    📞 Contact Seller
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
