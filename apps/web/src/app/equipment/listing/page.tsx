'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function EquipmentListingPage() {
  const { addEquipmentListing } = useGaonSathi();
  const router = useRouter();

  const [type, setType] = useState('Tractor');
  const [name, setName] = useState('');
  const [ownerName, setOwnerName] = useState('Raju Patel');
  const [phone, setPhone] = useState('+91 98712 34560');
  const [village, setVillage] = useState('Motipur');
  const [price, setPrice] = useState('800');
  const [unit, setUnit] = useState('per hour');
  const [distance, setDistance] = useState('2.0 km');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const getIcon = (t: string) => {
    switch (t) {
      case 'Tractor': return '🚜';
      case 'Rotavator': return '⚙️';
      case 'Thresher': return '🌾';
      case 'Harvester': return '🌾';
      default: return '🚜';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Please fill equipment name and rental rate.');
      return;
    }

    addEquipmentListing({
      name,
      type,
      ownerName,
      phone,
      village,
      price: Number(price),
      unit,
      distance,
      description: description || 'Heavy agricultural machinery in prime condition ready for field work.',
      icon: getIcon(type)
    });

    setShowSuccess(true);
    setTimeout(() => {
      router.push('/agri/equipment');
    }, 1500);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/equipment" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Equipment Hub
            </Link>
            <h1 style={{ fontSize: '2.3rem', color: 'var(--color-leaf)', margin: 0 }}>
              🚜 List New Equipment (સાધન ઉમેરો)
            </h1>
          </div>
          <Link href="/equipment/requests">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>Requests</button>
          </Link>
        </div>

        {showSuccess && (
          <div style={{ backgroundColor: '#DEF7EC', border: '2px solid #31C48D', color: '#03543F', padding: '16px', borderRadius: '12px', marginBottom: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
            🎉 Equipment listed successfully! Submitted to Sub-Admin and published to End-User `/agri/equipment`. Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '6px solid var(--color-leaf)' }}>
          
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Equipment Type (સાધનનો પ્રકાર)</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', backgroundColor: 'white' }}
            >
              <option value="Tractor">🚜 ટ્રેક્ટર (Tractor)</option>
              <option value="Rotavator">⚙️ રોટાવેટર (Rotavator)</option>
              <option value="Thresher">🌾 થ્રેશર (Thresher)</option>
              <option value="Harvester">🚜 હાર્વેસ્ટર (Harvester)</option>
              <option value="Sprayer">💦 પાવર સ્પ્રેયર (Sprayer)</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Model / Full Name (નામ / મોડેલ)</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Swaraj 744 FE Tractor with Cultivator" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Owner Name (માલિકનું નામ)</label>
              <input 
                type="text" 
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Phone Number (મોબાઈલ)</label>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Rental Rate (₹ ભાવ)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Rate Unit (એકમ)</label>
              <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', backgroundColor: 'white' }}
              >
                <option value="per hour">per hour (કલાક દીઠ)</option>
                <option value="per day">per day (દિવસ દીઠ)</option>
                <option value="per acre">per acre (વીઘા/એકર દીઠ)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-leaf-deep)' }}>Machinery Condition & Attachments</label>
            <textarea 
              rows={3} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Tractor comes with driver, diesel, and heavy cultivator attachment."
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
            />
          </div>

          <button type="submit" className="btn btn-leaf" style={{ width: '100%', padding: '14px', fontSize: '1.1rem' }}>
            Publish Machinery to Farmer Marketplace
          </button>
        </form>
      </div>
    </main>
  );
}
