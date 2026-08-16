'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';
import '../../../globals.css';

export default function AddProductPage() {
  const { addShopProduct } = useGaonSathi();
  const router = useRouter();

  const [name, setName] = useState('');
  const [category, setCategory] = useState<'Fertilizer' | 'Seeds' | 'Pesticides' | 'Tools'>('Fertilizer');
  const [shopName, setShopName] = useState('Patel Krushi Kendra');
  const [village, setVillage] = useState('Motipur');
  const [price, setPrice] = useState('450');
  const [stock, setStock] = useState('50');
  const [showSuccess, setShowSuccess] = useState(false);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Fertilizer': return '🌱';
      case 'Seeds': return '🌿';
      case 'Pesticides': return '🧪';
      case 'Tools': return '🪓';
      default: return '📦';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !stock) {
      alert('Please fill product name, price, and initial stock.');
      return;
    }

    addShopProduct({
      name,
      category,
      shopName,
      price: Number(price),
      stock: Number(stock),
      village,
      icon: getCategoryIcon(category)
    });

    setShowSuccess(true);
    setTimeout(() => {
      router.push('/agri/shop');
    }, 1500);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Link href="/shop/inventory" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Inventory
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
          Add New Product
        </h1>
        <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          List a new fertilizer, seeds, or pesticide item on the Gaon Sathi marketplace.
        </p>

        {showSuccess && (
          <div style={{ backgroundColor: '#DEF7EC', border: '2px solid #31C48D', color: '#03543F', padding: '16px', borderRadius: '12px', marginBottom: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
            🎉 Product published to `/agri/shop` marketplace & submitted to Sub-Admin for catalog review!
          </div>
        )}

        <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '6px solid var(--color-leaf)' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Product Name (નામ)</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Zinc Sulphate 33% (5kg) or Hybrid Bajra Seeds" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Category (વસ્તુનો પ્રકાર)</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value as 'Fertilizer' | 'Seeds' | 'Pesticides' | 'Tools')}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem', backgroundColor: 'white' }}
            >
              <option value="Fertilizer">🌱 ખાતર (Fertilizer)</option>
              <option value="Seeds">🌿 બિયારણ (Seeds)</option>
              <option value="Pesticides">🧪 દવા (Pesticides)</option>
              <option value="Tools">🪓 ખેત ઓજારો (Tools)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Shop Name</label>
              <input 
                type="text" 
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Village</label>
              <input 
                type="text" 
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Price (ભાવ) ₹</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>Initial Stock (જથ્થો)</label>
              <input 
                type="number" 
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-soil)', fontSize: '1rem' }} 
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-leaf" style={{ padding: '14px', fontSize: '1.1rem', width: '100%', marginTop: '0.5rem' }}>
            Publish to Village Shop
          </button>

        </form>
      </div>
    </main>
  );
}
