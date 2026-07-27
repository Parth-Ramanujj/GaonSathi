'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* 1. Top KPI Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem' }}>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-indigo)' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Active Today</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#111827' }}>4,210</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-leaf)' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Bookings Today</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#111827' }}>842</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-turmeric)' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>GMV Today</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#111827' }}>₹4.2L</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-leaf)' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Revenue Today</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-leaf)' }}>₹42k</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-terracotta)' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Pending KYC</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-terracotta)' }}>14</h2>
        </div>
        <div style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB', borderTop: '4px solid var(--color-terracotta)' }}>
          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold' }}>Open Disputes</p>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-terracotta)' }}>3</h2>
        </div>
      </div>

      {/* 2. Main Middle Section: Charts & Heatmap */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Trend Chart Placeholder */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>Revenue vs Bookings (Last 30 Days)</h3>
            <select style={{ padding: '4px 8px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '0.85rem' }}>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div style={{ height: '300px', backgroundColor: '#F9FAFB', border: '1px dashed #D1D5DB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>
            [Line Chart Component: Bookings & Revenue Overlay]
          </div>
        </div>

        {/* Regional Heat Snapshot */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Regional Heat Snapshot</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                <th style={{ paddingBottom: '0.5rem' }}>Taluka</th>
                <th style={{ paddingBottom: '0.5rem', textAlign: 'right' }}>Active Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: '500', color: '#374151', borderBottom: '1px solid #F3F4F6' }}>Motipur</td>
                <td style={{ padding: '0.75rem 0', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-leaf)', borderBottom: '1px solid #F3F4F6' }}>1,240</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: '500', color: '#374151', borderBottom: '1px solid #F3F4F6' }}>Vadnagar</td>
                <td style={{ padding: '0.75rem 0', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-leaf)', borderBottom: '1px solid #F3F4F6' }}>980</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: '500', color: '#374151', borderBottom: '1px solid #F3F4F6' }}>Visnagar</td>
                <td style={{ padding: '0.75rem 0', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-turmeric-dark)', borderBottom: '1px solid #F3F4F6' }}>650</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 0', fontWeight: '500', color: '#374151' }}>Unjha</td>
                <td style={{ padding: '0.75rem 0', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-terracotta)' }}>120</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* 3. Bottom Section: Alerts & Quick Links */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Alerts Feed */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>Live Alerts Feed</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-leaf)', fontWeight: 'bold' }}>● LIVE (Auto-refresh 60s)</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#FEF2F2', borderLeft: '4px solid var(--color-terracotta)', borderRadius: '0 4px 4px 0' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#9B1C1C', fontWeight: 'bold' }}>1 dispute unresolved &gt; 24 hours</p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#B91C1C' }}>Requires manual intervention in Dispute #DSP-889</p>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#FFFBEB', borderLeft: '4px solid var(--color-turmeric-dark)', borderRadius: '0 4px 4px 0' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400E', fontWeight: 'bold' }}>2 KYC verifications pending &gt; 48 hours</p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#B45309' }}>SLA breach approaching.</p>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#F3F4F6', borderLeft: '4px solid #6B7280', borderRadius: '0 4px 4px 0' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#374151', fontWeight: 'bold' }}>Daily Backup Completed</p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#6B7280' }}>Database backup success at 03:00 AM.</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#111827' }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Link href="/admin/kyc" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', textDecoration: 'none', color: '#374151', fontWeight: 'bold', transition: 'background-color 0.2s' }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</span>
              Approve KYC
            </Link>
            <Link href="/admin/disputes" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', textDecoration: 'none', color: '#374151', fontWeight: 'bold', transition: 'background-color 0.2s' }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚖️</span>
              View Disputes
            </Link>
            <Link href="/admin/finance" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', textDecoration: 'none', color: '#374151', fontWeight: 'bold', transition: 'background-color 0.2s' }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💸</span>
              Process Payouts
            </Link>
            <Link href="/admin/bookings" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', textDecoration: 'none', color: '#374151', fontWeight: 'bold', transition: 'background-color 0.2s' }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</span>
              Today's Orders
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
