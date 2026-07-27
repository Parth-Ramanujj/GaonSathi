'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../../globals.css';

// --- SEED DATA ---
const seedData = [
  {
    id: 'c1', category: 'legal_compliance', title: 'Payment escrow must use a licensed Payment Aggregator',
    why_it_matters: 'Under RBI rules, a platform cannot itself hold customer funds ("self-built escrow" is not legal) — only a licensed Payment Aggregator can.',
    solution_steps: 'Use Razorpay Route/Escrow (or an equivalent RBI-authorized PA) for all hold-and-release payment flows; do not build a custom fund-holding ledger.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c2', category: 'legal_compliance', title: 'TDS under Section 194-O',
    why_it_matters: 'As a marketplace operator, Gaon Sathi must deduct 1% TDS on payments made to providers/shop owners/equipment owners and deposit it with the government.',
    solution_steps: 'Get a Chartered Accountant to set up TDS deduction and filing; check whether the payment gateway offers built-in 194-O compliance tooling.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c3', category: 'legal_compliance', title: 'GST registration and filing',
    why_it_matters: 'Commission income is subject to GST once turnover crosses the threshold.',
    solution_steps: 'Register for GST, charge it correctly on commission invoices, file monthly/quarterly returns via a CA.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c4', category: 'legal_compliance', title: 'Gig Worker Welfare Cess (emerging Labour Code requirement)',
    why_it_matters: 'New labour codes may require aggregator platforms to contribute toward gig-worker welfare funds.',
    solution_steps: 'Consult a labour-law advisor before/at launch to check current applicability and budget for it if active in your state.',
    status: 'not_started', priority: 'medium', owner: '', notes: ''
  },
  {
    id: 'c5', category: 'legal_compliance', title: 'Fertilizer/Pesticide seller licensing',
    why_it_matters: 'Selling fertilizer/pesticide requires a license under the Fertilizer Control Order and Insecticides Act; unlicensed sellers on the platform create legal exposure.',
    solution_steps: 'Add a mandatory license-document upload step to shop-owner KYC before their inventory can go live.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c6', category: 'legal_compliance', title: 'Grievance Officer (IT Rules 2021)',
    why_it_matters: 'Indian intermediary rules require a named Grievance Officer with public contact details, and a defined complaint-resolution timeline.',
    solution_steps: 'Appoint a Grievance Officer, display their name/email/phone in Settings and app footer, and build the complaint-intake flow (already covered in flow #10/#28 of the screens spec) to route to them.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c7', category: 'legal_compliance', title: 'Limitation of Liability clause (not a blanket disclaimer)',
    why_it_matters: 'A generic "we are not responsible for anything" statement does not hold up on its own; safe-harbour protection under IT Act Section 79 requires actual due diligence (KYC, grievance handling, no direct control over service delivery).',
    solution_steps: 'Get an India-based startup lawyer to draft a proper Limitation of Liability clause; maintain provider KYC and ratings; consider an optional service-protection fund for high-risk categories (electrician, plumber).',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c8', category: 'legal_compliance', title: 'DPDP Act data privacy compliance',
    why_it_matters: 'India\'s Digital Personal Data Protection Act requires consent capture, data minimization, and user rights to access/export/delete their data.',
    solution_steps: 'Build the account/data-delete flow (already in flow list), draft a compliant Privacy Policy, and re-capture consent on material policy changes.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c9', category: 'legal_compliance', title: 'Consumer Protection (E-commerce) Rules',
    why_it_matters: 'Marketplace platforms must display seller/provider identity clearly and maintain a grievance mechanism; ranking manipulation is restricted.',
    solution_steps: 'Ensure provider/shop details are visible before booking, and route complaints through the Grievance Officer flow above.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c10', category: 'data_partnership', title: 'Mandi price data source',
    why_it_matters: 'Real, accurate crop prices can\'t be manually maintained at scale.',
    solution_steps: 'Integrate the Indian government\'s Agmarknet API (free, official) for live mandi prices instead of building manual data entry.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c11', category: 'data_partnership', title: 'Weather data source',
    why_it_matters: 'Weather alerts need a reliable, licensed data feed.',
    solution_steps: 'Integrate IMD\'s public API or a paid private provider (e.g., Skymet, OpenWeatherMap) via a formal data-partnership/API agreement.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c12', category: 'data_partnership', title: 'Government scheme content sourcing',
    why_it_matters: 'Scheme details (eligibility, benefits, application steps) must be accurate and kept current, and can\'t be AI-generated without verification.',
    solution_steps: 'Assign someone to compile and periodically update scheme content from official sources like myscheme.gov.in.',
    status: 'not_started', priority: 'medium', owner: '', notes: ''
  },
  {
    id: 'c13', category: 'accessibility_technical', title: 'Low-literacy user support',
    why_it_matters: 'Many target users may have limited reading ability.',
    solution_steps: 'Prioritize icon-first navigation, add voice input/output to the crop-advisory chat, and evaluate an IVR/USSD fallback for feature-phone users without smartphones.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c14', category: 'accessibility_technical', title: 'Low-end device support',
    why_it_matters: 'Rural users often have older, low-RAM Android phones.',
    solution_steps: 'Target Android Go edition compatibility, keep the APK under ~20-30MB, lazy-load images, and test on 2GB RAM devices before launch.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c15', category: 'business_setup', title: 'Company registration',
    why_it_matters: 'Needed for payment gateway approval and legal operation.',
    solution_steps: 'Register a Pvt Ltd or LLP through a CA/company-secretary service.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c16', category: 'business_setup', title: 'Privacy Policy + Terms of Service drafting',
    why_it_matters: 'Required for legal compliance and payment gateway onboarding.',
    solution_steps: 'Hire a lawyer or a legal-tech drafting service, then customize for Gaon Sathi\'s specific data flows.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c17', category: 'business_setup', title: 'Finalize commission percentage',
    why_it_matters: 'This is a business decision that gets hardcoded into the payment module.',
    solution_steps: 'Benchmark competitor commissions (typically 10-15%) and lock the number before payment-module development finishes.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c18', category: 'business_setup', title: 'Pilot location selection',
    why_it_matters: 'Determines the entire go-to-market plan.',
    solution_steps: 'Do a field visit/local survey to shortlist a taluka with good mobile penetration and existing WhatsApp usage patterns.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
  {
    id: 'c19', category: 'business_setup', title: 'Hire developer(s)/team',
    why_it_matters: 'Needed to actually execute the other three prompt documents.',
    solution_steps: 'Use the implementation prompt files as the job spec when hiring freelancers or a dev agency.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c20', category: 'business_setup', title: 'Trademark search for "Gaon Sathi" name',
    why_it_matters: 'Avoid rebranding after launch due to a conflicting existing trademark.',
    solution_steps: 'Search the IP India public trademark database before finalizing the brand name.',
    status: 'not_started', priority: 'medium', owner: '', notes: ''
  },
  {
    id: 'c21', category: 'business_setup', title: 'Payment gateway business account setup',
    why_it_matters: 'Required before any live transaction can process.',
    solution_steps: 'Apply for a Razorpay (or equivalent) business account; complete KYC with PAN, GST, and bank proof.',
    status: 'not_started', priority: 'critical', owner: '', notes: ''
  },
  {
    id: 'c22', category: 'business_setup', title: 'Regional-language content review',
    why_it_matters: 'AI-translated Gujarati/Hindi copy can read unnaturally to native speakers.',
    solution_steps: 'Have a native speaker review all in-app copy before shipping to real users.',
    status: 'not_started', priority: 'medium', owner: '', notes: ''
  },
  {
    id: 'c23', category: 'business_setup', title: 'App store developer account',
    why_it_matters: 'Required to publish the app.',
    solution_steps: 'Register a Google Play Console account (one-time fee); plan for an Apple Developer account later if iOS is needed.',
    status: 'not_started', priority: 'high', owner: '', notes: ''
  },
];

export default function ComplianceHubPage() {
  const [items, setItems] = useState(seedData);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Stats
  const total = items.length;
  const done = items.filter(i => i.status === 'done').length;
  const progressPercent = Math.round((done / total) * 100);

  // Colors
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'var(--color-terracotta)';
      case 'high': return 'var(--color-turmeric-dark)';
      default: return 'var(--color-soil)';
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'not_started': return 'Not Started';
      case 'in_progress': return 'In Progress';
      case 'done': return 'Done';
      case 'not_applicable': return 'Not Applicable';
      default: return status;
    }
  };

  const handleUpdate = (id: string, field: string, value: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // Group & Filter
  const filteredItems = items.filter(i => 
    (filterStatus === 'all' || i.status === filterStatus) &&
    (i.title.toLowerCase().includes(search.toLowerCase()) || i.why_it_matters.toLowerCase().includes(search.toLowerCase()))
  );

  const grouped = {
    'Legal & Compliance': filteredItems.filter(i => i.category === 'legal_compliance'),
    'Data & Partnerships': filteredItems.filter(i => i.category === 'data_partnership'),
    'Accessibility & Tech': filteredItems.filter(i => i.category === 'accessibility_technical'),
    'Business Setup': filteredItems.filter(i => i.category === 'business_setup'),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      <div style={{ flex: 1, padding: '1rem', width: '100%' }}>
        <h1 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem' }}>
          🛡️ Compliance & Business Reference Hub
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#6B7280', margin: 0, fontSize: '0.9rem' }}>
            Internal checklist for all non-engineering requirements.
          </p>
          <button onClick={() => alert("Automated Audit Triggered. Generating PDF report of pending compliance items...")} style={{ backgroundColor: 'var(--color-indigo)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Run Audit Report</button>
        </div>

        {/* Progress Card */}
        <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: '0 0 0.5rem 0', color: '#111827', fontSize: '1.1rem' }}>{done} of {total} items done</h2>
            <div style={{ width: '100%', height: '8px', backgroundColor: '#F3F4F6', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: 'var(--color-leaf)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
          <span style={{ fontSize: '2rem', color: 'var(--color-leaf)', fontWeight: 'bold' }}>{progressPercent}%</span>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Search title or details..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, padding: '8px 12px', borderRadius: '4px', border: '1px solid #D1D5DB', fontSize: '0.9rem' }} 
          />
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #D1D5DB', fontSize: '0.9rem', backgroundColor: '#FFF' }}
          >
            <option value="all">All Statuses</option>
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
            <option value="not_applicable">Not Applicable</option>
          </select>
        </div>

        {/* List View */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(grouped).map(([catName, catItems]) => {
            if (catItems.length === 0) return null;
            return (
              <div key={catName}>
                <h3 style={{ color: '#374151', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}>
                  {catName} ({catItems.length})
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {catItems.map(item => (
                    <div key={item.id} style={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px', borderLeft: `4px solid ${getPriorityColor(item.priority)}`, padding: '1rem' }}>
                      
                      <div 
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer' }}
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      >
                        <div style={{ paddingRight: '1rem' }}>
                          <h4 style={{ margin: '0 0 0.25rem 0', color: '#111827', fontSize: '1rem' }}>{item.title}</h4>
                          <span style={{ backgroundColor: '#F3F4F6', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#6B7280', fontWeight: 'bold' }}>
                            {item.priority.toUpperCase()} PRIORITY
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{ color: item.status === 'done' ? 'var(--color-leaf)' : '#6B7280', fontWeight: 'bold', fontSize: '0.8rem' }}>
                            {getStatusLabel(item.status)}
                          </span>
                          <span style={{ color: '#9CA3AF' }}>{expandedId === item.id ? '▲' : '▼'}</span>
                        </div>
                      </div>

                      {expandedId === item.id && (
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                          
                          {/* Read-Only Prompt Text */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                              <h5 style={{ margin: '0 0 0.5rem 0', color: '#6B7280', fontSize: '0.8rem', textTransform: 'uppercase' }}>Why it matters</h5>
                              <p style={{ margin: 0, color: '#374151', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.why_it_matters}</p>
                            </div>
                            <div>
                              <h5 style={{ margin: '0 0 0.5rem 0', color: '#6B7280', fontSize: '0.8rem', textTransform: 'uppercase' }}>Solution steps</h5>
                              <p style={{ margin: 0, color: '#374151', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 'bold' }}>{item.solution_steps}</p>
                            </div>
                          </div>

                          {/* Editable Controls */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: '#F9FAFB', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.25rem' }}>Status</label>
                              <select 
                                value={item.status} 
                                onChange={(e) => handleUpdate(item.id, 'status', e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #D1D5DB' }}
                              >
                                <option value="not_started">Not Started</option>
                                <option value="in_progress">In Progress</option>
                                <option value="done">Done</option>
                                <option value="not_applicable">Not Applicable</option>
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.25rem' }}>Owner</label>
                              <input 
                                type="text" 
                                value={item.owner} 
                                onChange={(e) => handleUpdate(item.id, 'owner', e.target.value)}
                                placeholder="e.g. Founder, Lawyer"
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #D1D5DB' }}
                              />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.25rem' }}>Notes / Updates</label>
                              <textarea 
                                rows={2}
                                value={item.notes}
                                onChange={(e) => handleUpdate(item.id, 'notes', e.target.value)}
                                placeholder="Jot down any progress or updates here..."
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #D1D5DB', fontFamily: 'var(--font-body)' }}
                              />
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
