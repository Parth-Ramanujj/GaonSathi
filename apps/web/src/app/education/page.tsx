import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

export default function EducationHubPage() {
  const videos = [
    { id: 'v1', title: 'ડ્રિપ ઇરિગેશન કેવી રીતે લગાવવું?', duration: '1:45', views: '12k', color: 'var(--color-indigo)' },
    { id: 'v2', title: 'ઓર્ગેનિક ખેતી ના ફાયદા', duration: '2:10', views: '8.5k', color: 'var(--color-leaf)' },
    { id: 'v3', title: 'બેંક લોન માટે કેવી રીતે અરજી કરવી?', duration: '3:05', views: '15k', color: 'var(--color-terracotta)' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Dashboard
            </Link>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--color-indigo)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>📚</span> તાલીમ 
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '80vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
          {videos.map(video => (
            <div key={video.id} style={{ height: '70vh', flexShrink: 0, scrollSnapAlign: 'start', backgroundColor: video.color, borderRadius: '16px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              
              {/* Play Button Mock */}
              <div style={{ fontSize: '6rem', opacity: 0.8 }}>▶️</div>

              {/* Overlay Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>{video.title}</h2>
                <div style={{ display: 'flex', gap: '1rem', opacity: 0.9 }}>
                  <span>⏱️ {video.duration}</span>
                  <span>👁️ {video.views}</span>
                </div>
              </div>

              {/* Action Buttons (Right side) */}
              <div style={{ position: 'absolute', right: '1rem', bottom: '5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2rem' }}>👍</span>
                  <span style={{ fontSize: '0.9rem' }}>Like</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2rem' }}>↗️</span>
                  <span style={{ fontSize: '0.9rem' }}>Share</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
