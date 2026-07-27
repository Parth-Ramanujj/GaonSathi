import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

export default function ProviderJobsPage() {
  const jobs = [
    { id: 'JOB-901', customer: 'Ramesh Patel', service: 'Tractor Repair', status: 'In Progress', date: 'Today' },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Link href="/provider" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
          ← Back to Provider Hub
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-leaf)', marginBottom: '2rem' }}>
          Active Jobs
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobs.length === 0 ? (
            <p style={{ color: 'var(--color-soil)', textAlign: 'center', fontSize: '1.2rem', marginTop: '2rem' }}>No active jobs.</p>
          ) : (
            jobs.map(job => (
              <div key={job.id} className="card" style={{ borderLeft: '6px solid var(--color-leaf)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-indigo)' }}>{job.customer}</h2>
                    <p style={{ margin: 0, color: 'var(--color-soil)' }}>{job.service}</p>
                  </div>
                  <span style={{ backgroundColor: 'var(--color-wheat-deep)', color: 'var(--color-leaf)', padding: '4px 12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {job.status}
                  </span>
                </div>
                <Link href={`/provider/jobs/${job.id}`} style={{ display: 'block', width: '100%' }}>
                  <button className="btn btn-leaf" style={{ width: '100%' }}>View Job Details</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
