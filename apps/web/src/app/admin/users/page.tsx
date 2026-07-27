'use client';

import React, { useState } from 'react';

const MOCK_USERS = [
  { id: 'USR-001', name: 'Ramesh Patel', role: 'Provider', phone: '+91 9876543210', location: 'Motipur', status: 'Pending Verification', joined: 'Oct 20, 2024', lastActive: '1 hr ago' },
  { id: 'USR-002', name: 'Kisan Center', role: 'Shop Owner', phone: '+91 9123456789', location: 'Ahmedabad', status: 'Active', joined: 'Sep 15, 2024', lastActive: '2 hrs ago' },
  { id: 'USR-003', name: 'Suresh Bhai', role: 'Farmer', phone: '+91 9988776655', location: 'Motipur', status: 'Active', joined: 'Oct 01, 2024', lastActive: '5 mins ago' },
  { id: 'USR-004', name: 'Raju Tractor', role: 'Equipment Owner', phone: '+91 9871234560', location: 'Surat', status: 'Suspended', joined: 'Aug 10, 2024', lastActive: '2 weeks ago' },
];

export default function AdminUsersPage() {
  const [filterRole, setFilterRole] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = MOCK_USERS.filter(u => {
    if (filterRole !== 'All' && u.role !== filterRole) return false;
    if (filterStatus !== 'All' && u.status !== filterStatus) return false;
    if (search && !u.name.toLowerCase().includes(search.toLowerCase()) && !u.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      
      {/* Filters Bar */}
      <div style={{ display: 'flex', gap: '1rem', backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Search Name or ID..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', flex: 1, fontSize: '0.9rem' }}
        />
        
        <select value={filterRole} onChange={e => setFilterRole(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#FFF' }}>
          <option value="All">All Roles</option>
          <option value="Farmer">Farmer</option>
          <option value="Provider">Provider</option>
          <option value="Shop Owner">Shop Owner</option>
          <option value="Equipment Owner">Equipment Owner</option>
        </select>

        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#FFF' }}>
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Pending Verification">Pending Verification</option>
          <option value="Suspended">Suspended</option>
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
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>User ID</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Name & Contact</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Role</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Location</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Joined</th>
              <th style={{ padding: '12px 16px', color: '#6B7280', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u, i) => (
              <tr key={u.id} style={{ borderBottom: i === filtered.length - 1 ? 'none' : '1px solid #E5E7EB' }}>
                <td style={{ padding: '12px 16px', color: '#374151', fontWeight: '500' }}>{u.id}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontWeight: 'bold', color: '#111827' }}>{u.name}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{u.phone}</div>
                </td>
                <td style={{ padding: '12px 16px', color: '#374151' }}>{u.role}</td>
                <td style={{ padding: '12px 16px', color: '#6B7280' }}>{u.location}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ 
                    backgroundColor: u.status === 'Active' ? '#DEF7EC' : u.status === 'Suspended' ? '#FDE8E8' : '#FEF08A', 
                    color: u.status === 'Active' ? '#03543F' : u.status === 'Suspended' ? '#9B1C1C' : '#723B13', 
                    padding: '4px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600' 
                  }}>
                    {u.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ color: '#374151' }}>{u.joined}</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{u.lastActive}</div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ padding: '4px 8px', fontSize: '0.8rem', backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
                    {u.status === 'Active' && (
                      <button onClick={() => {
                        if(window.confirm(`Suspend ${u.name}?`)) alert(`${u.name} suspended. Logged in audit trail.`);
                      }} style={{ padding: '4px 8px', fontSize: '0.8rem', backgroundColor: '#FFF', color: 'var(--color-terracotta)', border: '1px solid var(--color-terracotta)', borderRadius: '4px', cursor: 'pointer' }}>Suspend</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>No users found matching filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
