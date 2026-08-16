'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BuntingDivider } from '@/lib/ui';
import { useGaonSathi, ShopProduct } from '@/lib/store/GaonSathiContext';
import '../../globals.css';

export default function ShopBrowsePage() {
  const { shopProducts, cart, addToCart, removeFromCart, clearCart, checkoutCart } = useGaonSathi();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCartModal, setShowCartModal] = useState(false);
  const [customerName, setCustomerName] = useState('Ramesh Patel');
  const [customerPhone, setCustomerPhone] = useState('+91 98765 43210');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = ['All', 'Fertilizer', 'Seeds', 'Pesticides', 'Tools'];

  const filteredProducts = shopProducts.filter(p => {
    if (p.status !== 'APPROVED') return false;
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    return true;
  });

  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    checkoutCart(customerName, customerPhone);
    setShowCartModal(false);
    setOrderPlaced(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.5rem' }}>
              ← Back to Agri-Tech
            </Link>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--color-indigo)', margin: 0 }}>
              🏪 Village Agro Stores (દુકાન માર્કેટ)
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link href="/bookings">
              <button className="btn" style={{ backgroundColor: 'white', border: '2px solid var(--color-indigo)', color: 'var(--color-indigo)', padding: '8px 14px', fontSize: '0.95rem' }}>
                My Orders
              </button>
            </Link>
            <button 
              onClick={() => setShowCartModal(true)}
              className="btn btn-turmeric" 
              style={{ padding: '8px 16px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              🛒 Cart ({totalCartCount}) • ₹{cartTotal}
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="btn"
              style={{ 
                flexShrink: 0, 
                backgroundColor: selectedCategory === cat ? 'var(--color-turmeric)' : 'white',
                color: selectedCategory === cat ? 'var(--color-indigo-deep)' : 'var(--color-soil)',
                border: '1px solid #CBD5E1',
                padding: '6px 16px',
                fontSize: '0.95rem'
              }}
            >
              {cat === 'All' ? '🌟 All Items' : cat === 'Fertilizer' ? '🌱 ખાતર' : cat === 'Seeds' ? '🌿 બિયારણ' : cat === 'Pesticides' ? '🧪 દવા' : '🪓 ઓજારો'}
            </button>
          ))}
        </div>

        {/* Cart Modal */}
        {showCartModal && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '500px', width: '100%', backgroundColor: 'white', borderTop: '6px solid var(--color-turmeric-dark)' }}>
              <h2 style={{ margin: '0 0 1rem 0', color: 'var(--color-indigo)' }}>🛒 Your Shopping Cart</h2>
              
              {cart.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#6B7280', padding: '2rem 0' }}>Your cart is empty.</p>
              ) : (
                <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '200px', overflowY: 'auto' }}>
                    {cart.map(item => (
                      <div key={item.product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', backgroundColor: 'var(--color-wheat)', borderRadius: '6px' }}>
                        <div>
                          <span style={{ fontWeight: 'bold', color: 'var(--color-indigo)' }}>{item.product.name}</span>
                          <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>₹{item.product.price} x {item.quantity} = ₹{item.product.price * item.quantity}</div>
                        </div>
                        <button type="button" onClick={() => removeFromCart(item.product.id)} style={{ color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>✕ Remove</button>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Farmer Name</label>
                      <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #CBD5E1' }} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Phone</label>
                      <input type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #CBD5E1' }} required />
                    </div>
                  </div>

                  <div style={{ padding: '10px 14px', backgroundColor: 'var(--color-wheat-deep)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                    <span>Total Amount (Pay on Pickup):</span>
                    <span style={{ fontSize: '1.3rem', color: 'var(--color-leaf)' }}>₹{cartTotal}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <button type="submit" className="btn btn-leaf" style={{ flex: 1 }}>Place Order</button>
                    <button type="button" onClick={() => setShowCartModal(false)} className="btn" style={{ flex: 1, backgroundColor: '#E2E8F0' }}>Close</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Order Success Modal */}
        {orderPlaced && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="card" style={{ maxWidth: '480px', width: '100%', backgroundColor: 'white', textAlign: 'center', padding: '2.5rem' }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🌾</span>
              <h2 style={{ color: 'var(--color-leaf)', marginBottom: '0.5rem' }}>ઓર્ડર સફળતાપૂર્વક મૂકાયો!</h2>
              <p style={{ color: 'var(--color-soil)', marginBottom: '1.5rem' }}>
                Your order has been sent to the shop owner. You can view order status in "My Orders" or switch to <strong>Shop Owner</strong> role to fulfill it!
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => router.push('/bookings')} className="btn btn-leaf" style={{ flex: 1 }}>View My Orders</button>
                <button onClick={() => setOrderPlaced(false)} className="btn btn-turmeric" style={{ flex: 1 }}>Continue Shopping</button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', borderTop: product.isSponsored ? '6px solid gold' : '6px solid var(--color-turmeric-dark)', padding: 0, overflow: 'hidden', backgroundColor: 'white' }}>
              
              <div style={{ height: '150px', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
                {product.icon}
              </div>
              
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h2 style={{ color: 'var(--color-indigo)', fontSize: '1.2rem', margin: '0 0 0.25rem 0' }}>{product.name}</h2>
                    <p style={{ color: 'var(--color-soil)', fontSize: '0.85rem', margin: 0 }}>
                      Sold by: <strong>{product.shopName}</strong> • 📍 {product.village}
                    </p>
                  </div>
                  <p style={{ color: 'var(--color-leaf)', fontWeight: 'bold', margin: 0, fontSize: '1.4rem' }}>₹{product.price}</p>
                </div>

                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: product.stock < 15 ? 'var(--color-terracotta)' : 'var(--color-soil)' }}>
                  Stock Available: <strong>{product.stock} units</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem' }}>
                  <button 
                    onClick={() => alert(`Calling shop ${product.shopName}...`)}
                    className="btn" 
                    style={{ padding: '6px 10px', backgroundColor: 'var(--color-wheat)', color: 'var(--color-indigo)', border: 'none', fontSize: '0.85rem' }}
                  >
                    📞 Call Shop
                  </button>
                  <button 
                    onClick={() => {
                      addToCart(product);
                      alert(`${product.name} Added to Cart! 🛒`);
                    }}
                    className="btn btn-turmeric" 
                    style={{ padding: '6px 16px', fontSize: '0.9rem' }}
                  >
                    + Add to Cart
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
