'use client';

import { BuntingDivider } from '@gaon-sathi/ui';
import Link from 'next/link';
import '../globals.css';

export default function SettingsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', marginBottom: '2rem' }}>
          Settings
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-indigo)' }}>App Language</h3>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Current: English</p>
            </div>
            <button onClick={() => alert("Language selector opening...")} className="btn btn-turmeric">Change</button>
          </div>

          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-indigo)' }}>My Roles</h3>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>Farmer, Service Provider</p>
            </div>
            <Link href="/onboarding/role">
              <button className="btn btn-leaf">Edit Roles</button>
            </Link>
          </div>

          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-indigo)' }}>Linked Phone</h3>
              <p style={{ margin: 0, color: 'var(--color-soil)', opacity: 0.8 }}>+91 9876543210</p>
            </div>
            <button onClick={() => {
              const newPhone = prompt("Enter new 10-digit phone number:");
              if(newPhone) alert("OTP sent to " + newPhone + " for verification.");
            }} className="btn btn-indigo">Update Phone</button>
          </div>

          {/* Flow 21: Account/data delete request */}
          <div className="card" style={{ border: '2px solid var(--color-terracotta)', backgroundColor: 'var(--color-paper)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: 'var(--color-terracotta)' }}>Danger Zone</h3>
            <p style={{ margin: '0 0 1rem 0', color: 'var(--color-soil)', opacity: 0.8 }}>Permanently delete your account and all associated data.</p>
            <button onClick={() => {
              const confirm = window.confirm("WARNING: This action cannot be undone. Are you sure you want to delete your account and all data?");
              if(confirm) alert("Account deletion request submitted. Your data will be wiped within 30 days.");
            }} className="btn btn-terracotta" style={{ width: '100%' }}>Delete Account Data</button>
          </div>

          <Link href="/welcome" style={{ width: '100%' }}>
            <button className="btn" style={{ backgroundColor: 'var(--color-soil)', color: 'white', marginTop: '1rem', width: '100%' }}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
