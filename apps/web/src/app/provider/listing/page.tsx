'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ProviderListingPage() {
  const { addServiceListing } = useGaonSathi();
  const router = useRouter();

  const [category, setCategory] = useState<'plumbing' | 'electrical' | 'carpentry' | 'masonry'>('plumbing');
  const [title, setTitle] = useState('');
  const [providerName, setProviderName] = useState('Mahesh Plumber');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [village, setVillage] = useState('Motipur');
  const [basePrice, setBasePrice] = useState('450');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !basePrice) {
      alert('Please enter title and base price.');
      return;
    }

    addServiceListing({
      category,
      title,
      providerName,
      phone,
      village,
      basePrice: Number(basePrice),
      description: description || 'Certified skilled technician available for village service.',
      available: true,
    });

    setShowSuccess(true);
    setTimeout(() => {
      router.push('/services');
    }, 1500);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <Link href="/provider" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Provider Hub
            </Link>
            <h1 style={{ fontSize: '2.3rem', color: 'var(--color-indigo)', margin: 0 }}>
              🛠️ Register / List Service
            </h1>
          </div>
          <Link href="/provider/requests">
            <button className="btn btn-turmeric" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>View Requests</button>
          </Link>
        </div>

        {showSuccess && (
          <div style={{ backgroundColor: '#DEF7EC', border: '2px solid #31C48D', color: '#03543F', padding: '16px', borderRadius: '12px', marginBottom: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
            🎉 Service listed successfully! Submitted to Sub-Admin & published to End-User Marketplace. Redirecting to `/services`...
          </div>
        )}

        <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '6px solid var(--color-indigo)' }}>
          
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
              Service Category (સર્વિસનો પ્રકાર)
            </label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value as 'plumbing' | 'electrical' | 'carpentry' | 'masonry')}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', backgroundColor: 'white' }}
            >
              <option value="plumbing">🚰 પ્લમ્બર (Plumbing)</option>
              <option value="electrical">⚡ ઇલેક્ટ્રિશિયન (Electrical)</option>
              <option value="carpentry">🪚 સુથાર (Carpentry)</option>
              <option value="masonry">🧱 કળિયો (Masonry)</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
              Service Title (સેવાનું નામ)
            </label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. મોટર બોરવેલ વાયરિંગ રીપેર (Motor & Borewell Repair)" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}
              required 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
                Provider Name (તમારું નામ)
              </label>
              <input 
                type="text" 
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}
                required 
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
                Phone Number (મોબાઈલ)
              </label>
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
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
                Village (ગામ)
              </label>
              <input 
                type="text" 
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}
                required 
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
                Base Price / Visit Fee (₹)
              </label>
              <input 
                type="number" 
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }}
                required 
              />
            </div>
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: 'var(--color-indigo)' }}>
              Work Experience & Description (વિગત)
            </label>
            <textarea 
              rows={3} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Over 8 years experience in agricultural pumps, home wiring and emergency repairs." 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
            />
          </div>

          <button type="submit" className="btn btn-leaf" style={{ width: '100%', padding: '14px', fontSize: '1.1rem', marginTop: '0.5rem' }}>
            Publish Service to Gaon Sathi Marketplace
          </button>
        </form>

      </div>
    </main>
  );
}
