'use client';

import React, { useState } from 'react';

const MOCK_BOOKINGS = [
  { id: 'BK-10024', user: 'Sanjay Patel', provider: 'Mahesh Plumber', module: 'Local Services', amount: '₹450', status: 'Completed', payment: 'Escrow Released', date: 'Oct 25, 2024, 14:30' },
  { id: 'BK-10025', user: 'Ramesh Patel', provider: 'Shreeji Seeds', module: 'Shop', amount: '₹1,200', status: 'In-Progress', payment: 'Escrow Held', date: 'Oct 26, 2024, 09:15' },
  { id: 'BK-10026', user: 'Kisan Bhai', provider: 'Raju Tractor', module: 'Equipment', amount: '₹2,500', status: 'Requested', payment: 'Pending', date: 'Oct 26, 2024, 11:00' },
  { id: 'BK-10027', user: 'Suresh Bhai', provider: 'Ramesh Patel (Cow)', module: 'Livestock', amount: '₹45,000', status: 'Disputed', payment: 'Escrow Held', date: 'Oct 24, 2024, 16:45' },
];

export default function AdminBookingsPage() {
  const [filterModule, setFilterModule] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = MOCK_BOOKINGS.filter(b => {
    if (filterModule !== 'All' && b.module !== filterModule) return false;
    if (filterStatus !== 'All' && b.status !== filterStatus) return false;
    if (search && !b.id.toLowerCase().includes(search.toLowerCase()) && !b.user.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      
      {/* Filters Bar */}
      <div style={{ display: 'flex', gap: '1rem', backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Search Booking ID or User..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', flex: 1, fontSize: '0.9rem' }}
        />
        
        <select value={filterModule} onChange={e => setFilterModule(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#FFF' }}>
          <option value="All">All Modules</option>
          <option value="Local Services">Local Services</option>
          <option value="Shop">Shop</option>
          <option value="Equipment">Equipment</option>
          <option value="Livestock">Livestock</option>
        </select>

        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#FFF' }}>
          <option value="All">All Statuses</option>
          <option value="Requested">Requested</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
          <option value="Disputed">Disputed</option>
        </select>
        
        <button style={{ backgroundColor: 'var(--color-indigo)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Export CSV
        </button>
      </div>

      {/* Data Table */}
      <div style={{ backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', overflow: 'hidden', flex: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
            <tr>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Booking ID & Date</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Module</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Customer ➔ Provider</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Amount</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Job Status</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Payment State</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, i) => (
              <tr key={b.id} style={{ borderBottom: i === filtered.length - 1 ? 'none' : '1px solid #E5E7EB' }}>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontWeight: 'bold', color: '#111827' }}>{b.id}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{b.date}</div>
                </td>
                <td style={{ padding: '12px 16px', color: '#374151', fontWeight: '500' }}>{b.module}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ color: '#111827' }}>{b.user}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.85rem' }}>➔ {b.provider}</div>
                </td>
                <td style={{ padding: '12px 16px', color: '#111827', fontWeight: 'bold' }}>{b.amount}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ 
                    backgroundColor: b.status === 'Completed' ? '#DEF7EC' : b.status === 'Disputed' ? '#FDE8E8' : '#FEF08A', 
                    color: b.status === 'Completed' ? '#03543F' : b.status === 'Disputed' ? '#9B1C1C' : '#723B13', 
                    padding: '4px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600' 
                  }}>
                    {b.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ 
                    border: b.payment === 'Escrow Released' ? '1px solid #03543F' : b.payment === 'Escrow Held' ? '1px solid #723B13' : '1px solid #9CA3AF',
                    color: b.payment === 'Escrow Released' ? '#03543F' : b.payment === 'Escrow Held' ? '#723B13' : '#6B7280',
                    padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600'
                  }}>
                    {b.payment}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button style={{ padding: '4px 8px', fontSize: '0.8rem', backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: '4px', cursor: 'pointer' }}>View Timeline</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>No bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
