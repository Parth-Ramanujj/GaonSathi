'use client';

import React, { useState } from 'react';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';

export default function AdminBookingsPage() {
  const { bookings } = useGaonSathi();
  const [filterModule, setFilterModule] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [search, setSearch] = useState('');

  const formattedBookings = bookings.map(b => ({
    id: b.id,
    user: b.customerName,
    provider: b.providerName,
    module: b.type === 'SERVICE' ? 'Local Services' : b.type === 'EQUIPMENT' ? 'Equipment' : b.type === 'SHOP_ORDER' ? 'Shop' : 'Livestock',
    amount: `₹${b.amount}`,
    status: b.status === 'PENDING' ? 'Requested' : b.status === 'ACCEPTED' || b.status === 'IN_PROGRESS' ? 'In-Progress' : b.status === 'COMPLETED' ? 'Completed' : 'Cancelled',
    payment: b.status === 'COMPLETED' ? 'Escrow Released' : 'Escrow Held',
    date: b.date,
    title: b.title
  }));

  const filtered = formattedBookings.filter(b => {
    if (filterModule !== 'All' && b.module !== filterModule) return false;
    if (filterStatus !== 'All' && b.status !== filterStatus) return false;
    if (search && !b.id.toLowerCase().includes(search.toLowerCase()) && !b.user.toLowerCase().includes(search.toLowerCase()) && !b.provider.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      
      {/* Filters Bar */}
      <div style={{ display: 'flex', gap: '1rem', backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', alignItems: 'center', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Search Booking ID, Customer or Provider..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', flex: 1, minWidth: '220px', fontSize: '0.9rem' }}
        />
        
        <select value={filterModule} onChange={e => setFilterModule(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#FFF' }}>
          <option value="All">All Modules</option>
          <option value="Local Services">Local Services (કારીગર)</option>
          <option value="Shop">Shop (દુકાન)</option>
          <option value="Equipment">Equipment (સાધન)</option>
          <option value="Livestock">Livestock (પશુ)</option>
        </select>

        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#FFF' }}>
          <option value="All">All Statuses</option>
          <option value="Requested">Requested (Pending)</option>
          <option value="In-Progress">In-Progress / Accepted</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Data Table */}
      <div style={{ backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden', flex: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
            <tr>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Booking ID & Date</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Module & Item</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Customer ➔ Provider</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Amount</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Payment Escrow</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, i) => (
              <tr key={b.id} style={{ borderBottom: i === filtered.length - 1 ? 'none' : '1px solid #E5E7EB' }}>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontWeight: 'bold', color: '#111827' }}>{b.id}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{b.date}</div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-indigo)' }}>{b.module}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{b.title}</div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ color: '#111827', fontWeight: '500' }}>{b.user}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.85rem' }}>➔ {b.provider}</div>
                </td>
                <td style={{ padding: '12px 16px', color: '#111827', fontWeight: 'bold' }}>{b.amount}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ 
                    backgroundColor: b.status === 'Completed' ? '#DEF7EC' : b.status === 'Cancelled' ? '#FDE8E8' : '#FEF08A', 
                    color: b.status === 'Completed' ? '#03543F' : b.status === 'Cancelled' ? '#9B1C1C' : '#723B13', 
                    padding: '4px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600' 
                  }}>
                    {b.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ 
                    border: b.payment === 'Escrow Released' ? '1px solid #03543F' : '1px solid #723B13',
                    color: b.payment === 'Escrow Released' ? '#03543F' : '#723B13',
                    padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600'
                  }}>
                    {b.payment}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>No bookings found matching filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
