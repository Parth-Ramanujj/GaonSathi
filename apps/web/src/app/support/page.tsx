'use client';

import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function SupportPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Help & Support
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ color: 'var(--color-leaf)' }}>Contact Us</h2>
            <p style={{ color: 'var(--color-soil)' }}>Need help with a booking or your account?</p>
            <button onClick={() => alert("Dialing Gaon Sathi Support: 1800-123-4567...")} className="btn btn-leaf">Call Support Helpline</button>
            <button onClick={() => {
              const reason = prompt("Describe the issue or user you are reporting:");
              if(reason) alert("Report submitted successfully. Our Trust & Safety team will review this within 24 hours.");
            }} className="btn btn-turmeric">Report an Issue / User</button>
          </div>

          <div className="card">
            <h2 style={{ color: 'var(--color-indigo)', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem' }}>How do I change my role?</h3>
              <p style={{ color: 'var(--color-soil)', opacity: 0.8 }}>Go to Settings &gt; Edit Roles to add or remove roles.</p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem' }}>How do payments work?</h3>
              <p style={{ color: 'var(--color-soil)', opacity: 0.8 }}>Payments for local services are held in escrow until the job is marked complete by both parties.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
