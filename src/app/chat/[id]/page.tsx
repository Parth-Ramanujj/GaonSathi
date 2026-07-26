import { BuntingDivider } from '@gaon-sathi/ui';
import '../../globals.css';

export default function ChatConversationPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '1rem', maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1rem', backgroundColor: 'var(--color-paper)', borderBottom: '2px solid var(--color-wheat-deep)', borderRadius: '14px 14px 0 0' }}>
          <h2 style={{ color: 'var(--color-indigo)', margin: 0 }}>Conversation #{params.id}</h2>
        </div>

        <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', overflowY: 'auto' }}>
          {/* Chat messages would go here */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', justifyContent: 'flex-end' }}>
             <p style={{ textAlign: 'center', color: 'var(--color-soil)', opacity: 0.6 }}>This is the start of your conversation.</p>
          </div>
        </div>

        <div style={{ padding: '1rem', backgroundColor: 'var(--color-paper)', borderRadius: '0 0 14px 14px', borderTop: '2px solid var(--color-wheat-deep)', display: 'flex', gap: '0.5rem' }}>
          <input 
            type="text" 
            placeholder="Type a message..." 
            style={{ flex: 1, padding: '12px', border: '1px solid var(--color-soil)', borderRadius: '8px' }}
          />
          <button className="btn btn-turmeric">Send</button>
        </div>
      </div>
    </main>
  );
}
