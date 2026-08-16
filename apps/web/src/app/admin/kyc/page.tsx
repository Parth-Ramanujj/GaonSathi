'use client';

import React, { useState } from 'react';
import { useGaonSathi } from '@/lib/store/GaonSathiContext';

export default function AdminKYCPage() {
  const { kycQueue, approveKYC, rejectKYC } = useGaonSathi();
  const [selectedId, setSelectedId] = useState<string>(kycQueue[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'Pending' | 'All'>('Pending');

  const filteredQueue = activeTab === 'Pending' 
    ? kycQueue.filter(k => k.status === 'Pending')
    : kycQueue;

  const selectedItem = kycQueue.find(k => k.id === selectedId) || filteredQueue[0] || kycQueue[0];

  const handleApprove = (id: string) => {
    approveKYC(id);
    alert(`KYC for ${selectedItem?.user} Approved! The listing is now LIVE on the End-User Marketplace.`);
  };

  const handleReject = (id: string) => {
    const reason = window.prompt('Enter rejection reason (sent to provider):');
    if (reason) {
      rejectKYC(id, reason);
      alert(`KYC for ${selectedItem?.user} rejected with reason: "${reason}".`);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', height: '100%', minHeight: '650px' }}>
      
      {/* Left List: The Queue */}
      <div style={{ width: '360px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#111827' }}>
            Verification Queue ({filteredQueue.length})
          </h2>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button 
              onClick={() => setActiveTab('Pending')} 
              style={{ padding: '4px 8px', fontSize: '0.75rem', borderRadius: '4px', border: '1px solid #D1D5DB', backgroundColor: activeTab === 'Pending' ? '#1F3A5F' : '#FFF', color: activeTab === 'Pending' ? '#FFF' : '#374151', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Pending
            </button>
            <button 
              onClick={() => setActiveTab('All')} 
              style={{ padding: '4px 8px', fontSize: '0.75rem', borderRadius: '4px', border: '1px solid #D1D5DB', backgroundColor: activeTab === 'All' ? '#1F3A5F' : '#FFF', color: activeTab === 'All' ? '#FFF' : '#374151', cursor: 'pointer', fontWeight: 'bold' }}
            >
              All
            </button>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', maxHeight: '580px' }}>
          {filteredQueue.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', color: '#6B7280' }}>
              ✓ All verifications cleared!
            </div>
          ) : (
            filteredQueue.map(item => {
              const isSelected = selectedItem?.id === item.id;
              return (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedId(item.id)}
                  style={{ 
                    backgroundColor: isSelected ? '#EFF6FF' : '#FFF', 
                    border: isSelected ? '2px solid var(--color-indigo)' : '1px solid #E5E7EB', 
                    borderRadius: '8px', 
                    padding: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#111827', fontSize: '0.85rem' }}>{item.id}</span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold', 
                      padding: '2px 8px', 
                      borderRadius: '10px',
                      backgroundColor: item.status === 'Approved' ? '#DEF7EC' : item.status === 'Rejected' ? '#FDE8E8' : '#FEF08A',
                      color: item.status === 'Approved' ? '#03543F' : item.status === 'Rejected' ? '#9B1C1C' : '#723B13'
                    }}>
                      {item.status}
                    </span>
                  </div>
                  
                  <div style={{ fontSize: '1.05rem', color: 'var(--color-indigo)', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    {item.user}
                  </div>
                  
                  <div style={{ fontSize: '0.8rem', color: '#6B7280', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.type}</span>
                    <span>{item.submitted}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Area: Document Review Split Pane */}
      {selectedItem ? (
        <div style={{ flex: 1, backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>Review: {selectedItem.user}</h2>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#6B7280' }}>
                {selectedItem.type} • Submitted {selectedItem.submitted}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {selectedItem.status !== 'Approved' && (
                <button 
                  onClick={() => handleApprove(selectedItem.id)} 
                  style={{ backgroundColor: 'var(--color-leaf)', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  ✓ Approve Listing
                </button>
              )}
              {selectedItem.status !== 'Rejected' && (
                <button 
                  onClick={() => handleReject(selectedItem.id)} 
                  style={{ backgroundColor: '#FFF', color: 'var(--color-terracotta)', border: '1px solid var(--color-terracotta)', padding: '8px 18px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  ✕ Reject
                </button>
              )}
              {selectedItem.status === 'Approved' && (
                <span style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  ✓ Approved & Live on User App
                </span>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flex: 1 }}>
            
            {/* Document Viewer Simulation */}
            <div style={{ flex: 2, padding: '1.5rem', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#374151', alignSelf: 'flex-start' }}>
                {selectedItem.docType}
              </h3>
              <div style={{ flex: 1, width: '100%', minHeight: '260px', backgroundColor: '#FFF', border: '2px dashed #CBD5E1', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#64748B', gap: '0.5rem', padding: '2rem' }}>
                <span style={{ fontSize: '3rem' }}>📄</span>
                <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-indigo)' }}>{selectedItem.docType}</p>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>{selectedItem.details}</p>
                <span style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                  Digitally Signed by Gaon Sathi Mitra
                </span>
              </div>
            </div>

            {/* Extracted Data / Verification Checklist */}
            <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase' }}>Provider / Business Name</h4>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem', color: '#111827' }}>{selectedItem.user}</p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase' }}>Details & Rates</h4>
                <p style={{ margin: 0, fontWeight: '500', fontSize: '0.95rem', color: 'var(--color-soil)' }}>{selectedItem.details}</p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase' }}>Verification Status</h4>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem', color: selectedItem.status === 'Approved' ? 'var(--color-leaf)' : '#F59E0B' }}>
                  {selectedItem.status === 'Approved' ? '✅ Verified & Active' : '⏳ Awaiting Coordinator Action'}
                </p>
              </div>
              
              <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', width: '100%', margin: '0' }} />
              
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase' }}>Coordinator Checklist</h4>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <input type="checkbox" defaultChecked /> Identity verified via Aadhar/Phone
                </label>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <input type="checkbox" defaultChecked /> Village residency confirmed (Motipur)
                </label>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem' }}>
                  <input type="checkbox" defaultChecked /> Pricing & rates within village standards
                </label>
              </div>
            </div>

          </div>

        </div>
      ) : (
        <div style={{ flex: 1, backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7280' }}>
          Select an item from the queue to review
        </div>
      )}

    </div>
  );
}
