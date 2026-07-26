import Link from 'next/link';
import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function CropAdvisoryPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '1rem', maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1rem', backgroundColor: 'var(--color-paper)', borderBottom: '2px solid var(--color-wheat-deep)', borderRadius: '14px 14px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: 'var(--color-leaf)', margin: 0 }}>🤖 Crop Advisor AI</h2>
          <Link href="/agri" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', fontSize: '0.9rem' }}>Close</Link>
        </div>

        <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
              <div style={{ backgroundColor: 'var(--color-wheat)', padding: '1rem', borderRadius: '14px 14px 14px 0', border: '1px solid var(--color-wheat-deep)' }}>
                <p style={{ margin: 0, color: 'var(--color-soil)' }}>Hello! I am your Gaon Sathi AI advisor. What crop issue are you facing today? (You can upload a photo or send a voice note).</p>
              </div>
            </div>

            <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
              <div style={{ backgroundColor: 'var(--color-leaf)', padding: '1rem', borderRadius: '14px 14px 0 14px', color: 'white' }}>
                <p style={{ margin: 0 }}>My cotton leaves are turning yellow with brown spots.</p>
              </div>
            </div>

            <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
              <div style={{ backgroundColor: 'var(--color-wheat)', padding: '1rem', borderRadius: '14px 14px 14px 0', border: '1px solid var(--color-wheat-deep)' }}>
                <p style={{ margin: 0, color: 'var(--color-soil)' }}>Based on your description, this looks like a fungal infection (Alternaria leaf spot). I recommend applying a fungicide like Mancozeb at 2.5g per litre of water.</p>
              </div>
            </div>

          </div>
        </div>

        <div style={{ padding: '1rem', backgroundColor: 'var(--color-paper)', borderRadius: '0 0 14px 14px', borderTop: '2px solid var(--color-wheat-deep)', display: 'flex', gap: '0.5rem' }}>
          <button className="btn" style={{ padding: '0 1rem', fontSize: '1.5rem', backgroundColor: 'var(--color-wheat)' }}>📷</button>
          <input 
            type="text" 
            placeholder="Type your question here..." 
            style={{ flex: 1, padding: '12px', border: '1px solid var(--color-soil)', borderRadius: '8px' }}
          />
          <button className="btn btn-leaf" style={{ padding: '0 1rem', fontSize: '1.5rem' }}>🎤</button>
        </div>
      </div>
    </main>
  );
}
